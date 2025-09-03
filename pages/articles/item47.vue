<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 47: Prefer Collection to Stream as a return type'
})

import { code_block } from '~/data/item47'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer Collection to Stream as a return type" (Ưu tiên Collection thay vì Stream làm kiểu trả
            về) có nghĩa là khi một phương thức <span class="code">public</span> cần trả về một chuỗi các phần tử, bạn
            nên <strong>trả về một <span class="code">Collection</span> (hoặc các kiểu con của nó như <span
                    class="code">List</span>, <span class="code">Set</span>)</strong> thay vì trả về trực tiếp một <span
                class="code">Stream</span>.
        </p><br />
        <p>
            Lý do chính là <strong><span class="code">Collection</span> linh hoạt hơn rất nhiều cho người dùng</strong>,
            trong khi <span class="code">Stream</span> lại có những hạn chế quan trọng.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Hạn chế của việc trả về Stream 👎">
                <p>
                    <span class="code">Stream</span> là một công cụ mạnh mẽ để <em>xử lý</em> dữ liệu, nhưng lại là một
                    kiểu trả về rất kém linh hoạt.
                </p><br />
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Chỉ có thể duyệt một lần:</strong> Một <span class="code">Stream</span> chỉ có thể được
                        duyệt qua một lần duy nhất. Sau khi một toán tử kết thúc được gọi (như <span
                            class="code">forEach</span> hoặc <span class="code">collect</span>), stream đó sẽ bị "đóng"
                        và không thể tái sử dụng.</li>
                    <li><strong>Không thể dùng trong vòng lặp <span class="code">for-each</span>:</strong> Bạn không thể
                        viết <span class="code">for (Element e : myStream)</span> vì <span class="code">Stream</span>
                        không implement <span class="code">Iterable</span>.</li>
                </ol><br />
                <p><strong>Ví dụ về API kém linh hoạt:</strong></p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: Trả về Collection ✅" />
        <p>
            <span class="code">Collection</span> là một kiểu trả về tốt hơn hẳn vì nó cung cấp cho người dùng cả hai lựa
            chọn.
        </p><br />
        <ul class="list-disc pl-5 mt-3 space-y-1.5">
            <li><strong>Là một <span class="code">Iterable</span>:</strong> Người dùng có thể trực tiếp duyệt qua nó
                bằng vòng lặp <span class="code">for-each</span> bao nhiêu lần tùy thích.</li>
            <li><strong>Dễ dàng tạo <span class="code">Stream</span>:</strong> Người dùng có thể gọi phương thức <span
                    class="code">.stream()</span> bất cứ khi nào họ muốn xử lý dữ liệu theo kiểu hàm.</li>
        </ul><br />

        <p><strong>Cách làm tốt nhất:</strong></p><br />
        <CodeBlock :code="code_block.method2"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Khi nào thì trả về Mảng?">
                <p>
                    Mặc dù nguyên tắc chung là ưu tiên <span class="code">Collection</span>, nhưng nếu chuỗi trả về có
                    kích thước nhỏ và hiệu năng là yếu tố cực kỳ quan trọng, việc trả về một mảng có thể nhanh hơn một
                    chút. Tuy nhiên, trong hầu hết các API, sự linh hoạt của <span class="code">Collection</span> vẫn
                    được ưu tiên hơn.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> <strong>Đối với các phương thức <span class="code">public</span></strong>, hãy
            luôn trả về một <span class="code">Collection</span> (hoặc các kiểu con như <span class="code">List</span>,
            <span class="code">Set</span>) để cung cấp cho người dùng sự linh hoạt tối đa. Hãy để người dùng quyết định
            khi nào họ muốn duyệt qua dữ liệu và khi nào họ muốn xử lý nó bằng <span class="code">Stream</span>.
        </p><br />
    </div>
</template>
<style scoped></style>