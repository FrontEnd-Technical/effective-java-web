<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 71: Avoid unnecessary use of checked exceptions'
})

import { code_block } from '~/data/item71'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Avoid unnecessary use of checked exceptions" (Tránh sử dụng checked exception không cần thiết)
            có nghĩa là bạn nên <strong>hạn chế việc sử dụng checked exception</strong>, đặc biệt là trong các tình
            huống mà người gọi không thể phục hồi một cách hiệu quả.
        </p><br />
        <p>
            Việc lạm dụng checked exception có thể làm cho API trở nên <strong>cồng kềnh, khó sử dụng</strong> và vi
            phạm các nguyên tắc đóng gói tốt.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Mặc dù checked exception rất hữu ích để buộc người dùng phải xử lý các lỗi có thể phục hồi, việc sử dụng
            chúng một cách bừa bãi sẽ gây ra nhiều vấn đề hơn là lợi ích.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Gánh nặng của Checked Exceptions 👎">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Làm API khó sử dụng:</strong> Việc buộc người dùng phải thêm các khối <span
                            class="code">try-catch</span> (thường là rỗng) hoặc thêm <span class="code">throws</span>
                        vào chữ ký phương thức của họ làm cho việc sử dụng API trở nên rất phiền toái.</li>
                    <li><strong>Phá vỡ tính đóng gói:</strong> Khi một phương thức ném ra các checked exception liên
                        quan đến chi tiết triển khai của nó, nó đã để lộ "nội tình" ra bên ngoài.</li>
                    <li><strong>Gây khó khăn cho Stream API:</strong> Các biểu thức lambda trong Stream API không thể
                        ném ra checked exception một cách trực tiếp.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Giải pháp và Best Practices" />
        <p>Cách tốt nhất để tránh một checked exception không cần thiết là biến một phương thức thất bại thành một
            phương thức không thể thất bại.</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Trả về Optional">
                <p>
                    Nếu một phương thức có thể không trả về giá trị nào, việc trả về một <span
                        class="code">Optional</span> (Item 55) là một giải pháp tuyệt vời và linh hoạt hơn nhiều so với
                    việc ném ra một checked exception.
                </p><br />
                <p><strong>❌ Cách làm cồng kềnh (dùng exception):</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>✅ Cách làm tốt nhất (dùng <span class="code">Optional</span>):</strong></p>

                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Trả về một Collection rỗng">
                <p>
                    Nếu một phương thức trả về một collection và không tìm thấy kết quả nào, hãy trả về một collection
                    rỗng thay vì ném exception (Item 54).
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="3. Chia nhỏ phương thức">
                <p>
                    Bạn có thể chia nhỏ một phương thức có thể ném exception thành hai: một phương thức trả về <span
                        class="code">boolean</span> để kiểm tra xem lời gọi có thành công hay không, và một phương thức
                    thứ hai thực hiện hành động. Ví dụ: <span class="code">iterator.hasNext()</span> và <span
                        class="code">iterator.next()</span>.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="Khi nào thì Checked Exception vẫn tốt?">
                <p>
                    Hãy giữ lại checked exception cho các tình huống mà <strong>thông tin về sự thất bại thực sự hữu ích
                        cho việc phục hồi</strong>. Ví dụ, <span class="code">IOException</span> cung cấp thông tin giá
                    trị về lý do tại sao một thao tác file lại thất bại.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Trước khi quyết định ném ra một checked exception, hãy tự hỏi: "Người dùng có
            thể làm gì hữu ích khi bắt được exception này không?". Nếu không, hoặc nếu có một cách đơn giản hơn để báo
            hiệu sự thất bại (như trả về <span class="code">Optional</span>), thì <strong>hãy tránh dùng checked
                exception</strong>.
        </p><br />
    </div>
</template>
<style scoped></style>