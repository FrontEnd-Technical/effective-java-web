<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 27: Eliminate unchecked warnings'
})

import { code_block } from '~/data/item27'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Eliminate unchecked warnings" (Loại bỏ các cảnh báo "unchecked") có nghĩa là bạn nên <strong>coi
                mỗi cảnh báo "unchecked" như một lỗi</strong> và nỗ lực để loại bỏ tất cả chúng.
        </p><br />
        <p>
            Việc tuân thủ quy tắc này đảm bảo rằng mã nguồn của bạn <strong>an toàn về kiểu (type-safe)</strong>, giúp
            bạn tự tin rằng sẽ không có lỗi <span class="code">ClassCastException</span> nào xảy ra lúc chạy.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Khi bạn lập trình với generics, trình biên dịch Java sẽ cố gắng cảnh báo bạn về những đoạn mã có thể không
            an toàn về kiểu. Các cảnh báo này, như <span class="code">unchecked cast</span>, <span
                class="code">unchecked call</span>, <span class="code">unchecked conversion</span>, là những dấu hiệu
            cho thấy bạn có thể đang phá vỡ hệ thống kiểu của generics, dẫn đến nguy cơ xảy ra <span
                class="code">ClassCastException</span> khi chương trình chạy.
        </p><br />
        <p><strong>Quy tắc vàng:</strong> Đừng phớt lờ các cảnh báo này. Mỗi cảnh báo chưa được kiểm tra (unchecked
            warning) đại diện cho một quả bom hẹn giờ tiềm tàng trong mã của bạn.</p>
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Tại sao phải loại bỏ chúng?">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>An toàn:</strong> Nếu mã của bạn biên dịch mà không có bất kỳ cảnh báo nào, bạn có một
                        sự đảm bảo rằng nó an toàn về kiểu.</li>
                    <li><strong>Tín hiệu nhiễu:</strong> Nếu bạn để lại các cảnh báo mà bạn "biết" là an toàn, chúng sẽ
                        che lấp các cảnh báo mới có thể thực sự nguy hiểm. Một mã nguồn sạch bóng cảnh báo sẽ giúp bạn
                        chú ý ngay lập tức khi một vấn đề mới phát sinh.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Các Ứng dụng và Best Practices" />
        <p>Hầu hết các cảnh báo "unchecked" đều có thể được loại bỏ bằng cách sửa mã nguồn.</p>
        <div class="pl-3">
            <BlockOpinion opinion="1. Sửa lỗi thay vì im lặng">
                <p>
                    Luôn cố gắng tìm ra nguyên nhân gốc rễ của cảnh báo và sửa nó. Thông thường, điều này liên quan đến
                    việc sử dụng các kiểu được tham số hóa (<span class="code">parameterized types</span>) một cách
                    chính xác thay vì các kiểu thô (<span class="code">raw types</span>).
                </p><br />
                <p><strong>Ví dụ:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Khi nào thì được phép 'Im lặng'?">
                <p>
                    Chỉ trong trường hợp hiếm hoi bạn <strong>không thể</strong> loại bỏ một cảnh báo và bạn đã
                    <strong>chứng minh được</strong> rằng đoạn mã gây ra cảnh báo đó là an toàn, bạn mới nên "im lặng"
                    nó bằng annotation <span class="code">@SuppressWarnings("unchecked")</span>.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="3. Cách 'Im lặng' một cách An toàn">
                <p>Khi bạn phải im lặng một cảnh báo, hãy tuân thủ hai quy tắc sau:</p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Sử dụng <span class="code">@SuppressWarnings("unchecked")</span> ở phạm vi nhỏ nhất có
                            thể.</strong> Đặt nó trên một biến cục bộ hoặc một phương thức <span
                            class="code">private</span> nhỏ, không bao giờ đặt nó trên cả một lớp.</li>
                    <li><strong>Thêm một bình luận (comment)</strong> giải thích lý do tại sao việc im lặng cảnh báo này
                        là an toàn. Điều này giúp người khác (và chính bạn trong tương lai) hiểu được mã nguồn.</li>
                </ol>
                <br>
                <p><strong>Ví dụ hoàn chỉnh:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Hãy đối xử với mọi cảnh báo "unchecked" một cách nghiêm túc. <strong>Nỗ lực
                loại bỏ từng cái một</strong>. Nếu bạn không thể, và bạn đã chứng minh được mã của mình an toàn, hãy im
            lặng nó bằng <span class="code">@SuppressWarnings("unchecked")</span> ở phạm vi hẹp nhất có thể, kèm theo
            một bình luận giải thích. Một mã nguồn sạch bóng cảnh báo là dấu hiệu của một lập trình viên chuyên nghiệp.
        </p><br />
    </div>
</template>
<style scoped></style>