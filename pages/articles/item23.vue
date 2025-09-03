<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 23: Prefer class hierarchies to tagged classes'
})

import { code_block } from '~/data/item23'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer class hierarchies to tagged classes" (Ưu tiên hệ thống phân cấp lớp thay vì các lớp được
            gắn thẻ) có nghĩa là bạn nên <strong>sử dụng tính đa hình (polymorphism)</strong> thay vì dùng một trường
            "thẻ" (tag) để xác định hành vi của một đối tượng.
        </p><br />
        <p>
            Đây là một quy tắc cơ bản trong thiết kế hướng đối tượng, giúp thay thế các cấu trúc <span
                class="code">switch</span> hoặc <span class="code">if-else</span> dài dòng bằng một thiết kế sạch sẽ,
            linh hoạt và dễ mở rộng hơn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Tagged Classes (Lớp được gắn thẻ)">
                <p>
                    Một "tagged class" là một lớp có thể đại diện cho nhiều "loại" (flavor) đối tượng khác nhau, và nó
                    sử dụng một trường <span class="code">enum</span> hoặc <span class="code">int</span> để "gắn thẻ"
                    cho biết nó đang là loại nào. Logic của lớp sẽ dựa vào một câu lệnh <span class="code">switch</span>
                    lớn để thay đổi hành vi dựa trên giá trị của thẻ.
                </p><br />
                <p><strong>Ví dụ về cách làm sai (Tagged Class):</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Nhược điểm của Tagged Class:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Dài dòng và lộn xộn:</strong> Mã nguồn chứa đầy các câu lệnh <span
                            class="code">switch</span>, các trường không liên quan và các constructor phức tạp.</li>
                    <li><strong>Dễ lỗi:</strong> Nếu bạn thêm một <span class="code">Shape</span> mới, bạn phải nhớ cập
                        nhật tất cả các câu lệnh <span class="code">switch</span>. Nếu quên, bạn sẽ không nhận được lỗi
                        biên dịch mà là lỗi lúc chạy.</li>
                    <li><strong>Không linh hoạt:</strong> Lớp chứa logic của tất cả các loại, vi phạm nguyên tắc trách
                        nhiệm đơn (Single Responsibility Principle).</li>
                    <li><strong>Tốn bộ nhớ:</strong> Một đối tượng <span class="code">Figure</span> hình tròn vẫn phải
                        mang theo các trường <span class="code">length</span> và <span class="code">width</span> không
                        cần thiết.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Giải pháp: Class Hierarchies (Hệ thống phân cấp lớp)" />
        <p>
            Giải pháp hướng đối tượng là tạo ra một hệ thống phân cấp lớp. Bạn định nghĩa một lớp <span
                class="code">abstract</span> (hoặc interface) chung, và tạo các lớp con cụ thể cho từng "loại".
        </p><br />

        <p><strong>Cách làm tốt nhất:</strong></p>
        <CodeBlock :code="code_block.method2"></CodeBlock>
        <p><strong>Lợi ích của Hệ thống phân cấp lớp:</strong></p>
        <ul class="list-disc pl-5 mt-3 space-y-1.5">
            <li><strong>Sạch sẽ và đơn giản:</strong> Mỗi lớp chỉ chứa các trường và logic liên quan đến loại của nó.
                Không còn các câu lệnh <span class="code">switch</span>.</li>
            <li><strong>An toàn về kiểu:</strong> Trình biên dịch sẽ đảm bảo rằng bạn đã triển khai tất cả các phương
                thức trừu tượng.</li>
            <li><strong>Dễ mở rộng:</strong> Khi bạn muốn thêm một hình mới (ví dụ: <span class="code">Triangle</span>),
                bạn chỉ cần tạo một lớp con mới mà không cần phải sửa đổi bất kỳ mã nguồn hiện có nào.</li>
            <li><strong>Tuân thủ các nguyên tắc hướng đối tượng:</strong> Mỗi lớp có một trách nhiệm duy nhất và logic
                được đóng gói gọn gàng.</li>
        </ul><br />
        <p>
            <strong>Kết luận:</strong> Tagged class là một di tích của lập trình thủ tục. Trong lập trình hướng đối
            tượng, hãy <strong>luôn sử dụng hệ thống phân cấp lớp</strong> để mô hình hóa các đối tượng có thể tồn tại ở
            nhiều dạng khác nhau. Điều này sẽ giúp mã nguồn của bạn trở nên an toàn, linh hoạt và dễ hiểu hơn rất nhiều.
        </p><br />
    </div>
</template>
<style scoped></style>