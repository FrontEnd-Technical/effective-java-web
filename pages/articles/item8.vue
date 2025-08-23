<template>
    <div class="main">
        <p>Nguyên tắc "Avoid finalizers and cleaners" (Tránh dùng finalizers và cleaners) có nghĩa là bạn nên
            <strong>hầu như
                không bao giờ sử dụng</strong> các cơ chế <span class="code">finalize()</span> (cũ) và <span
                class="code">java.lang.ref.Cleaner</span> (mới) để quản lý tài
            nguyên. Chúng
            cực kỳ <strong>không đáng tin cậy, khó đoán và có thể gây ảnh hưởng xấu đến hiệu năng.</strong>
        </p><br>
        <p>Cách tốt nhất và an toàn nhất để dọn dẹp tài nguyên là sử dụng <span class="code">try-with-resources</span>
            kết hợp với interface
            <span class="code">AutoCloseable</span>.
        </p><br>
        <hr><br>

        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>Finalizers (phương thức <span class="code">finalize()</span>) và Cleaners (từ Java 9) là các cơ chế của Java
            cho phép một đối tượng
            thực thi một hành động nào đó trước khi bị bộ dọn rác (Garbage Collector - GC) thu hồi. Mục đích ban đầu của
            chúng là để giải phóng các tài nguyên quan trọng (như file handles hoặc native memory).</p>
        <ListItem :items="disadvantages" list-style-class="list-disc"></ListItem>
        <p>Việc dựa vào finalizer/cleaner cũng giống như bạn thuê một dịch vụ dọn dẹp nhưng không biết họ có đến không,
            khi nào đến, và nếu có đến, họ có thể làm vỡ đồ và giấu đi mà không cho bạn biết. Tốt hơn hết là bạn nên tự
            dọn dẹp ngay sau khi dùng xong.</p><br>
        <hr><br>
        <Heading1 title="Phương pháp tiếp cận tốt hơn" />
        <p>Cách tiếp cận đúng đắn để quản lý tài nguyên là đảm bảo việc giải phóng chúng diễn ra một cách <strong>có thể
                đoán trước và kịp thời</strong>.</p>
        <BlockOpinion opinion='<span class="code">AutoCloseable</span> và <span class="code">try-with-resources</span>'>
            <p>Đây là giải pháp tốt nhất trong Java hiện đại. Bất kỳ lớp nào quản lý một tài nguyên cần được dọn dẹp
                (như
                file, database connection, socket) nên implement interface <span class="code">AutoCloseable</span>.</p>
            <br>
            <p><strong>Ví dụ: Một lớp đọc file an toàn</strong></p>
            <CodeBlock :code="code_block.method1"></CodeBlock>
            <p><strong>Sử dụng:</strong></p>
            <CodeBlock :code="code_block.method2"></CodeBlock>
            <p>Với <span class="code">try-with-resources</span>, bạn có thể chắc chắn 100% rằng phương thức <span
                    class="code">close()</span> sẽ được gọi, đảm bảo tài nguyên được giải phóng ngay lập tức.</p>
        </BlockOpinion><br>
        <hr><br>
        <Heading1 title="Trường hợp Ngoại lệ: Khi nào Cleaners có thể Hữu ích?"></Heading1>
        <p>Mặc dù bạn nên tránh xa chúng, có hai trường hợp mà Cleaner (không phải Finalizer) có thể được xem xét:</p>
        <BlockOpinion opinion='1. Dùng làm "Lưới an toàn" (Safety Net)'>
            <p>Cleaner có thể đóng vai trò như một cơ chế dự phòng cuối cùng. Nếu người dùng quên gọi phương thức
                <span class="code">close()</span> trên đối tượng của bạn, cleaner có thể thực hiện việc dọn dẹp hoặc ít
                nhất là ghi log một cảnh
                báo. Nó không bao giờ nên là cơ chế dọn dẹp chính.
            </p>
        </BlockOpinion>
        <BlockOpinion opinion='2. Dọn dẹp Tài nguyên Native'>
            <p>Khi một đối tượng Java quản lý các tài nguyên được cấp phát bên ngoài JVM (ví dụ: bộ nhớ được cấp phát
                bởi mã C/C++ thông qua JNI), cleaner là một công cụ hữu ích để đảm bảo các tài nguyên native này được
                giải phóng, ngay cả khi người dùng quên gọi phương thức dọn dẹp tường minh.</p><br>
            <p><strong>Ví dụ về cấu trúc một lớp dùng Cleaner làm safety net:</strong></p>
            <CodeBlock :code="code_block.method3"></CodeBlock>
        </BlockOpinion>

        <p><strong>Kết luận: </strong>Hãy luôn ưu tiên <span class="code">try-with-resources</span> và <span
                class="code">AutoCloseable</span>.
            Chỉ xem xét sử dụng <span class="code">Cleaner</span>
            như một biện pháp bảo vệ cuối cùng cho các tài nguyên cực kỳ quan trọng, đặc biệt là tài nguyên native.</p>
    </div>
</template>
<script setup="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 8: Avoid finalizers and cleaners'
})

import { code_block } from '~/data/item8'

const disadvantages = [
    {
        key: "Không đảm bảo sẽ được thực thi",
        description: "Không có gì đảm bảo rằng GC sẽ chạy và thu hồi đối tượng của bạn trước khi JVM tắt. Điều này có nghĩa là tài nguyên quan trọng có thể không bao giờ được giải phóng."
    },
    {
        key: "Không thể đoán trước thời gian chạy",
        description: "Bạn không thể biết khi nào finalizer hoặc cleaner sẽ được gọi. Nó có thể được gọi ngay lập tức, hoặc vài giờ sau, hoặc không bao giờ. Việc giữ tài nguyên trong một khoảng thời gian không xác định là rất nguy hiểm."
    },
    {
        key: "Ảnh hưởng xấu đến hiệu năng",
        description: "Việc sử dụng finalizer và cleaner làm cho quá trình dọn rác trở nên chậm hơn đáng kể."
    },
    {
        key: "Không thể đoán trước thời gian chạy",
        description: "Bất kỳ ngoại lệ nào được ném ra từ bên trong một finalizer sẽ bị bỏ qua, và quá trình dọn dẹp sẽ dừng lại mà không có bất kỳ thông báo nào."
    }
]

</script>
<style scoped></style>