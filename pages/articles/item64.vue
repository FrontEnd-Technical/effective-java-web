<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 64: Refer to objects by their interfaces'
})

import { code_block } from '~/data/item64'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Refer to objects by their interfaces" (Tham chiếu đến các đối tượng bằng interface của chúng) có
            nghĩa là bạn nên <strong>khai báo các biến, tham số, và giá trị trả về bằng kiểu interface</strong> thay vì
            kiểu lớp cụ thể của chúng, bất cứ khi nào có thể.
        </p><br />
        <p>
            Việc này làm cho mã nguồn của bạn trở nên <strong>cực kỳ linh hoạt</strong> và dễ dàng thay đổi trong tương
            lai.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Khi bạn khai báo một biến, bạn tạo ra một "hợp đồng" cho biến đó. Nếu bạn dùng một kiểu lớp cụ thể, bạn đang
            tự ràng buộc mình vào một cách triển khai duy nhất. Nếu bạn dùng một kiểu interface, bạn chỉ quan tâm đến
            "hành vi" mà không cần biết đến "cách triển khai".
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích: Tăng tính Linh hoạt 🚀">
                <p>
                    Lợi ích lớn nhất của việc lập trình theo interface là bạn có thể <strong>thay đổi lớp triển khai bất
                        cứ lúc nào</strong> mà không cần phải sửa đổi mã nguồn sử dụng nó.
                </p>
                <CodeBlock :code="code_block.method1"></CodeBlock>

            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Hãy biến việc này thành thói quen trong ba trường hợp chính:</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Khai báo biến">
                <p>Luôn khai báo biến bằng kiểu interface.</p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Tham số Phương thức">
                <p>Sử dụng kiểu interface cho các tham số để làm cho phương thức của bạn linh hoạt và chấp nhận được
                    nhiều loại đối tượng hơn.</p>
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="3. Kiểu trả về của Phương thức">
                <p>Tương tự, trả về một kiểu interface cho phép bạn thay đổi lớp triển khai nội bộ trong tương lai mà
                    không làm ảnh hưởng đến client.</p><br />
            </BlockOpinion>
            <BlockOpinion opinion="Khi nào thì không dùng Interface?">
                <p>
                    Chỉ có một trường hợp ngoại lệ: khi bạn thực sự cần sử dụng một phương thức <strong>chỉ tồn tại
                        trong lớp cụ thể</strong> mà không có trong interface. Ví dụ, <span
                        class="code">ArrayList</span> có phương thức <span class="code">ensureCapacity</span>, nhưng
                    <span class="code">List</span> thì không. Nếu bạn cần gọi phương thức đó, bạn phải khai báo biến là
                    <span class="code">ArrayList</span>. Tuy nhiên, đây là trường hợp rất hiếm.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> <strong>Lập trình theo interface</strong> là một trong những thói quen quan
            trọng nhất của một lập trình viên Java giỏi. Bằng cách tham chiếu đến các đối tượng thông qua interface của
            chúng, bạn tạo ra mã nguồn linh hoạt, dễ thích ứng và dễ bảo trì hơn rất nhiều.
        </p><br />
    </div>
</template>
<style scoped></style>