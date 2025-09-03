<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 45: Use streams judiciously'
})

import { code_block } from '~/data/item45'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use streams judiciously" (Sử dụng stream một cách thận trọng) có nghĩa là bạn nên <strong>tận
                dụng sức mạnh của Stream API</strong> để xử lý các chuỗi dữ liệu một cách rõ ràng và ngắn gọn, nhưng
            cũng cần <strong>nhận biết các trường hợp mà vòng lặp <span class="code">for</span> truyền thống lại là lựa
                chọn tốt hơn</strong>.
        </p><br />
        <p>
            Stream giúp mã nguồn trở nên <strong>biểu cảm và dễ đọc hơn khi được dùng đúng cách</strong>, nhưng lạm dụng
            chúng cho các tác vụ phức tạp có thể làm mã nguồn trở nên khó hiểu và khó debug hơn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Stream API, được giới thiệu từ Java 8, cung cấp một cách tiếp cận mới, mang tính khai báo (declarative) để
            xử lý các chuỗi phần tử.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích của Stream API 👍">
                <p>
                    Stream rất xuất sắc trong việc biến các đoạn mã xử lý dữ liệu phức tạp, lặp đi lặp lại thành một
                    chuỗi các thao tác (pipeline) ngắn gọn và dễ hiểu.
                </p><br />
                <p><strong>Ví dụ kinh điển: Đọc một file và đếm các nhóm anagram</strong></p><br />
                <p><strong>❌ Cách làm cũ (dùng vòng lặp):</strong></p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>✅ Cách làm tốt nhất với Stream:</strong></p><br />


                <img src="/assets/img/licensed-image.jfif" alt="Data processing pipeline" class="my-4 rounded shadow" />

                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p>
                    Phiên bản Stream loại bỏ hoàn toàn các biến tạm và vòng lặp, mô tả trực tiếp luồng xử lý dữ liệu:
                    đọc các dòng, nhóm chúng lại, lọc các nhóm, và in kết quả.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Khi nào thì không nên dùng Stream? 👎" />
        <p>Stream không phải là một giải pháp toàn năng. Có những trường hợp vòng lặp <span class="code">for</span> lại
            là lựa chọn tốt hơn.</p><br />
        <ol class="list-decimal pl-5 mt-3 space-y-1.5">
            <li><strong>Khi logic quá phức tạp:</strong> Nếu trong một vòng lặp bạn cần truy cập hoặc thay đổi nhiều
                biến cục bộ, hoặc sử dụng các câu lệnh điều khiển luồng như <span class="code">break</span>, <span
                    class="code">continue</span>, <span class="code">return</span>, việc chuyển sang Stream sẽ làm mã
                nguồn trở nên rất khó đọc.</li>
            <li><strong>Khi cần gỡ lỗi (debug):</strong> Việc debug một chuỗi Stream phức tạp khó hơn nhiều so với việc
                đặt breakpoint và kiểm tra các biến trong một vòng lặp <span class="code">for</span> thông thường.</li>
            <li><strong>Khi cần hiệu năng cao cho các tác vụ đơn giản:</strong> Đối với các vòng lặp cực kỳ đơn giản
                trên các kiểu nguyên thủy, một vòng lặp <span class="code">for</span> truyền thống có thể nhanh hơn một
                chút do ít overhead hơn.</li>
        </ol><br />
        <div class="pl-3">
            <BlockOpinion opinion="Best Practices Tóm tắt">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Ưu tiên Stream cho các chuỗi xử lý:</strong> Sử dụng Stream khi bạn cần thực hiện một
                        chuỗi các thao tác (lọc, ánh xạ, nhóm, v.v.) trên một tập hợp dữ liệu.</li>
                    <li><strong>Giữ cho Lambda đơn giản:</strong> Các biểu thức lambda bên trong Stream nên ngắn gọn và
                        không có hiệu ứng phụ (side-effect).</li>
                    <li><strong>Tránh lạm dụng:</strong> Nếu việc chuyển sang Stream làm cho mã nguồn của bạn trở nên
                        dài hơn hoặc khó hiểu hơn, hãy cứ dùng vòng lặp <span class="code">for</span>. <strong>Sự rõ
                            ràng là quan trọng nhất.</strong></li>
                    <li><strong>Kết hợp cả hai:</strong> Bạn hoàn toàn có thể sử dụng Stream để xử lý một phần dữ liệu
                        và sau đó dùng vòng lặp <span class="code">forEach</span> để xử lý kết quả cuối cùng.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> ⚖️ Stream là một công cụ cực kỳ mạnh mẽ trong bộ công cụ của lập trình viên Java.
            Hãy <strong>sử dụng chúng để làm cho mã xử lý dữ liệu trở nên sạch sẽ và biểu cảm hơn</strong>. Tuy nhiên,
            đừng cố ép buộc mọi thứ phải dùng Stream. Hãy luôn chọn công cụ phù hợp nhất cho từng công việc, và đôi khi,
            công cụ đó chính là vòng lặp <span class="code">for</span> đơn giản.
        </p><br />
    </div>
</template>
<style scoped></style>