<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 29: Favor generic types'
})

import { code_block } from '~/data/item29'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Favor generic types" (Ưu tiên các kiểu generic) có nghĩa là khi bạn thiết kế các lớp hoặc phương
            thức hoạt động trên các đối tượng chứa (containers) như collection, bạn nên <strong>sử dụng generics để tham
                số hóa kiểu dữ liệu</strong> mà chúng chứa.
        </p><br />
        <p>
            Việc này giúp bạn tạo ra các API <strong>an toàn về kiểu (type-safe)</strong>, dễ sử dụng hơn và mạnh mẽ
            hơn, bằng cách chuyển các lỗi từ lúc chạy (runtime) về lúc biên dịch (compile-time).
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Các Lớp hoạt động trên Object">
                <p>Trước khi có generics (trước Java 5), để viết một lớp có thể hoạt động với nhiều kiểu dữ liệu, người
                    ta phải dùng <span class="code">Object</span>.</p><br />
                <p><strong>Ví dụ: Một lớp Stack đơn giản dùng <span class="code">Object</span>:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Nhược điểm của cách này:</strong></p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Cần ép kiểu (cast) ở phía client:</strong> Người dùng phải tự ép kiểu mỗi khi lấy một
                        phần tử ra khỏi stack.</li>
                    <li><strong>Rủi ro lỗi <span class="code">ClassCastException</span> lúc chạy:</strong> Nếu ai đó vô
                        tình <span class="code">push</span> một kiểu dữ liệu sai vào stack, lỗi sẽ không được phát hiện
                        cho đến khi client cố gắng <span class="code">pop</span> và ép kiểu.</li>
                </ol>
            </BlockOpinion>
            <BlockOpinion opinion="Giải pháp: Sử dụng Generics (Kiểu E) ✅">
                <p>Bằng cách sử dụng generics, bạn cho phép người dùng chỉ định kiểu dữ liệu mà stack sẽ chứa, và trình
                    biên dịch sẽ đảm bảo sự an toàn đó.</p><br />
                <p><strong>Lớp Stack đã được "generic hóa":</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p><strong>Lợi ích vượt trội:</strong></p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Không cần ép kiểu:</strong> Client có thể làm việc trực tiếp với kiểu dữ liệu của họ.
                        <br /><span class="code">Stack&lt;String&gt; stack = new Stack&lt;&gt;(); stack.push("hello");
                            String s = stack.pop();</span>
                    </li>
                    <li><strong>An toàn tuyệt đối lúc biên dịch:</strong> Trình biên dịch sẽ báo lỗi ngay lập tức nếu ai
                        đó cố gắng <span class="code">push</span> một kiểu dữ liệu không tương thích.</li>
                </ol><br />

            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Quy tắc vàng là: <strong>Bất cứ khi nào bạn viết một lớp hoạt động như một container, hãy nghĩ đến việc làm
                cho nó generic.</strong></p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Triển khai các Collection và Container">
                <p>Đây là ứng dụng phổ biến nhất. Bất kỳ cấu trúc dữ liệu nào bạn tự tạo (Stack, Queue, List, Tree,
                    v.v.) đều nên là generic để có thể tái sử dụng một cách an toàn cho nhiều kiểu dữ liệu khác nhau.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="2. Các Lớp Nhà máy (Factories)">
                <p>Mẫu thiết kế Factory thường có thể được hưởng lợi từ generics. Ví dụ, một factory trả về các trình
                    xác thực (validator) cho các kiểu khác nhau.</p><br />
            </BlockOpinion>
            <BlockOpinion opinion="3. Các Lớp Đại diện cho Cặp hoặc Bộ (Tuples)">
                <p>Nếu bạn cần một lớp để chứa một cặp giá trị, làm cho nó generic sẽ hữu ích hơn nhiều.</p><br />
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Việc học cách sử dụng và thiết kế các kiểu generic là một trong những kỹ năng
            quan trọng nhất của một lập trình viên Java. <strong>Hãy luôn ưu tiên generics</strong> thay vì các lớp hoạt
            động trên <span class="code">Object</span>. Điều này sẽ giúp bạn tạo ra các API không chỉ an toàn hơn mà còn
            dễ sử dụng và biểu cảm hơn rất nhiều.
        </p><br />
    </div>
</template>
<style scoped></style>