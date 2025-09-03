<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 36: Use EnumSet instead of bit fields'
})

import { code_block } from '~/data/item36'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use EnumSet instead of bit fields" (Dùng EnumSet thay vì các trường bit) có nghĩa là khi bạn cần
            biểu diễn một tập hợp các cờ (flags) từ một <span class="code">enum</span>, bạn nên <strong>luôn sử dụng
                <span class="code">java.util.EnumSet</span></strong> thay vì kỹ thuật "trường bit" (bit field) cũ.
        </p><br />
        <p>
            <span class="code">EnumSet</span> cung cấp một giải pháp <strong>an toàn về kiểu (type-safe)</strong>, dễ
            đọc, mạnh mẽ và hiệu quả hơn rất nhiều.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Bit Fields Antipattern 👎">
                <p>
                    Trước đây, để biểu diễn một tập hợp các tùy chọn (ví dụ: các kiểu chữ), người ta thường dùng kỹ
                    thuật "trường bit". Mỗi hằng số được gán một giá trị là lũy thừa của 2, và các tập hợp được biểu
                    diễn bằng cách thực hiện phép toán <span class="code">OR</span> trên các bit.
                </p><br />
                <p><strong>Ví dụ về cách làm sai:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Nhược điểm của cách này:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Không an toàn về kiểu:</strong> Bạn có thể truyền bất kỳ giá trị <span
                            class="code">int</span> nào vào phương thức <span class="code">applyStyles</span>.</li>
                    <li><strong>Khó đọc và khó hiểu:</strong> Việc thao tác với các bit (dùng <span
                            class="code">|</span>, <span class="code">&</span>, <span class="code">~</span>) không trực
                        quan. Khi in ra, bạn chỉ thấy một con số (ví dụ: <span class="code">3</span>) thay vì <span
                            class="code">{BOLD, ITALIC}</span>.</li>
                    <li><strong>Khó mở rộng:</strong> Số lượng bit bị giới hạn (thường là 32 hoặc 64).</li>
                    <li><strong>Không có API tiện lợi:</strong> Bạn phải tự viết các phương thức để duyệt qua các cờ.
                    </li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Giải pháp: EnumSet ✅" />
        <p>
            <span class="code">EnumSet</span> là một implementation của interface <span class="code">Set</span> được tối
            ưu hóa cao, được thiết kế đặc biệt để làm việc với các hằng số <span class="code">enum</span>.
        </p><br />
        <p><strong>Cách làm tốt nhất:</strong></p>

        <CodeBlock :code="code_block.method2"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích vượt trội của EnumSet">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>An toàn kiểu và Dễ đọc:</strong> Bạn nhận được tất cả lợi ích của <span
                            class="code">enum</span> và interface <span class="code">Set</span>. Mã nguồn trở nên cực kỳ
                        rõ ràng.</li>
                    <li><strong>Hiệu năng cao:</strong> Bên trong, <span class="code">EnumSet</span> được triển khai như
                        một "trường bit" (thường là một <span class="code">long</span>), vì vậy nó cực kỳ nhỏ gọn và
                        nhanh.</li>
                    <li><strong>Giàu tính năng:</strong> Vì là một <span class="code">Set</span>, bạn có tất cả các
                        phương thức mạnh mẽ của Collections Framework, như <span class="code">add</span>, <span
                            class="code">remove</span>, <span class="code">contains</span>, và các phép toán tập hợp.
                    </li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="Ví dụ sử dụng:">
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Kỹ thuật "trường bit" là một di tích nên được để lại trong quá khứ. Bất cứ khi
            nào bạn cần biểu diễn một tập hợp các cờ từ một <span class="code">enum</span>, <strong>hãy luôn sử dụng
                <span class="code">EnumSet</span></strong>. Nó kết hợp sự dễ đọc và an toàn của <span
                class="code">enum</span> với hiệu năng của "trường bit", là một ví dụ hoàn hảo về thiết kế API tốt.
        </p><br />
    </div>
</template>
<style scoped></style>