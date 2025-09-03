<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 50: Make defensive copies when needed'
})

import { code_block } from '~/data/item50'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Make defensive copies when needed" (Tạo các bản sao phòng thủ khi cần thiết) có nghĩa là khi một
            lớp của bạn chứa các trường là đối tượng khả biến (mutable), bạn phải <strong>tạo ra các bản sao của những
                đối tượng đó</strong> để bảo vệ trạng thái nội bộ của lớp khỏi bị thay đổi từ bên ngoài.
        </p><br />
        <p>
            Việc này là một kỹ thuật phòng thủ cực kỳ quan trọng để <strong>bảo toàn các quy tắc bất biến
                (invariants)</strong> của lớp bạn, đặc biệt là khi bạn muốn tạo ra một lớp bất biến.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Một lớp có thể bị tấn công nếu nó chấp nhận hoặc trả về các tham chiếu đến các đối tượng khả biến. Có hai
            thời điểm脆弱:
        </p><br />
        <ol class="list-decimal pl-5 mt-3 space-y-1.5">
            <li><strong>Trong constructor:</strong> Nếu bạn lưu trữ trực tiếp một tham chiếu đến một đối tượng khả biến
                mà client truyền vào, client đó vẫn có thể thay đổi đối tượng đó sau khi nó đã được khởi tạo.</li>
            <li><strong>Trong getter:</strong> Nếu bạn trả về một tham chiếu trực tiếp đến một trường khả biến nội bộ,
                client có thể sử dụng tham chiếu đó để thay đổi trạng thái bên trong của lớp bạn.</li>
        </ol><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Lớp bị tấn công 💣">
                <p>Hãy xem xét một lớp <span class="code">Period</span> được thiết kế để bất biến, nhưng lại không tạo
                    bản sao phòng thủ.</p><br />
                <p><strong>Ví dụ về lớp không an toàn:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Cách tấn công:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: Defensive Copies ✅" />
        <p>
            Để bảo vệ lớp <span class="code">Period</span>, chúng ta phải tạo các bản sao phòng thủ cho các tham số khả
            biến trong constructor và cho các trường khi trả về từ getter.
        </p><br />

        <p><strong>Cách làm tốt nhất:</strong></p>
        <CodeBlock :code="code_block.method3"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Bất biến được bảo toàn:</strong> Bất kỳ thay đổi nào client thực hiện trên các đối tượng
                        <span class="code">Date</span> của họ sẽ không ảnh hưởng đến trạng thái bên trong của <span
                            class="code">Period</span>.
                    </li>
                    <li><strong>Đóng gói hoàn toàn:</strong> Trạng thái nội bộ của lớp được bảo vệ hoàn toàn khỏi sự can
                        thiệp từ bên ngoài.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="Lưu ý">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Sử dụng các kiểu bất biến:</strong> Cách tốt nhất để tránh phải tạo bản sao phòng thủ là
                        sử dụng các kiểu bất biến cho các trường của bạn ngay từ đầu (ví dụ: dùng <span
                            class="code">java.time.Instant</span> thay vì <span class="code">java.util.Date</span>).
                    </li>
                    <li><strong>Hiệu năng:</strong> Việc tạo bản sao có thể tốn kém. Nếu hiệu năng là yếu tố quan trọng,
                        bạn có thể tài liệu hóa rằng trách nhiệm thuộc về người gọi, nhưng đây là một lựa-chọn rủi ro.
                    </li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Bất cứ khi nào một lớp của bạn, đặc biệt là một lớp bất biến, chứa các trường
            là đối tượng khả biến, hãy <strong>luôn tạo các bản sao phòng thủ</strong>. Hãy sao chép các tham số khả
            biến trong constructor trước khi kiểm tra và lưu trữ chúng, và sao chép các trường khả biến trong getter
            trước khi trả về chúng.
        </p><br />
    </div>
</template>
<style scoped></style>