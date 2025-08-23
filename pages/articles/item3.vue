<template>
    <div class="main">
        <p>
            Nguyên tắc "Enforce the singleton property with a private constructor or an enum type" của Joshua Bloch có
            nghĩa là để đảm bảo một lớp chỉ có duy nhất một thực thể (instance), bạn nên sử dụng một trong hai phương
            pháp: ẩn constructor đi và cung cấp một phương thức truy cập static, hoặc cách tốt hơn là định nghĩa lớp đó
            dưới dạng <span class="code-class">enum</span>.
        </p>
        <br />
        <p>
            Trong phát triển ứng dụng Java hiện đại, cách tốt nhất là để các framework như Spring quản lý các đối tượng
            singleton thông qua <strong>Dependency Injection (DI)</strong>. Tuy nhiên, khi bạn cần tự tay triển khai, sử
            dụng <span class="code-class">enum</span> là
            phương pháp ưu việt nhất.
        </p><br />
        <hr /><br />
        <Heading1 title="Tổng quan" />
        <p>Mục tiêu của mẫu thiết kế Singleton là kiểm soát việc khởi tạo đối tượng, giới hạn số lượng thực thể chỉ còn
            một và cung cấp một điểm truy cập toàn cục đến thực thể đó.</p>

        <BlockOpinion :opinion="`1. Phương pháp Private Constructor`">
            <p>Đây là cách triển khai truyền thống. Bạn ẩn constructor và cung cấp một trường hoặc phương thức tĩnh công
                khai để trả về thực thể duy nhất.</p>
            <CodeBlock :code="code_block.method1" />
            <p><strong>Nhược điểm: </strong>Cách này có thể bị phá vỡ bởi reflection (có thể gọi constructor <span
                    class="code-class">private</span>) và serialization (khi giải tuần tự hóa sẽ tạo ra thực thể mới),
                đồng thời việc đảm bảo an toàn luồng (thread-safety) cũng phức tạp hơn nếu khởi tạo trễ (lazy
                initialization).</p>
        </BlockOpinion>

        <BlockOpinion :opinion="`2. Phương pháp Enum Type (Best Practice 🥇)`">
            <p>Đây là cách được Joshua Bloch khuyến nghị vì sự đơn giản và mạnh mẽ của nó.</p>
            <CodeBlock :code="code_block.method2" />
            <p><strong>Ưu điểm vượt trội:</strong></p>
            <ListItem :items="enum_type_advantage" list-style-class="list-disc" />
        </BlockOpinion>
        <hr /><br />
        <Heading1 title="Ứng dụng thực tế" />
        <p>Singleton pattern nên được sử dụng cho các đối tượng <strong>vốn dĩ chỉ nên có một</strong> trong toàn bộ ứng
            dụng.</p>
        <BlockOpinion :opinion="`1. Quản lý Tài nguyên dùng chung và Tốn kém`">
            <p>Đây là trường hợp sử dụng phổ biến nhất. Các đối tượng này thường tốn tài nguyên để khởi tạo và nên được
                tái sử dụng trong toàn bộ ứng dụng.</p>
            <ul class="list-disc mt-3 pl-7 space-y-1">
                <li><span class="code-class">ObjectMapper</span> <strong>của Jackson:</strong> Dùng để chuyển đổi JSON.
                    Việc tạo mới <span class="code-class">ObjectMapper</span> cho mỗi lần request là rất lãng phí.</li>
                <li><span class="code-class">HttpClient</span><strong>:</strong> Các HTTP client hiện đại quản lý một
                    connection pool riêng. Việc tạo một client duy nhất và tái sử dụng nó giúp tăng hiệu suất đáng kể.
                </li>
                <li><strong>Database Connection Pool (</strong><span
                        class="code-class">DataSource</span><strong>):</strong> Luôn chỉ nên có một <strong>connection
                        pool</strong> cho mỗi Database</li>
            </ul><br>
            <strong>Ví dụ thực tế với </strong><span class="code-class">ObjectMapper</span>:
            <CodeBlock :code="code_block.method3" />
        </BlockOpinion>
        <BlockOpinion opinion="2. Cung cấp Cấu hình Toàn cục">
            <p>Một lớp dùng để đọc và lưu trữ cấu hình của ứng dụng (ví dụ: từ file <span
                    class="code-class">.properties</span> hoặc <span class="code-class">.yml</span>) là một ứng viên
                hoàn hảo cho Singleton. Cấu hình chỉ cần được đọc một lần khi ứng dụng khởi động.</p>
        </BlockOpinion>
        <BlockOpinion opinion="3. Các đối tượng Factory và Registry">
            <p>Các lớp có vai trò như một nhà máy trung tâm (<span class="code-class">Factory</span>) hoặc một sổ đăng
                ký (<span class="code-class">Registry</span>) để quản lý các đối tượng khác cũng thường được triển khai
                dưới dạng Singleton.</p>
        </BlockOpinion><br />
        <hr /><br />
        <Heading1 title="Kỹ thuật được ứng dụng trong Dependency Injection" />
        <p>Trong các ứng dụng Java hiện đại sử dụng các framework như <strong>Spring</strong>, best practice đã thay
            đổi. Thay vì tự tay
            quản lý Singleton, bạn nên <strong>để framework làm điều đó cho bạn</strong> thông qua Dependency Injection
            (DI).</p><br />
        <p>Theo mặc định, tất cả các bean được định nghĩa trong Spring (<span class="code-class">@Service</span>, <span
                class="code-class">@Component</span>, <span class="code-class">@Repository</span>, <span
                class="code-class">@Bean</span>) đều là singleton-scoped. Framework sẽ đảm bảo chỉ có một thực thể của
            mỗi bean được tạo ra và "tiêm" (inject) nó vào bất cứ nơi nào cần thiết.</p><br>
        <p><strong>Ví dụ <span class="code-class">ObjectMapper</span> với Spring:</strong></p>
        <CodeBlock :code="code_block.method4" />
        <ul class="list-disc pl-3">
            <li>Trong một ứng dụng có DI Framework (Spring, Micronaut): <strong>Sử dụng Dependency Injection.</strong>
                Đây là cách tiếp cận chuẩn mực, giúp mã nguồn linh hoạt, dễ kiểm thử (testing) và tuân thủ các nguyên
                tắc thiết kế tốt.</li>
            <li>Trong một ứng dụng không có DI Framework hoặc thư viện độc lập: <strong>Sử dụng Enum Singleton.</strong>
                Đây là cách thủ công đơn giản và an toàn nhất để đảm bảo đặc tính Singleton.</li>
        </ul>
    </div>
</template>

<script setup="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 3: Enforce the singleton property with a private constructor or an enum type'
})

import { code_block } from '~/data/item3'

const enum_type_advantage = [
    {
        key: "An toàn luồng (Thread-Safe)",
        description: "JVM đảm bảo rằng constructor của enum chỉ được gọi một lần duy nhất."
    },
    {
        key: "An toàn Serialization",
        description: "Cơ chế serialization của Java được thiết kế để xử lý enum một cách đặc biệt, đảm bảo không có thực thể mới nào được tạo ra."
    },
    {
        key: "Chống Reflection",
        description: "JVM không cho phép tạo thêm thực thể của enum bằng reflection."
    },
    {
        key: "Ngắn gọn",
        description: "Mã nguồn cực kỳ đơn giản và dễ hiểu."
    },
]

</script>
<style scoped></style>