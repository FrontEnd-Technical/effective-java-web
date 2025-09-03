<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 30: Favor generic methods'
})

import { code_block } from '~/data/item30'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Favor generic methods" (Ưu tiên các phương thức generic) có nghĩa là khi bạn viết các phương
            thức, đặc biệt là các phương thức tĩnh (static), mà hoạt động trên các collection hoặc các container khác,
            bạn nên <strong>làm cho chúng generic để đảm bảo an toàn kiểu và dễ sử dụng</strong>.
        </p><br />
        <p>
            Giống như các kiểu generic, các phương thức generic giúp bạn chuyển các lỗi từ lúc chạy về lúc biên dịch,
            tạo ra các API mạnh mẽ và linh hoạt hơn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Một phương thức được gọi là generic nếu nó tự khai báo một hoặc nhiều tham số kiểu (type parameter) cho
            riêng nó. Các tham số kiểu này được liệt kê trong dấu ngoặc nhọn <span class="code">&lt;&gt;</span> và xuất
            hiện trước kiểu trả về của phương thức.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Các phương thức hoạt động trên Kiểu thô">
                <p>Hãy xem xét một phương thức tiện ích dùng để hợp nhất hai <span class="code">Set</span>. Nếu viết
                    bằng kiểu thô, nó sẽ rất không an toàn.</p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Mã này sẽ biên dịch nhưng với một cảnh báo "unchecked". Nó không an toàn vì bạn có thể hợp nhất một
                    <span class="code">Set&lt;String&gt;</span> với một <span class="code">Set&lt;Integer&gt;</span> và
                    chỉ gặp lỗi <span class="code">ClassCastException</span> ở một nơi nào đó rất xa.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="Giải pháp: Sử dụng Phương thức Generic ✅">
                <p>Bằng cách làm cho phương thức trở nên generic, bạn để trình biên dịch đảm bảo rằng các kiểu của tất
                    cả các tham số và giá trị trả về là nhất quán.</p><br />
                <p><strong>Phương thức <span class="code">union</span> đã được "generic hóa":</strong></p>

                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p><strong>Cách hoạt động:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><span class="code">&lt;E&gt;</span>: Khai báo một tham số kiểu <span class="code">E</span>. Tham
                        số này có thể là bất kỳ kiểu nào.</li>
                    <li><span class="code">Set&lt;E&gt; s1, Set&lt;E&gt; s2</span>: Yêu cầu cả hai <span
                            class="code">Set</span> đầu vào phải có cùng một kiểu <span class="code">E</span>.</li>
                    <li><span class="code">Set&lt;E&gt; result</span>: Đảm bảo <span class="code">Set</span> trả về cũng
                        có cùng kiểu <span class="code">E</span>.</li>
                </ul><br />
                <p>
                    Nếu bạn cố gắng truyền một <span class="code">Set&lt;String&gt;</span> và một <span
                        class="code">Set&lt;Integer&gt;</span>, bạn sẽ nhận được <strong>lỗi biên dịch ngay lập
                        tức</strong>.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Phương thức generic đặc biệt hữu ích cho các <strong>phương thức tiện ích tĩnh (static utility
                methods)</strong>.</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Các Thuật toán trên Collection">
                <p>
                    Bất kỳ phương thức nào thực hiện một thuật toán chung trên một collection, như hợp nhất, giao, tìm
                    kiếm, sắp xếp, v.v., đều nên là generic. Toàn bộ lớp <span class="code">java.util.Collections</span>
                    là một ví dụ tuyệt vời về điều này, với các phương thức như <span class="code">sort</span>, <span
                        class="code">binarySearch</span>, <span class="code">max</span>.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="2. Các Lớp 'Nhà máy' (Factories)">
                <p>
                    Phương thức generic rất phù hợp để tạo ra các đối tượng. Một mẫu thiết kế phổ biến là
                    <strong>generic singleton factory</strong>, nơi một phương thức factory luôn trả về cùng một thực
                    thể bất biến cho một kiểu cụ thể.
                </p>
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="3. Phương thức đệ quy với Tham số kiểu có thể so sánh">
                <p>
                    Phương thức generic cũng có thể được sử dụng với các tham số kiểu bị ràng buộc (bounded type
                    parameters), ví dụ như yêu cầu một kiểu phải implement <span class="code">Comparable</span>.
                </p>
                <CodeBlock :code="code_block.method4"></CodeBlock>
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Hãy tập thói quen tìm kiếm cơ hội để làm cho các phương thức trở nên generic.
            Bất cứ khi nào một phương thức nhận vào hoặc trả về các kiểu container như <span
                class="code">Collection&lt;E&gt;</span> hoặc <span class="code">Map&lt;K, V&gt;</span>, hãy khai báo các
            tham số kiểu cần thiết để làm cho chữ ký phương thức trở nên an toàn và chính xác nhất có thể.
        </p><br />
    </div>
</template>
<style scoped></style>