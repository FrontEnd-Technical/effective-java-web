<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 76: Strive for failure atomicity'
})

import { code_block } from '~/data/item76'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Strive for failure atomicity" (Phấn đấu cho tính nguyên tử khi thất bại) có nghĩa là khi một
            phương thức thất bại (ném ra exception), nó nên <strong>để lại đối tượng ở trạng thái giống hệt như trước
                khi phương thức được gọi</strong>.
        </p><br />
        <p>
            Việc này ngăn chặn đối tượng rơi vào trạng thái không xác định hoặc bị hỏng, giúp cho hệ thống trở nên
            <strong>ổn định và dễ phục hồi hơn</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Một phương thức có tính "failure-atomic" sẽ đảm bảo rằng nếu nó không thể hoàn thành công việc, mọi thay đổi
            tạm thời sẽ được hoàn tác, và đối tượng sẽ không bị ảnh hưởng. Điều này giúp cho việc xử lý lỗi trở nên dễ
            dàng hơn, vì bạn có thể tiếp tục sử dụng đối tượng đó một cách an toàn sau khi bắt được exception.
        </p><br />

        <hr><br>
        <Heading1 title="Các Kỹ thuật và Best Practices" />
        <p>Có nhiều cách để đạt được tính nguyên tử khi thất bại. Dưới đây là những phương pháp phổ biến nhất.</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Làm việc trên một Bản sao Tạm thời">
                <p>
                    Đối với các thao tác phức tạp, hãy thực hiện các bước tính toán trên một bản sao tạm thời của đối
                    tượng. Nếu tất cả các bước thành công, hãy thay thế trạng thái của đối tượng gốc bằng bản sao tạm
                    thời đó.
                </p><br />
                <p><strong>Ví dụ: Sắp xếp một stack</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Kiểm tra Tham số trước khi Thay đổi">
                <p>
                    Trước khi thực hiện bất kỳ thay đổi nào, hãy kiểm tra tất cả các tham số để đảm bảo chúng hợp lệ
                    (Item 49). Nếu tham số không hợp lệ, hãy ném ra exception ngay lập tức trước khi đối tượng bị thay
                    đổi.
                </p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="3. Sắp xếp thứ tự các Thao tác">
                <p>
                    Hãy sắp xếp các thao tác trong phương thức sao cho bất kỳ thao tác nào có thể thất bại sẽ được thực
                    hiện <strong>trước</strong> các thao tác thay đổi trạng thái.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="4. Viết mã Phục hồi (Recovery Code)">
                <p>
                    Đối với các cấu trúc dữ liệu bền vững (persistent), bạn có thể viết mã phục hồi trong khối <span
                        class="code">catch</span> để hoàn tác lại các thay đổi đã thực hiện trước khi thất bại.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Mặc dù không phải lúc nào cũng có thể đạt được tính nguyên tử khi thất bại,
            đây là một mục tiêu thiết kế rất đáng để phấn đấu. Bằng cách <strong>kiểm tra tham số trước, làm việc trên
                các bản sao tạm thời, và sắp xếp thứ tự các thao tác một cách cẩn thận</strong>, bạn có thể làm cho các
            phương thức của mình mạnh mẽ hơn. Điều này giúp ngăn chặn việc các đối tượng bị hỏng và làm cho toàn bộ hệ
            thống trở nên đáng tin cậy hơn.
        </p><br />
    </div>
</template>
<style scoped></style>