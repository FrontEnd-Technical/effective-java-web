<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 74: Document all exceptions thrown by each method'
})

import { code_block } from '~/data/item74'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Document all exceptions thrown by each method" (Tài liệu hóa tất cả các exception được ném ra
            bởi mỗi phương thức) có nghĩa là bạn phải <strong>sử dụng thẻ JavaDoc <span
                    class="code">@throws</span></strong> để ghi lại một cách cẩn thận <strong>mọi exception</strong> mà
            một phương thức có thể ném ra.
        </p><br />
        <p>
            Việc này tạo ra một "hợp đồng" rõ ràng với người dùng, giúp họ biết cách sử dụng API của bạn một cách chính
            xác và an toàn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Tài liệu hóa exception là một phần quan trọng của việc thiết kế một API mạnh mẽ và dễ sử dụng. Nó giúp người
            dùng hiểu được các điều kiện lỗi có thể xảy ra và cách xử lý chúng.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Tài liệu hóa Checked Exceptions">
                <p>
                    Đối với các <strong>checked exception</strong>, hãy luôn sử dụng thẻ <span
                        class="code">@throws</span> để mô tả điều kiện khiến exception đó được ném ra. Vì trình biên
                    dịch đã buộc người dùng phải xử lý chúng, tài liệu này giúp họ hiểu <em>tại sao</em> và viết logic
                    <span class="code">catch</span> phù hợp.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="2. Tài liệu hóa Unchecked Exceptions (Quan trọng!)">
                <p>
                    Đây là phần thường bị bỏ qua nhưng lại cực kỳ quan trọng. Bạn cũng phải <strong>tài liệu hóa tất cả
                        các unchecked exception</strong> (runtime exceptions) mà một phương thức có thể ném ra.
                </p><br />
                <p>
                    Việc này thông báo cho người dùng về các <strong>điều kiện tiên quyết (preconditions)</strong> của
                    phương thức. Ví dụ, tài liệu hóa <span class="code">@throws NullPointerException if an argument is
                        null</span> cho người dùng biết rằng họ không được phép truyền <span class="code">null</span>
                    vào.
                </p><br />

            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>
            Quy tắc vàng là: <strong>Không bao giờ để một phương thức ném ra một exception (cả checked và unchecked) mà
                không có thẻ <span class="code">@throws</span> tương ứng trong Javadoc của nó.</strong>
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Ví dụ Hoàn chỉnh">
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Mặc dù <span class="code">IndexOutOfBoundsException</span> và <span
                        class="code">NullPointerException</span> là unchecked, việc tài liệu hóa chúng vẫn rất quan
                    trọng để người dùng biết cách sử dụng phương thức một cách an toàn.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="Tài liệu hóa ở Mức Lớp">
                <p>
                    Đối với các unchecked exception có thể được ném ra từ nhiều phương thức trong một lớp (ví dụ: <span
                        class="code">NullPointerException</span>), bạn có thể tài liệu hóa chúng ở mức lớp thay vì lặp
                    lại ở từng phương thức.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Việc tài liệu hóa cẩn thận tất cả các exception mà một phương thức có thể ném
            ra là một phần không thể thiếu của việc viết API chất lượng cao. Hãy <strong>sử dụng thẻ <span
                    class="code">@throws</span> một cách nhất quán cho cả checked và unchecked exception</strong> để tạo
            ra một hợp đồng rõ ràng, giúp người dùng API của bạn viết mã đúng đắn và mạnh mẽ hơn.
        </p><br />
    </div>
</template>
<style scoped></style>