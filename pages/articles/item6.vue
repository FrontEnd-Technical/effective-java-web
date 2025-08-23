<script setup="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 6: Avoid creating unnecessary objects'
})

import { code_block } from '~/data/item6'

</script>

<template>
    <div class="main">
        <p>Nguyên tắc "Avoid creating unnecessary objects" (Tránh tạo các đối tượng không cần thiết) có nghĩa là bạn nên
            <strong>tái sử dụng một đối tượng hiện có thay vì tạo ra một đối tượng mới</strong> mỗi khi cần, đặc biệt
            đối với các đối
            tượng bất biến (immutable) hoặc trong các đoạn mã được thực thi thường xuyên.
        </p><br>
        <p>Việc tuân thủ nguyên tắc này giúp cải thiện đáng kể hiệu năng của ứng dụng bằng cách giảm tải cho bộ nhớ và
            bộ dọn rác (Garbage Collector - GC).</p><br>
        <hr><br>

        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>Mỗi khi bạn tạo một đối tượng mới bằng từ khóa <span class="code-class">new</span>, bạn sẽ chiếm một vùng nhớ
            trên heap. Mặc dù Garbage
            Collector của Java rất hiệu quả trong việc dọn dẹp các đối tượng không còn được sử dụng, quá trình này không
            phải là miễn phí. Nó tiêu tốn chu kỳ CPU và có thể gây ra các khoảng dừng nhỏ (pauses) trong ứng dụng của
            bạn.</p><br>
        <p>Việc tạo ra hàng triệu đối tượng nhỏ, tồn tại trong thời gian ngắn có thể tạo ra áp lực lớn lên GC, làm giảm
            hiệu suất chung. Nguyên tắc này khuyên chúng ta nên có ý thức hơn về việc tạo đối tượng, đặc biệt là trong
            các vòng lặp hoặc các phương thức được gọi liên tục.</p><br>
        <p>Hãy tưởng tượng mỗi lần bạn cần dùng đũa để ăn, thay vì rửa đôi đũa đang có, bạn lại đi mua một đôi đũa dùng
            một lần mới. Điều này cực kỳ lãng phí. Việc tái sử dụng đối tượng cũng tương tự như vậy.</p><br>
        <hr><br>
        <Heading1 title="Ứng dụng" />
        <div class="section pl-5">
            <BlockOpinion opinion="1. Tái sử dụng các đối tượng Bất biến (Immutable Objects)">
                <p>Nếu một đối tượng là bất biến (trạng thái của nó không thể thay đổi sau khi được tạo), nó hoàn toàn
                    an toàn để được tái sử dụng nhiều lần.
                </p><br>
                <p><strong>Ví dụ kinh điển là</strong> <span class="code-class">java.util.regex.Pattern</span>: Việc
                    biên dịch một biểu thức chính quy (regex) thành một
                    đối tượng <span class="code-class">Pattern</span> là một tác vụ tốn kém.</p><br>
                <p><strong>❌ Cách không nên làm:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>✅ <strong>Phương pháp nên dùng:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p>Bằng cách lưu trữ đối tượng <span class="code">Pattern</span> trong một trường <span
                        class="code">static final</span>, chúng ta đảm bảo nó chỉ được khởi
                    tạo một lần duy nhất, giúp cải thiện hiệu suất đáng kể nếu phương thức này được gọi thường xuyên.
                </p>
            </BlockOpinion>
            <BlockOpinion opinion="2. Tránh Autoboxing không cần thiết">
                <p>Autoboxing là cơ chế tự động chuyển đổi giữa kiểu dữ liệu nguyên thủy (primitive types như <span
                        class="code">int</span>, <span class="code">long</span>)
                    và các lớp bao bọc (wrapper classes như <span class="code">Integer</span>, <span
                        class="code">Long</span>). Mặc dù tiện lợi, nó có thể vô tình tạo ra
                    rất nhiều đối tượng không cần thiết, đặc biệt là trong các vòng lặp.</p><br>
                <p><strong>❌ Ví dụ về việc tạo đối tượng không cần thiết:</strong></p>
                <CodeBlock :code="code_block.method3"></CodeBlock>
                <p>Trong đoạn mã trên, biến <span class="code">sum</span> là một đối tượng <span
                        class="code">Long</span>. Mỗi lần thực hiện phép cộng <span class="code">sum += i</span>, một
                    đối
                    tượng <span class="code">Long</span> mới được tạo ra để lưu kết quả. Điều này dẫn đến việc tạo ra
                    khoảng 2³¹ đối tượng không
                    cần thiết!</p><br>
                <p><strong>✅ Phương pháp thay thế:</strong></p>
                <CodeBlock :code="code_block.method4"></CodeBlock>
                <p>Bằng cách sử dụng kiểu nguyên thủy <span class="code">long</span>, không có đối tượng nào được tạo ra
                    trong vòng lặp, giúp mã
                    chạy nhanh hơn rất nhiều lần.</p>
            </BlockOpinion>
            <BlockOpinion
                opinion='3. Sử dụng <span class="code">StringBuilder</span> cho việc nối chuỗi trong vòng lặp'>
                <p>Toán tử <span class="code">+</span> để nối chuỗi rất tiện lợi, nhưng khi sử dụng trong vòng lặp, nó
                    cực kỳ không hiệu quả. Mỗi
                    lần bạn viết <span class="code">result = result + s;</span>, một đối tượng <span
                        class="code">String</span> mới được tạo ra.</p><br>
                <p><strong>❌ Cách không nên làm:</strong></p>
                <CodeBlock :code="code_block.method5"></CodeBlock>
                <p><strong>✅ Phương pháp thay thế:</strong></p>
                <CodeBlock :code="code_block.method6"></CodeBlock>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Lời khuyên Thực tế" />
        <ul class="list-disc pl-8 space-y-1">
            <li><strong>Đừng tối ưu hóa quá sớm:</strong> Hãy ưu tiên viết mã sạch sẽ và dễ đọc trước. Chỉ tối ưu hóa
                khi bạn đã xác định được các điểm nghẽn cổ chai thực sự bằng các công cụ đo lường hiệu năng (profiling).
            </li>
            <li><strong>Tập trung vào các vòng lặp và các phương thức được gọi thường xuyên: </strong>Đây là những nơi
                mà việc tránh tạo đối tượng không cần thiết sẽ mang lại lợi ích lớn nhất.</li>
            <li><strong>Ưu tiên các đối tượng bất biến: </strong>Thiết kế các đối tượng của bạn để chúng bất biến sẽ
                giúp việc tái sử dụng chúng trở nên dễ dàng và an toàn hơn.</li>
        </ul>
    </div>
</template>
<style scoped></style>