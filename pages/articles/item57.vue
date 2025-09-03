<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 57: Minimize the scope of local variables'
})

import { code_block } from '~/data/item57'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Minimize the scope of local variables" (Tối thiểu hóa phạm vi của các biến cục bộ) có nghĩa là
            bạn nên <strong>khai báo các biến cục bộ ở phạm vi hẹp nhất có thể</strong>, lý tưởng nhất là ngay tại nơi
            chúng được sử dụng lần đầu tiên.
        </p><br />
        <p>
            Việc tuân thủ quy tắc này giúp <strong>tăng tính dễ đọc</strong> của mã nguồn và <strong>giảm khả năng xảy
                ra lỗi</strong> bằng cách hạn chế thời gian tồn tại của biến.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Phạm vi (scope) của một biến cục bộ kéo dài từ điểm nó được khai báo đến cuối khối lệnh (block) chứa nó.
            Việc khai báo biến trước khi chúng thực sự cần thiết sẽ làm cho mã nguồn trở nên lộn xộn và khó theo dõi.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích của việc Tối thiểu hóa Phạm vi">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Tăng tính dễ đọc:</strong> Khi một biến được khai báo và sử dụng trong cùng một phạm vi
                        hẹp, người đọc mã nguồn có thể dễ dàng thấy toàn bộ vòng đời của nó.</li>
                    <li><strong>Giảm lỗi:</strong> Việc giới hạn phạm vi của một biến sẽ giảm nguy cơ bạn vô tình sử
                        dụng lại nó cho một mục đích khác hoặc sử dụng nó với một giá trị cũ không mong muốn.</li>
                    <li><strong>Dọn đường cho việc tái cấu trúc (refactoring):</strong> Các phương thức nhỏ và tập trung
                        thường có phạm vi biến cục bộ hẹp một cách tự nhiên.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <div class="pl-3">
            <BlockOpinion opinion="1. Khai báo biến tại nơi sử dụng đầu tiên">
                <p>Đây là quy tắc cơ bản nhất. Đừng khai báo tất cả các biến ở đầu phương thức theo thói quen của các
                    ngôn ngữ cũ như C.</p><br />
                <p><strong>❌ Cách làm cũ:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>✅ Cách làm tốt nhất:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Ưu tiên vòng lặp for">
                <p>
                    Các vòng lặp <span class="code">for</span> (cả <span class="code">for</span> truyền thống và <span
                        class="code">for-each</span>) là một công cụ tuyệt vời để tối thiểu hóa phạm vi. Các biến được
                    khai báo trong vòng lặp <span class="code">for</span> chỉ tồn tại trong phạm vi của vòng lặp đó.
                </p><br />
                <p><strong>Vòng lặp <span class="code">for-each</span> là lựa chọn tốt nhất khi có thể:</strong></p>
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="3. Giữ cho các phương thức nhỏ và tập trung">
                <p>
                    Một phương thức thực hiện quá nhiều việc sẽ tự nhiên có nhiều biến cục bộ với phạm vi lớn. Bằng cách
                    chia nhỏ một phương thức lớn thành nhiều phương thức <span class="code">private</span> nhỏ hơn, mỗi
                    phương thức chỉ thực hiện một tác vụ duy nhất, bạn sẽ tự động tối thiểu hóa được phạm vi của các
                    biến cục bộ.
                </p><br />
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Hãy tập thói quen <strong>khai báo các biến cục bộ ngay tại nơi bạn cần đến
                chúng lần đầu tiên</strong>. Sử dụng các vòng lặp <span class="code">for</span> để giới hạn phạm vi một
            cách tự nhiên và giữ cho các phương thức của bạn ngắn gọn. Điều này sẽ làm cho mã nguồn của bạn trở nên sạch
            sẽ, dễ hiểu và ít bị lỗi hơn.
        </p><br />
    </div>
</template>
<style scoped></style>