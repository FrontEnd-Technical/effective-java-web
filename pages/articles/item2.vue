<script setup="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 2: Consider a builder when faced with many constructor parameters'
})

import { code_block } from '~/data/item2'

const issues = [
    "Vấn đề 1: Telescoping Constructors (Constructor lồng nhau)",
    "Vấn đề 2: JavaBeans Pattern (Dùng setters)"
]

const feature_pattern = [
    {
        key: "Dễ đọc (Readability)",
        description: "Cú pháp fluent (.field(...).field(...)) làm cho mã nguồn trông như một đoạn văn xuôi, rất dễ hiểu."
    },
    {
        key: "Linh hoạt với các tham số tùy chọn",
        description: "Bạn chỉ cần thiết lập những trường bạn cần. Các trường còn lại sẽ có giá trị mặc định."
    },
    {
        key: "Đảm bảo tính bất biến (Immutability)",
        description: "Phương thức build() có thể trả về một đối tượng hoàn chỉnh và bất biến (immutable), giúp đảm bảo an toàn trong môi trường đa luồng."
    },
    {
        key: "Kiểm tra tính hợp lệ tập trung",
        description: "Bạn có thể đặt logic kiểm tra (validation) ngay trong phương thức build() để đảm bảo đối tượng luôn ở trạng thái hợp lệ khi được tạo ra."
    },
]

const applies = [
    {
        key: "Sử dụng Lombok @Builder",
        description: "Đây là cách triển khai Builder Pattern nhanh và hiệu quả nhất trong Java hiện đại. Nó giảm thiểu code boilerplate."
    },
    {
        key: "Áp dụng cho DTO phức tạp",
        description: "Luôn sử dụng Builder cho các đối tượng Request/Response DTO có từ 4 tham số trở lên, hoặc có các tham số tùy chọn."
    },
    {
        key: "Tạo đối tượng bất biến",
        description: "Kết hợp @Builder với các trường final để tạo ra các DTO bất biến, giúp chương trình của bạn an toàn và dễ dự đoán hơn."
    },
    {
        key: "Cải thiện việc viết Test",
        description: "Builder làm cho việc thiết lập dữ liệu test (test data setup) trở nên cực kỳ đơn giản và dễ đọc."
    },
]
</script>

<template>
    <div class="main">
        <h2 class="text-xl font-bold">Các vấn đề mà Builder pattern giải quyết:</h2>
        <BlockOpinion :opinion="issues[0]">
            <p>Bạn phải tạo nhiều constructor với các bộ tham số khác nhau, dẫn đến mã nguồn rất khó đọc và khó bảo trì.
            </p>
            <CodeBlock :code="code_block.issue1"></CodeBlock>
        </BlockOpinion>

        <BlockOpinion :opinion="issues[1]">
            <p>Bạn tạo đối tượng bằng constructor rỗng rồi gọi các phương thức setter. Cách này dài dòng và có thể để
                đối tượng ở trạng thái không nhất quán (inconsistent state) giữa các lần gọi setter. Nó cũng không cho
                phép tạo các đối tượng bất biến (immutable).</p>
            <CodeBlock :code="code_block.issue2"></CodeBlock>
        </BlockOpinion>

        <h2 class="text-xl font-bold">Builder Pattern là giải pháp để giải quyết các vấn đề trên:</h2>
        <ListItem :items="feature_pattern" list-style-class="list-disc"></ListItem>
        <hr><br>
        <Heading1 title="Các Kịch bản Thực tế trong REST API" />
        <BlockOpinion :opinion="`Kịch bản 1: Tạo đối tượng Request DTO phức tạp (POST/PUT)`">
            <p>Đây là kịch bản phổ biến nhất. Khi client gửi yêu cầu tạo hoặc cập nhật một tài nguyên có nhiều thuộc
                tính, Builder là lựa chọn lý tưởng. <strong>Sử dụng Lombok @Builder là best practice hiện đại.</strong>
            </p>
            <p>Hãy xem xét một DTO để đăng ký người dùng mới, với một số trường bắt buộc và một số trường tùy chọn.</p>
            <CodeBlock :code="code_block.script1"></CodeBlock>
        </BlockOpinion>
        <BlockOpinion :opinion="`Kịch bản 2: Xây dựng các đối tượng Filter/Query phức tạp`">
            <p>Khi bạn có một endpoint cho phép tìm kiếm/lọc với nhiều tiêu chí, bạn có thể gom tất cả các tiêu chí đó
                vào một đối tượng duy nhất, và Builder là công cụ hoàn hảo để tạo nó.
            </p>
            <CodeBlock :code="code_block.script2"></CodeBlock>
        </BlockOpinion>

        <Heading1 title="Tổng quan các trường hợp sử dụng" />
        <ListItem :items="applies" list-style-class="list-decimal"></ListItem>
    </div>
</template>
<style scoped></style>