<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 34: Use enums instead of int constants'
})

import { code_block } from '~/data/item34'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use enums instead of int constants" (Dùng enum thay vì các hằng số int) có nghĩa là bất cứ khi
            nào bạn cần một tập hợp các hằng số cố định, bạn nên <strong>luôn sử dụng kiểu <span
                    class="code">enum</span></strong> thay vì mẫu <span class="code">int</span> enum pattern cũ.
        </p><br />
        <p>
            <span class="code">Enum</span> cung cấp <strong>an toàn kiểu (type safety) tại thời điểm biên dịch</strong>,
            dễ đọc hơn và mạnh mẽ hơn rất nhiều so với việc dùng các hằng số <span class="code">int</span> hoặc <span
                class="code">String</span>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Mẫu int enum Antipattern">
                <p>Trước Java 5, cách phổ biến để định nghĩa một tập hợp hằng số là dùng các trường <span
                        class="code">public static final int</span>.</p><br />
                <p><strong>Ví dụ về cách làm sai:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Nhược điểm của cách này:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Không an toàn về kiểu:</strong> Bạn có thể truyền bất kỳ giá trị <span
                            class="code">int</span> nào vào một phương thức mong đợi một loại quả, và trình biên dịch sẽ
                        không báo lỗi.</li>
                    <li><strong>Không có không gian tên (namespace):</strong> Các hằng số <span
                            class="code">APPLE_</span> và <span class="code">ORANGE_</span> phải có tiền tố để tránh
                        xung đột tên.</li>
                    <li><strong>Giòn và dễ vỡ:</strong> Nếu giá trị của một hằng số thay đổi, bạn phải biên dịch lại tất
                        cả các client.</li>
                    <li><strong>Khó debug:</strong> Khi in ra, bạn chỉ thấy một con số (ví dụ: <span
                            class="code">2</span>) thay vì một cái tên có ý nghĩa (<span
                            class="code">ORANGE_NAVEL</span>).</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Giải pháp: Kiểu enum ✅" />
        <p><span class="code">Enum</span> là một kiểu lớp đặc biệt trong Java, giải quyết tất cả các vấn đề trên.</p>
        <br />
        <p><strong>Cách làm tốt nhất:</strong></p>

        <CodeBlock :code="code_block.method2"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích vượt trội của enum">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>An toàn kiểu tại thời điểm biên dịch:</strong> Trình biên dịch đảm bảo rằng bạn chỉ có
                        thể sử dụng các hằng số đã được định nghĩa trong <span class="code">enum</span>.<br />
                        <span class="code">calculatePrice(Fruit.FUJI_APPLE); // Đúng</span><br />
                        <span class="code">calculatePrice(100); // LỖI BIÊN DỊCH!</span>
                    </li>
                    <li><strong>Có không gian tên riêng:</strong> Mỗi <span class="code">enum</span> có không gian tên
                        riêng, vì vậy bạn không cần tiền tố.</li>
                    <li><strong>Mạnh mẽ và linh hoạt:</strong> <span class="code">Enum</span> thực chất là các lớp đầy
                        đủ. Bạn có thể thêm các trường, phương thức và thậm chí implement các interface vào chúng.</li>
                    <li><strong>Dễ đọc và dễ bảo trì:</strong> Mã nguồn trở nên trong sáng và dễ hiểu hơn. Khi debug,
                        bạn sẽ thấy <span class="code">NAVEL_ORANGE</span> thay vì số <span class="code">2</span>.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="Ví dụ: enum với các phương thức và trường">
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Mẫu <span class="code">int</span> enum pattern là một di tích của quá khứ và
            không có lý do gì để sử dụng nó trong mã nguồn hiện đại. <strong>Hãy luôn sử dụng <span
                    class="code">enum</span></strong> bất cứ khi nào bạn cần đại diện cho một tập hợp các hằng số cố
            định. Chúng an toàn hơn, mạnh mẽ hơn và biểu cảm hơn rất nhiều.
        </p><br />
    </div>
</template>
<style scoped></style>