<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 51: Design method signatures carefully'
})

import { code_block } from '~/data/item51'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Design method signatures carefully" (Thiết kế chữ ký phương thức một cách cẩn thận) có nghĩa là
            bạn nên <strong>dành thời gian và nỗ lực để thiết kế các API tốt</strong>, vì một khi đã được công khai và
            sử dụng, việc thay đổi chúng là rất khó khăn và tốn kém.
        </p><br />
        <p>
            Một chữ ký phương thức được thiết kế tốt sẽ giúp cho API của bạn <strong>dễ học, dễ sử dụng và ít bị lỗi
                hơn</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan và Best Practices" />
        <p>
            Dưới đây là những quy tắc quan trọng và hay áp dụng nhất khi thiết kế chữ ký phương thức.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Chọn tên một cách Khôn ngoan">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Dễ hiểu:</strong> Tên phương thức nên thể hiện rõ ràng mục đích của nó.</li>
                    <li><strong>Tuân thủ quy ước:</strong> Hãy tuân theo các quy ước đặt tên đã được cộng đồng Java chấp
                        nhận rộng rãi (ví dụ: <span class="code">get...</span>, <span class="code">set...</span>, <span
                            class="code">is...</span>, <span class="code">to...</span>, <span
                            class="code">of...</span>).</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="2. Tránh các Danh sách Tham số Dài">
                <p>
                    <strong>Hãy cố gắng giữ số lượng tham số dưới bốn.</strong> Các danh sách tham số dài rất khó sử
                    dụng, khó đọc và dễ gây lỗi.
                </p><br />
                <p>Có ba kỹ thuật để rút ngắn danh sách tham số:</p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Chia nhỏ phương thức:</strong> Tách một phương thức thành nhiều phương thức nhỏ hơn.
                    </li>
                    <li><strong>Tạo các lớp hỗ trợ (helper classes):</strong> Nhóm các tham số có liên quan vào một lớp
                        <span class="code">static</span> member riêng.
                    </li>
                    <li><strong>Sử dụng Builder pattern:</strong> Chuyển đổi một chuỗi các tham số thành một lời gọi đến
                        builder.</li>
                </ol><br />
                <p><strong>Ví dụ: Dùng lớp hỗ trợ</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="3. Ưu tiên Interface thay vì Class cho Tham số">
                <p>
                    Khi có thể, hãy <strong>sử dụng một kiểu interface cho các tham số thay vì một kiểu lớp cụ
                        thể</strong>. Điều này làm cho phương thức của bạn linh hoạt hơn rất nhiều.
                </p><br />
                <p><strong>Ví dụ:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="4. Ưu tiên enum hai phần tử thay vì boolean">
                <p>
                    Đối với các tham số đại diện cho một tùy chọn có hai trạng thái, sử dụng <span
                        class="code">enum</span> thường rõ ràng hơn là dùng <span class="code">boolean</span>.
                </p><br />

                <p><strong>Ví dụ:</strong></p>
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Chữ ký phương thức là một trong những phần quan trọng nhất của một API. Một
            thiết kế tồi có thể gây khó chịu cho người dùng trong nhiều năm, trong khi một thiết kế tốt sẽ làm cho API
            của bạn trở nên thú vị và dễ sử dụng. Hãy đầu tư thời gian để làm cho đúng.
        </p><br />
    </div>
</template>
<style scoped></style>