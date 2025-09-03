<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 70: Use checked exceptions for recoverable conditions and runtime exceptions for programming errors'
})

import { code_block } from '~/data/item70'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use checked exceptions for recoverable conditions and runtime exceptions for programming errors"
            đưa ra một hướng dẫn rõ ràng về việc khi nào nên sử dụng loại exception nào.
        </p>
        <ul class="list-disc pl-5 mt-3 space-y-1.5">
            <li><strong>Checked Exceptions:</strong> Dùng khi một phương thức có thể thất bại do các yếu tố bên ngoài
                (ví dụ: file không tồn tại, mạng bị ngắt) và <strong>người gọi có thể làm gì đó để phục hồi</strong>.
            </li>
            <li><strong>Runtime Exceptions (Unchecked):</strong> Dùng để báo hiệu các <strong>lỗi lập trình
                    (bugs)</strong>, chẳng hạn như vi phạm một điều kiện tiên quyết (precondition).</li>
        </ul><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Java có ba loại "throwable": checked exceptions, runtime exceptions, và errors. Quy tắc này giúp bạn quyết
            định nên sử dụng hai loại exception đầu tiên như thế nào.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Checked Exceptions: Cho các Tình huống có thể Phục hồi ✅">
                <p>
                    Một checked exception buộc người gọi phải xử lý nó, hoặc bằng cách bắt nó trong một khối <span
                        class="code">try-catch</span> hoặc bằng cách khai báo <span class="code">throws</span>. Điều này
                    rất hữu ích khi tình huống lỗi là một kết quả có thể dự đoán được và client có thể thực hiện một
                    hành động hợp lý để khắc phục.
                </p><br />
                <p><strong>Ví dụ kinh điển: <span class="code">IOException</span></strong></p><br />
                <p>
                    Khi bạn cố gắng đọc một file, file đó có thể không tồn tại. Đây không phải là lỗi của lập trình
                    viên, mà là một tình huống có thể xảy ra.
                </p>

                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Runtime Exceptions: Cho các Lỗi Lập trình 🐞">
                <p>
                    Runtime exceptions (và các lớp con của nó như <span class="code">IllegalArgumentException</span>,
                    <span class="code">NullPointerException</span>) nên được sử dụng để chỉ ra các lỗi lập trình. Đây là
                    những tình huống mà người gọi không thể làm gì để phục hồi vì nó là một lỗi trong logic của chính
                    họ.
                </p><br />
                <p>
                    Cách tốt nhất là để chương trình dừng lại và lập trình viên sẽ sửa lỗi đó.
                </p><br />
                <p><strong>Ví dụ: Vi phạm điều kiện tiên quyết</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="3. Errors">
                <p>
                    <span class="code">Error</span> (và các lớp con của nó như <span
                        class="code">OutOfMemoryError</span>, <span class="code">StackOverflowError</span>) được dành
                    riêng cho JVM để báo hiệu các vấn đề nghiêm trọng mà chương trình không thể phục hồi. <strong>Bạn
                        không bao giờ nên ném ra một <span class="code">Error</span></strong> và cũng hiếm khi cần bắt
                    nó.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p><strong>Kết luận:</strong> Quy tắc vàng khi thiết kế API là:</p><br />
        <ul class="list-disc pl-5 mt-3 space-y-1.5">
            <li>Hãy tự hỏi: "Người gọi có thể làm gì một cách hợp lý khi tình huống này xảy ra không?".</li>
            <li>Nếu câu trả lời là <strong>có</strong>, hãy sử dụng một <strong>checked exception</strong>.</li>
            <li>Nếu câu trả lời là <strong>không</strong> (vì đó là một lỗi lập trình), hãy sử dụng một <strong>runtime
                    exception</strong>.</li>
        </ul>
    </div>
</template>
<style scoped></style>