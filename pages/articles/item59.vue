<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 59: Know and use the libraries'
})

import { code_block } from '~/data/item59'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Know and use the libraries" (Biết và sử dụng các thư viện) có nghĩa là bạn nên <strong>tận dụng
                tối đa thư viện chuẩn của Java</strong> thay vì tự viết lại các chức năng đã có sẵn.
        </p><br />
        <p>
            Đừng "phát minh lại bánh xe". Bằng cách sử dụng các lớp và phương thức đã được viết sẵn, bạn có thể tạo ra
            các ứng dụng <strong>tốt hơn, nhanh hơn và với ít nỗ lực hơn</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Thư viện chuẩn của Java (<span class="code">java.*</span>, <span class="code">javax.*</span>) cực kỳ lớn và
            chứa vô số các chức năng hữu ích đã được các chuyên gia viết, kiểm thử và tối ưu hóa trong nhiều năm. Việc
            phớt lờ chúng và tự viết lại mọi thứ từ đầu là một sự lãng phí tài nguyên rất lớn.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích của việc sử dụng Thư viện chuẩn 📚">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Tiết kiệm thời gian:</strong> Bạn không phải tốn thời gian thiết kế, viết, kiểm thử và
                        bảo trì các đoạn mã cho các vấn đề đã được giải quyết.</li>
                    <li><strong>Chất lượng cao hơn:</strong> Mã nguồn trong thư viện chuẩn đã được kiểm tra kỹ lưỡng bởi
                        hàng ngàn lập trình viên và được tối ưu hóa hiệu năng liên tục.</li>
                    <li><strong>Tăng khả năng đọc và bảo trì:</strong> Khi bạn sử dụng các lớp chuẩn như <span
                            class="code">ArrayList</span> hay <span class="code">HashMap</span>, các lập trình viên khác
                        có thể ngay lập tức hiểu được mã nguồn của bạn.</li>
                    <li><strong>Hưởng lợi từ tri thức cộng đồng:</strong> Mã trong thư viện chuẩn là kết tinh của nhiều
                        năm kinh nghiệm và các thuật toán tốt nhất.</li>
                </ol>
            </BlockOpinion>
            <BlockOpinion opinion="Ví dụ kinh điển: Tạo một số ngẫu nhiên trong một phạm vi">
                <p><strong>❌ Cách làm thủ công (dễ lỗi):</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>✅ Cách làm tốt nhất (dùng thư viện):</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Các Thư viện Quan trọng cần biết" />
        <p>Thư viện chuẩn rất lớn, nhưng bạn nên bắt đầu bằng việc làm quen với một vài package cốt lõi:</p><br />

        <ul class="list-disc pl-5 mt-3 space-y-1.5">
            <li><span class="code">java.lang</span>: Các lớp cơ bản như <span class="code">Object</span>, <span
                    class="code">String</span>, <span class="code">Math</span>, các lớp wrapper (<span
                    class="code">Integer</span>), và <span class="code">System</span>.</li>
            <li><span class="code">java.util</span>: Nền tảng của mọi thứ. Chứa <strong>Java Collections
                    Framework</strong> (<span class="code">List</span>, <span class="code">Set</span>, <span
                    class="code">Map</span>), các lớp tiện ích như <span class="code">Arrays</span>, <span
                    class="code">Collections</span>.</li>
            <li><span class="code">java.io</span>: Các lớp để xử lý input/output, làm việc với file và stream.</li>
            <li><span class="code">java.time</span> (Java 8+): API ngày tháng và thời gian hiện đại, một sự thay thế
                tuyệt vời cho <span class="code">java.util.Date</span>.</li>
            <li><span class="code">java.util.concurrent</span>: Các công cụ mạnh mẽ để lập trình đa luồng.</li>
        </ul><br />
        <p>
            <strong>Kết luận:</strong> Trước khi bắt tay vào viết một đoạn mã cho một vấn đề có vẻ phổ biến, hãy tự
            hỏi: "Liệu thư viện chuẩn của Java đã có giải pháp cho việc này chưa?". <strong>Hãy dành thời gian để khám
                phá thư viện chuẩn</strong>. Sự đầu tư này sẽ được đền đáp xứng đáng, giúp bạn viết code nhanh hơn, tốt
            hơn và tập trung vào các vấn đề nghiệp vụ thực sự quan trọng của ứng dụng.
        </p><br />
    </div>
</template>
<style scoped></style>