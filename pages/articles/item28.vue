<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 28: Prefer lists to arrays'
})

import { code_block } from '~/data/item28'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer lists to arrays" (Ưu tiên List thay vì mảng) có nghĩa là bạn nên <strong>sử dụng <span
                    class="code">List</span> (hoặc các collection khác) làm lựa chọn mặc định</strong> thay vì mảng
            (<span class="code">[]</span>) trong hầu hết các trường hợp.
        </p><br />
        <p>
            Lý do chính là <strong><span class="code">List</span> và các generics khác cung cấp sự an toàn về kiểu (type
                safety) tốt hơn nhiều</strong> so với mảng, giúp phát hiện lỗi tại thời điểm biên dịch thay vì lúc chạy.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>Mảng và generics (như <span class="code">List</span>) có những khác biệt cơ bản trong hệ thống kiểu của Java.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề của Mảng: Kém an toàn về kiểu">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Mảng là <em>covariant</em>:</strong> Điều này có nghĩa là nếu <span
                            class="code">Sub</span> là một kiểu con của <span class="code">Super</span>, thì <span
                            class="code">Sub[]</span> cũng là một kiểu con của <span class="code">Super[]</span>.</li>
                    <li><strong>Mảng được <em>reified</em>:</strong> Mảng biết và thực thi kiểu của các phần tử của nó
                        tại lúc chạy.</li>
                </ol><br />
                <p>Sự kết hợp này tạo ra một lỗ hổng an toàn kiểu:</p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>Lỗi chỉ được phát hiện khi chương trình đang chạy, đây là điều chúng ta luôn muốn tránh.</p><br />
            </BlockOpinion>
            <BlockOpinion opinion="Lợi ích của List (Generics): An toàn hơn ✅">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Generics là <em>invariant</em>:</strong> <span class="code">List&lt;Sub&gt;</span>
                        <strong>không phải</strong> là một kiểu con của <span class="code">List&lt;Super&gt;</span>.
                    </li>
                    <li><strong>Generics được <em>erasure</em>:</strong> Thông tin về kiểu sẽ bị xóa đi lúc chạy. Sự an
                        toàn được đảm bảo hoàn toàn bởi trình biên dịch.</li>
                </ol><br />
                <p>Sự kết hợp này mang lại an toàn tuyệt đối lúc biên dịch:</p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p>Với <span class="code">List</span>, bạn không bao giờ gặp phải <span
                        class="code">ClassCastException</span> hoặc <span class="code">ArrayStoreException</span> nếu mã
                    của bạn biên dịch mà không có cảnh báo.</p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Quy tắc vàng là: <strong>Bắt đầu với <span class="code">List</span>. Chỉ sử dụng mảng khi bạn thực sự cần đến
                hiệu năng của chúng và đã đo lường.</strong></p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Sử dụng List cho các API công khai">
                <p>
                    Luôn sử dụng <span class="code">List</span> (hoặc các kiểu collection khác như <span
                        class="code">Set</span>, <span class="code">Map</span>) trong các tham số và giá trị trả về của
                    các phương thức <span class="code">public</span>. Điều này làm cho API của bạn an toàn và dễ sử dụng
                    hơn.
                </p><br />
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Tận dụng sức mạnh của Collections Framework">
                <p>
                    <span class="code">List</span> được tích hợp đầy đủ với Java Collections Framework, cung cấp vô số
                    các thuật toán và lớp tiện ích mạnh mẽ mà mảng không có được.
                </p><br />

            </BlockOpinion>
            <BlockOpinion opinion="3. Khi nào thì Mảng vẫn hữu ích?">
                <p>Mặc dù <span class="code">List</span> được ưu tiên, mảng vẫn có vị trí của nó, chủ yếu là vì lý do
                    <strong>hiệu năng</strong>.
                </p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Kiểu nguyên thủy (Primitives):</strong> Nếu bạn đang làm việc với các tập dữ liệu lớn
                        của các kiểu nguyên thủy (<span class="code">int</span>, <span class="code">double</span>, v.v.)
                        và hiệu năng là yếu tố cực kỳ quan trọng, mảng (<span class="code">int[]</span>, <span
                            class="code">double[]</span>) thường nhanh hơn đáng kể so với <span
                            class="code">List&lt;Integer&gt;</span> hoặc <span class="code">List&lt;Double&gt;</span> vì
                        chúng không có overhead của việc boxing/unboxing.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Trong lập trình Java hiện đại, hãy <strong>mặc định sử dụng <span
                    class="code">List</span> và các collection khác</strong>. Chúng an toàn hơn, linh hoạt hơn và mạnh
            mẽ hơn. Chỉ cân nhắc sử dụng mảng trong các đoạn mã nhạy cảm về hiệu năng sau khi bạn đã xác định đó thực sự
            là một điểm nghẽn cổ chai.
        </p><br />
    </div>
</template>
<style scoped></style>