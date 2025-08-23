<script setup="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 7: Eliminate obsolete object references'
})

import { code_block } from '~/data/item7'

</script>

<template>
    <div class="main">
        <p>Nguyên tắc "Eliminate obsolete object references" (Loại bỏ các tham chiếu đối tượng lỗi thời) có nghĩa là bạn
            nên <strong>làm cho các tham chiếu đến một đối tượng trở thành <span class="code">null</span> ngay khi bạn
                không còn cần đến đối tượng đó nữa.</strong>
        </p><br>
        <p>Việc này giúp bộ dọn rác (Garbage Collector - GC) của Java biết rằng đối tượng đó có thể bị thu hồi, qua đó
            <strong>ngăn chặn các vấn đề rò rỉ bộ nhớ (memory leaks).</strong>
        </p><br>
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>Trong Java, Garbage Collector tự động thu hồi bộ nhớ của các đối tượng không còn được tham chiếu đến ở bất kỳ
            đâu. Tuy nhiên, nếu bạn giữ một tham chiếu đến một đối tượng mà bạn sẽ không bao giờ sử dụng lại, GC sẽ
            không thể dọn dẹp nó. Đây được gọi là "tham chiếu lỗi thời" (obsolete reference).</p><br>
        <p>Việc giữ các tham chiếu lỗi thời sẽ khiến bộ nhớ không được giải phóng, dẫn đến rò rỉ bộ nhớ. Theo thời gian,
            những rò rỉ này tích tụ lại, làm ứng dụng tiêu tốn ngày càng nhiều RAM và cuối cùng có thể gây ra lỗi
            <span class="code">OutOfMemoryError</span>.
        </p><br>
        <p>Hãy tưởng tượng bạn có một sợi dây buộc vào một quả bóng bay 🎈. Chừng nào bạn còn giữ sợi dây (tham chiếu),
            quả bóng (đối tượng) sẽ không thể bay đi (bị GC thu hồi), ngay cả khi bạn đã chơi xong với nó. Việc loại bỏ
            tham chiếu lỗi thời cũng giống như bạn thả sợi dây ra.</p><br>
        <hr><br>
        <div class="section pl-3">
            <Heading1 title="Ứng dụng" />
            <p>Vấn đề này thường không xảy ra trong các đoạn mã thông thường, vì các biến cục bộ sẽ tự động bị loại bỏ
                khi
                phương thức kết thúc. Tuy nhiên, nó lại là một nguy cơ tiềm ẩn trong các lớp <strong>quản lý bộ nhớ của
                    chính nó</strong>.
            </p>
            <BlockOpinion opinion="1. Khi triển khai các Cấu trúc dữ liệu riêng">
                <p>Đây là kịch bản kinh điển nhất. Khi bạn tự tạo một cấu trúc dữ liệu như Stack, Queue, hoặc một danh
                    sách
                    tùy chỉnh, bạn phải tự quản lý các tham chiếu.
                </p><br>
                <p><strong>Ví dụ kinh điển: Lớp <span class="code">Stack</span> bị rò rỉ bộ nhớ:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Vấn đề ở đâu?</strong> Khi bạn gọi <span class="code">pop()</span>, biến <span
                        class="code">size</span> giảm xuống, nhưng mảng <span class="code">elements</span> vẫn giữ tham
                    chiếu đến đối
                    tượng đã bị lấy ra. Nếu stack này được sử dụng trong thời gian dài, nó sẽ giữ lại tham chiếu đến rất
                    nhiều đối tượng không bao giờ được dùng đến nữa.</p><br>
                <p><strong>✅ Phương pháp thay thế:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p>Bằng cách gán <span class="code">null</span> cho phần tử vừa được lấy ra, chúng ta đã "thả sợi dây",
                    cho phép GC thu hồi đối
                    tượng đó nếu không còn tham chiếu nào khác giữ nó.</p>
            </BlockOpinion>
            <BlockOpinion opinion="2. Khi triển khai Caches">
                <p>Các lớp cache được thiết kế để lưu trữ các đối tượng trong bộ nhớ để truy cập nhanh. Nếu bạn không có
                    một cơ chế dọn dẹp cache hợp lý (ví dụ: dựa trên thời gian, số lượng phần tử), các đối tượng trong
                    cache có thể trở thành tham chiếu lỗi thời và gây rò rỉ bộ nhớ.</p><br>
                <p><strong>Giải pháp tốt:</strong> Sử dụng <span class="code">WeakHashMap</span> hoặc các thư viện cache
                    chuyên dụng như Guava Cache, Caffeine. Các
                    công cụ này sử dụng các tham chiếu yếu (weak references) để tự động loại bỏ các đối tượng khỏi cache
                    khi chúng không còn được tham chiếu ở nơi khác.</p>
            </BlockOpinion>
            <BlockOpinion opinion="3. Listeners và Callbacks">
                <p>Khi bạn đăng ký một listener (ví dụ: một UI component lắng nghe một sự kiện từ background service),
                    bạn đang tạo ra một tham chiếu từ service đến component đó. Nếu bạn quên <strong>hủy đăng ký
                        (unregister)</strong>
                    listener khi component không còn được sử dụng (ví dụ: khi đóng cửa sổ), tham chiếu đó sẽ tồn tại mãi
                    mãi, và cả component lẫn các đối tượng liên quan sẽ không bao giờ được giải phóng.</p><br>
                <p><strong>Best Practice: </strong> Luôn cung cấp một phương thức để hủy đăng ký listener và gọi nó
                    trong một khối <span class="code">finally</span> hoặc trong phương thức dọn dẹp của đối tượng (ví
                    dụ: <span class="code">dispose()</span>, <span class="code">onStop()</span>).
                </p>
            </BlockOpinion><br>
            <p><strong>Kết luận: </strong>Mặc dù GC của Java rất thông minh, nó không phải là phép màu. Việc chủ động
                loại bỏ các tham chiếu không còn cần thiết là một thói quen tốt, đặc biệt quan trọng khi bạn đang làm
                việc với các lớp tự quản lý bộ nhớ, cache, hoặc các cơ chế callback.</p>
        </div>
    </div>
</template>
<style scoped></style>