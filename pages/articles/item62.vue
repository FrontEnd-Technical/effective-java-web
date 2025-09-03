<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 62: Avoid strings where other types are more appropriate'
})

import { code_block } from '~/data/item62'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Avoid strings where other types are more appropriate" (Tránh dùng String ở những nơi các kiểu
            khác phù hợp hơn) có nghĩa là bạn <strong>không nên lạm dụng <span class="code">String</span></strong> để
            biểu diễn các loại dữ liệu không phải là văn bản.
        </p><br />
        <p>
            Việc sử dụng các kiểu dữ liệu phù hợp hơn (như <span class="code">enum</span>, các lớp số, hoặc các lớp tùy
            chỉnh) sẽ giúp mã nguồn của bạn <strong>an toàn hơn, dễ hiểu hơn, và mạnh mẽ hơn</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            <span class="code">String</span> là một kiểu dữ liệu tuyệt vời để biểu diễn văn bản. Tuy nhiên, các lập
            trình viên thường có xu hướng lạm dụng nó để biểu diễn gần như mọi thứ, dẫn đến các thiết kế tồi.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề của việc lạm dụng String 👎">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Mất an toàn kiểu:</strong> Nếu bạn dùng <span class="code">String</span> để biểu diễn
                        một <span class="code">enum</span>, trình biên dịch không thể giúp bạn phát hiện lỗi chính tả.
                    </li>
                    <li><strong>Khó hiểu:</strong> Một <span class="code">String</span> có thể đại diện cho bất cứ thứ
                        gì. Người đọc mã nguồn sẽ không biết được ý nghĩa thực sự nếu không có ngữ cảnh.</li>
                    <li><strong>Kém hiệu quả:</strong> Các thao tác trên <span class="code">String</span> (như phân tích
                        cú pháp) thường chậm hơn so với việc sử dụng các kiểu dữ liệu chuyên dụng.</li>
                    <li><strong>Dễ lỗi:</strong> Bạn phải tự viết logic để phân tích và kiểm tra tính hợp lệ của chuỗi.
                    </li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Các Ứng dụng và Best Practices" />
        <p>Quy tắc vàng là: <strong>Nếu một kiểu dữ liệu tồn tại, hãy dùng nó. Nếu không, hãy tự viết một kiểu
                mới.</strong></p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Dùng enum thay vì String cho các Hằng số">
                <p>Nếu bạn có một tập hợp các giá trị không đổi, <span class="code">enum</span> là lựa chọn tốt hơn
                    <span class="code">String</span> về mọi mặt.
                </p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Dùng các Kiểu số thay vì String">
                <p>Đừng bao giờ biểu diễn các con số bằng <span class="code">String</span>. Hãy sử dụng <span
                        class="code">int</span>, <span class="code">long</span>, <span class="code">double</span> hoặc
                    <span class="code">BigDecimal</span> để tận dụng các phép toán và kiểm tra kiểu của Java.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="3. Dùng một Lớp riêng thay vì một Chuỗi ghép nối">
                <p>Nếu một mẩu dữ liệu có cấu trúc (gồm nhiều thành phần), hãy tạo một lớp riêng để biểu diễn nó thay vì
                    ghép các thành phần lại thành một <span class="code">String</span>.</p>

                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="4. Dùng một Lớp riêng thay vì String cho 'Khả năng' (Capabilities)">
                <p>Đừng dùng <span class="code">String</span> để làm key trong các cấu trúc dữ liệu như <span
                        class="code">ThreadLocal</span>. Nếu hai client khác nhau vô tình dùng cùng một <span
                        class="code">String</span> key, chúng sẽ xung đột. Hãy tạo một lớp key riêng.</p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy sử dụng <span class="code">String</span> cho đúng mục đích của nó:
            <strong>biểu diễn dữ liệu văn bản</strong>. Đối với mọi thứ khác—các hằng số, các con số, dữ liệu có cấu
            trúc, hoặc các "khả năng"—hãy <strong>sử dụng hoặc tự tạo ra một kiểu dữ liệu phù hợp hơn</strong>. Điều này
            sẽ làm cho API của bạn an toàn hơn, dễ sử dụng hơn và mạnh mẽ hơn rất nhiều.
        </p><br />
    </div>
</template>
<style scoped></style>