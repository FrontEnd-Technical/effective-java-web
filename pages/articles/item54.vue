<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 54: Return empty collections or arrays, not nulls'
})

import { code_block } from '~/data/item54'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Return empty collections or arrays, not nulls" (Trả về collection hoặc mảng rỗng, không phải
            null) có nghĩa là khi một phương thức cần trả về một tập hợp các giá trị nhưng không có giá trị nào để trả
            về, bạn nên <strong>luôn trả về một collection hoặc một mảng rỗng</strong> thay vì <span
                class="code">null</span>.
        </p><br />
        <p>
            Việc này giúp loại bỏ gánh nặng phải kiểm tra <span class="code">null</span> ở phía client, làm cho mã nguồn
            trở nên <strong>đơn giản, sạch sẽ và ít bị lỗi <span class="code">NullPointerException</span> hơn</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Trả về null gây phiền toái 👎">
                <p>
                    Khi một phương thức có thể trả về <span class="code">null</span>, mọi client gọi đến phương thức đó
                    đều buộc phải thêm một khối mã kiểm tra <span class="code">null</span> để tránh lỗi <span
                        class="code">NullPointerException</span>.
                </p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Mã kiểm tra <span class="code">null</span> này là boilerplate không cần thiết, làm lộn xộn mã nguồn
                    và dễ bị bỏ sót, dẫn đến các lỗi tiềm ẩn.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: Luôn trả về một Collection/Mảng rỗng ✅" />
        <p>
            Bằng cách luôn trả về một collection hoặc mảng rỗng, bạn đảm bảo rằng giá trị trả về luôn có thể được sử
            dụng một cách an toàn mà không cần kiểm tra.
        </p><br />

        <CodeBlock :code="code_block.method2"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Best Practices và Hiệu năng">
                <p>
                    Việc tạo ra một collection hoặc mảng rỗng mới mỗi lần gọi có thể gây lo ngại về hiệu năng. Có hai
                    cách để tối ưu hóa:
                </p><br />
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Sử dụng các đối tượng bất biến, được cache sẵn:</strong> Các lớp tiện ích như <span
                            class="code">java.util.Collections</span> cung cấp các phương thức <span
                            class="code">emptyList()</span>, <span class="code">emptySet()</span>, và <span
                            class="code">emptyMap()</span> trả về các collection rỗng, bất biến và được cache sẵn. Đây
                        là lựa chọn tốt nhất.</li>
                    <li>
                        <strong>Đối với mảng:</strong> Bạn có thể trả về một mảng có độ dài bằng 0. Vì các mảng rỗng là
                        bất biến, bạn có thể cache một mảng rỗng và tái sử dụng nó.
                        <CodeBlock :code="code_block.method3"></CodeBlock>
                    </li>
                </ol>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> <strong>Không có lý do gì để trả về <span class="code">null</span> từ một
                phương thức được thiết kế để trả về một collection hoặc mảng</strong>. Việc trả về một thực thể rỗng
            thay thế giúp cải thiện đáng kể chất lượng và tính dễ sử dụng của API mà không ảnh hưởng đáng kể đến hiệu
            năng.
        </p><br />
    </div>
</template>
<style scoped></style>