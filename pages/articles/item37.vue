<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 37: Use EnumMap instead of ordinal indexing'
})

import { code_block } from '~/data/item37'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use EnumMap instead of ordinal indexing" (Dùng EnumMap thay vì lập chỉ mục bằng ordinal) có
            nghĩa là khi bạn cần liên kết dữ liệu với các hằng số của một <span class="code">enum</span>, bạn nên
            <strong>luôn sử dụng <span class="code">java.util.EnumMap</span></strong> thay vì dùng một mảng và truy cập
            nó bằng <span class="code">enum.ordinal()</span>.
        </p><br />
        <p>
            <span class="code">EnumMap</span> cung cấp một giải pháp <strong>an toàn, mạnh mẽ, dễ đọc và hiệu
                quả</strong> hơn rất nhiều so với việc lập chỉ mục thủ công.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Lập chỉ mục bằng ordinal() 👎">
                <p>
                    Một kỹ thuật phổ biến nhưng rất tồi là tạo ra một mảng và sử dụng giá trị <span
                        class="code">ordinal()</span> của <span class="code">enum</span> làm chỉ mục để truy cập mảng
                    đó.
                </p><br />
                <p><strong>Ví dụ về cách làm sai:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Nhược điểm của cách này:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Không an toàn:</strong> Trình biên dịch không biết mối liên hệ giữa <span
                            class="code">ordinal()</span> và chỉ mục mảng. Nếu bạn sắp xếp lại các hằng số trong <span
                            class="code">enum Phase</span>, mã nguồn sẽ bị lỗi <span
                            class="code">ArrayIndexOutOfBoundsException</span> hoặc trả về kết quả sai.</li>
                    <li><strong>Khó hiểu:</strong> Khi đọc mã, không có gì cho biết các chỉ mục mảng tương ứng với các
                        hằng số <span class="code">enum</span> nào.</li>
                    <li><strong>In ra không có ý nghĩa:</strong> Tên của <span class="code">enum</span> không được in
                        ra, làm cho việc debug trở nên khó khăn.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Giải pháp: EnumMap ✅" />
        <p>
            <span class="code">EnumMap</span> là một implementation của <span class="code">Map</span> được tối ưu hóa
            cao, sử dụng các hằng số <span class="code">enum</span> làm key.
        </p><br />
        <p><strong>Cách làm tốt nhất:</strong></p>

        <CodeBlock :code="code_block.method2"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích vượt trội của EnumMap">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>An toàn và Mạnh mẽ:</strong> <span class="code">EnumMap</span> sử dụng các hằng số <span
                            class="code">enum</span> trực tiếp làm key. Bạn có thể tự do thêm, xóa, hoặc sắp xếp lại các
                        hằng số <span class="code">enum</span> mà không sợ làm hỏng logic.</li>
                    <li><strong>Dễ đọc:</strong> Mã nguồn trở nên rõ ràng hơn rất nhiều.</li>
                    <li><strong>Hiệu năng cao:</strong> Bên trong, <span class="code">EnumMap</span> được triển khai như
                        một mảng, vì vậy hiệu năng của nó tương đương với việc lập chỉ mục bằng <span
                            class="code">ordinal()</span> thủ công.</li>
                    <li><strong>Giàu tính năng:</strong> Bạn có được tất cả các tiện ích của một <span
                            class="code">Map</span>.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Giống như <span class="code">ordinal()</span> nói chung, việc sử dụng nó để
            lập chỉ mục cho mảng là một thực hành tồi và dễ gây lỗi. Bất cứ khi nào bạn cần liên kết dữ liệu với các
            hằng số <span class="code">enum</span>, <strong>hãy luôn ưu tiên sử dụng <span
                    class="code">EnumMap</span></strong>. Nó an toàn, linh hoạt, dễ bảo trì và có hiệu năng tuyệt vời.
        </p><br />
    </div>
</template>
<style scoped></style>