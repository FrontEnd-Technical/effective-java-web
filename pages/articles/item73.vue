<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 73: Throw exceptions appropriate to the abstraction'
})

import { code_block } from '~/data/item73'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Throw exceptions appropriate to the abstraction" (Ném ra các exception phù hợp với tầng trừu
            tượng) có nghĩa là một phương thức nên <strong>bắt các exception ở tầng thấp hơn</strong> và <strong>ném lại
                chúng dưới dạng một exception có ý nghĩa hơn</strong> ở tầng trừu tượng của chính nó.
        </p><br />
        <p>
            Kỹ thuật này được gọi là <strong>"dịch exception" (exception translation)</strong>, giúp che giấu chi tiết
            triển khai và tạo ra các API mạnh mẽ, dễ hiểu hơn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Khi một phương thức ném ra một exception liên quan đến chi tiết triển khai bên trong của nó, nó đã làm "rò
            rỉ" thông tin ra bên ngoài. Điều này không chỉ gây khó hiểu cho người dùng mà còn ràng buộc API của bạn vào
            một cách triển khai cụ thể.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Rò rỉ Chi tiết Triển khai 👎">
                <p>
                    Nếu một phương thức ở tầng cao (ví dụ: <span class="code">getUserById</span>) lại ném ra một <span
                        class="code">SQLException</span>, nó đã cho người dùng biết rằng nó đang sử dụng JDBC. Nếu sau
                    này bạn muốn đổi sang một cơ sở dữ liệu NoSQL (ví dụ: MongoDB), bạn sẽ phải thay đổi chữ ký của
                    phương thức và các exception, phá vỡ code của tất cả các client.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: Exception Translation ✅" />
        <p>
            Cách làm tốt nhất là bắt các exception ở tầng thấp và gói chúng lại trong một exception của tầng cao hơn.
        </p><br />

        <p><strong>Ví dụ kinh điển: <span class="code">AbstractCollection.get</span></strong></p>
        <CodeBlock :code="code_block.method1"></CodeBlock>
        <p>
            <strong>Exception Chaining:</strong> Khi dịch exception, hãy luôn sử dụng "exception chaining" bằng cách
            truyền exception gốc vào constructor của exception mới. Điều này giúp giữ lại đầy đủ thông tin về nguyên
            nhân gốc rễ của lỗi, cực kỳ hữu ích cho việc debug.
        </p><br />
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Đây là một kỹ thuật cực kỳ quan trọng khi xây dựng các ứng dụng nhiều tầng (multi-layered).</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Tầng Service và Tầng Dữ liệu">
                <p>Đây là nơi exception translation được áp dụng phổ biến nhất.</p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Tầng Dữ liệu (Repository):</strong> Có thể ném ra các exception cụ thể như <span
                            class="code">SQLException</span> (từ JDBC), <span class="code">PersistenceException</span>
                        (từ JPA).</li>
                    <li><strong>Tầng Service:</strong> Nên bắt các exception này và ném lại dưới dạng các exception
                        nghiệp vụ có ý nghĩa hơn, ví dụ: <span class="code">UserNotFoundException</span> hoặc <span
                            class="code">DataAccessException</span>.</li>
                </ul>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Để giữ cho các tầng của ứng dụng được độc lập và trừu tượng, <strong>đừng bao
                giờ để các exception của tầng thấp lọt lên các tầng cao hơn</strong>. Hãy luôn thực hành
            <strong>exception translation</strong>: bắt các exception cụ thể và ném lại chúng dưới dạng các exception
            phù hợp với tầng trừu tượng mà bạn đang cung cấp.
        </p><br />
    </div>
</template>
<style scoped></style>