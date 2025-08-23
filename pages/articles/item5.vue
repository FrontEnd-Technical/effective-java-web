<script setup="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 5: Prefer dependency injection to hardwiring resources'
})

import { code_block } from '~/data/item5'

</script>

<template>
    <div class="main">
        <p>Nguyên tắc "Prefer dependency injection to hardwiring resources" (Ưu tiên Dependency Injection thay vì gắn
            cứng tài nguyên) có nghĩa là một lớp <strong>không nên tự tạo ra hoặc tự tìm kiếm các đối tượng phụ thuộc
                (dependencies)</strong> của nó. Thay vào đó, các đối tượng phụ thuộc này nên được <strong>cung cấp từ
                bên ngoài</strong>, thường là
            thông qua constructor.</p><br>
        <p>Đây là một trong những nguyên tắc nền tảng quan trọng nhất trong thiết kế phần mềm hiện đại, đặc biệt là với
            các framework như Spring. Nó giúp tạo ra mã nguồn <strong>linh hoạt, dễ bảo trì và cực kỳ dễ kiểm thử
                (test)</strong>.</p>
        <br>
        <hr><br>

        <Heading1 title="Tổng quan về Nguyên tắc"></Heading1>
        <div class="section1 pl-3">
            <BlockOpinion opinion='1. Vấn đề của "Hardwiring Resources" (Gắn cứng tài nguyên)'>
                <p>"Gắn cứng" là khi một lớp tự chịu trách nhiệm khởi tạo các tài nguyên mà nó cần để hoạt động.</p><br>
                <p><strong>Ví dụ về việc gắn cứng:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Vấn đề của cách làm này:</strong></p><br>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Thiếu linh hoạt:</strong> Lớp <span class="code-class">SpellChecker</span> này bị gắn
                        chết với <span class="code-class">EnglishDictionary</span>. Nếu bạn muốn sử dụng một từ điển
                        tiếng Việt (<span class="code-class">VietnameseDictionary</span>)
                        hoặc một từ điển đặc biệt cho việc test, bạn phải sửa lại mã nguồn của lớp <span
                            class="code-class">SpellChecker</span>.</li>
                    <li><strong>Rất khó Test:</strong> Khi viết unit test cho <span
                            class="code-class">SpellChecker</span>, bạn không có cách nào để
                        thay thế <span class="code-class">EnglishDictionary</span> bằng một đối tượng giả (mock). Bạn
                        luôn phải test với từ điển thật,
                        điều này làm cho việc test trở nên phức tạp và chậm chạp.</li>
                    <li><strong>Vi phạm nguyên tắc Single Responsibility:</strong> Lớp <span
                            class="code-class">SpellChecker</span> đang làm hai việc: kiểm tra chính tả và quản lý việc
                        tạo ra <span class="code-class">Dictionary</span>.</li>
                </ul>
            </BlockOpinion>

            <BlockOpinion opinion="2. Giải pháp: Dependency Injection (DI)">
                <p>Dependency Injection (DI) đảo ngược quy trình này. Thay vì lớp tự tạo dependency, dependency sẽ được
                    "tiêm" vào lớp từ một nguồn bên ngoài.</p><br>
                <p><strong>Ví dụ đã được cải tiến với DI:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p><strong>Lợi ích của cách làm này:</strong></p><br>
                <ul class="list-disc pl-5">
                    <li><strong>Cực kỳ linh hoạt:</strong> Bây giờ bạn có thể dùng <span
                            class="code-class">SpellChecker</span> với bất kỳ loại <span
                            class="code-class">Dictionary</span> nào.
                        <CodeBlock :code="code_block.method3"></CodeBlock>
                    </li>
                    <li><strong>Rất dễ Test:</strong> Khi viết unit test, bạn có thể dễ dàng "tiêm" vào một <span
                            class="code-class">Dictionary</span> giả để kiểm soát hoàn toàn môi trường test.
                        <CodeBlock :code="code_block.method4"></CodeBlock>
                    </li>
                </ul>
            </BlockOpinion>
        </div>
        <br>
        <hr><br>
        <Heading1 title="Các Ứng dụng Tốt nhất"></Heading1>
        <p>Trong phát triển ứng dụng Java hiện đại, DI không chỉ là một lựa chọn mà gần như là <strong>tiêu chuẩn
                bắt buộc</strong>,
            được hỗ trợ mạnh mẽ bởi các framework như <strong>Spring</strong>, <strong>Micronaut</strong>, và
            <strong>Quarkus</strong>.
        </p>
        <div class="section1 pl-3">
            <BlockOpinion opinion="1. Phát triển Ứng dụng với Spring Framework">
                <p>Đây là ứng dụng phổ biến và mạnh mẽ nhất của DI. Spring hoạt động dựa trên một <strong>IoC
                        container</strong>
                    (Inversion of Control), có vai trò như một "nhà máy" trung tâm, chịu trách nhiệm tạo ra và "tiêm"
                    các dependency.</p><br>
                <li class="pl-5">
                    <strong>Các lớp Service, Repository, Controller:</strong> Thay vì một <span
                        class="code-class">OrderService</span> tự tạo ra <span class="code-class">new
                        OrderRepository()</span>, Spring sẽ tự động tiêm <span class="code-class">OrderRepository</span>
                    vào <span class="code-class">OrderService</span>.
                    <CodeBlock :code="code_block.method5"></CodeBlock>
                </li>
            </BlockOpinion>
            <BlockOpinion opinion="2. Quản lý các Tài nguyên Phức tạp">
                <p>DI là cách tốt nhất để quản lý các tài nguyên như kết nối cơ sở dữ liệu (<span
                        class="code-class">DataSource</span>), các HTTP
                    client, hoặc các message queue producer/consumer. Bạn định nghĩa chúng một lần duy nhất (thường là
                    singleton) và tiêm chúng vào bất cứ nơi nào cần sử dụng.</p>
            </BlockOpinion>
            <BlockOpinion opinion="3. Tách biệt các Layer (Tầng) trong ứng dụng">
                <p>DI giúp thực thi triệt để việc phân tách các tầng trong kiến trúc phần mềm (ví dụ: Controller ->
                    Service -> Repository). Tầng Controller không cần biết tầng Service được triển khai như thế nào, nó
                    chỉ cần một "thực thể" của Service để làm việc. Điều này giúp mỗi tầng có thể được phát triển và
                    kiểm thử độc lập.</p>
            </BlockOpinion>
        </div><br>
        <p><strong>Kết luận:</strong> Nguyên tắc "Prefer dependency injection to hardwiring resources" là nền tảng cho
            việc xây dựng các
            ứng dụng Java hiện đại, có khả năng mở rộng và bảo trì. Nó thúc đẩy <strong>thiết kế lỏng lẻo (loose
                coupling)</strong> và
            <strong>khả năng kiểm thử (testability)</strong>, hai trong số những yếu tố quan trọng nhất của một hệ thống
            phần mềm chất
            lượng cao.
        </p>
    </div>
</template>
<style scoped></style>