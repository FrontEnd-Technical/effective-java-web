<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 46: Prefer side-effect-free functions in streams'
})

import { code_block } from '~/data/item46'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer side-effect-free functions in streams" (Ưu tiên các hàm không có tác dụng phụ trong
            stream) có nghĩa là các biểu thức lambda bạn truyền vào các toán tử stream <strong>chỉ nên thực hiện tính
                toán, không nên thay đổi bất kỳ trạng thái nào</strong> bên ngoài luồng stream đó.
        </p><br />
        <p>
            Việc tuân thủ quy tắc này là <strong>cốt lõi của lập trình hàm</strong> và giúp cho các chuỗi xử lý stream
            của bạn trở nên <strong>dễ hiểu, có thể đoán trước và an toàn khi chạy song song</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Một "tác dụng phụ" (side effect) xảy ra khi một hàm hoặc biểu thức lambda sửa đổi một trạng thái có thể thay
            đổi (mutable state) ở bên ngoài phạm vi của nó. Ví dụ: sửa đổi một biến, một collection, hoặc ghi vào một
            file.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Tác dụng phụ phá vỡ mô hình Stream 👎">
                <p>
                    Stream API được thiết kế để hoạt động theo mô hình lập trình hàm. Sức mạnh của nó đến từ việc mô tả
                    một chuỗi các phép biến đổi dữ liệu <em>cái gì</em> cần làm, thay vì <em>làm như thế nào</em>. Khi
                    bạn đưa tác dụng phụ vào, bạn đã phá vỡ mô hình này.
                </p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Kết quả không thể đoán trước:</strong> Hành vi của stream có thể trở nên không xác định,
                        đặc biệt là khi chạy song song, có thể dẫn đến race conditions.</li>
                    <li><strong>Mã nguồn khó hiểu:</strong> Logic trở nên phức tạp hơn khi bạn phải suy luận về cả phép
                        biến đổi dữ liệu và sự thay đổi trạng thái bên ngoài.</li>
                </ul><br />
                <p><strong>Ví dụ kinh điển về cách làm sai (dùng <span class="code">forEach</span> với tác dụng
                        phụ):</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Mã này rất nguy hiểm. Nếu <span class="code">wordStream</span> là một stream song song (<span
                        class="code">parallelStream()</span>), nhiều luồng sẽ cùng lúc cố gắng ghi vào <span
                        class="code">results</span>, gây ra lỗi và kết quả không chính xác.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: Sử dụng Collectors ✅" />
        <p>
            Cách đúng đắn để thu thập kết quả từ một stream là sử dụng các <strong>toán tử kết thúc (terminal
                operations)</strong>, đặc biệt là <strong>collectors</strong>. Collectors được thiết kế để tổng hợp các
            phần tử của một stream vào một cấu trúc dữ liệu một cách an toàn và hiệu quả.
        </p><br />

        <p><strong>Cách làm tốt nhất:</strong></p>
        <CodeBlock :code="code_block.method2"></CodeBlock>
        <p>
            Phiên bản này không có tác dụng phụ. Mỗi toán tử (<span class="code">filter</span>, <span
                class="code">map</span>) nhận đầu vào và tạo ra đầu ra, và <span class="code">collect</span> sẽ đảm
            nhiệm việc thu thập tất cả kết quả cuối cùng vào một <span class="code">List</span> mới.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Best Practices Tóm tắt">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong><span class="code">map</span>, <span class="code">filter</span>, <span
                                class="code">reduce</span>:</strong> Dùng các toán tử trung gian (intermediate
                        operations) này để thực hiện các phép biến đổi dữ liệu. Hãy đảm bảo các lambda bên trong chúng
                        là "thuần khiết" (pure) - không có tác dụng phụ.</li>
                    <li><strong><span class="code">collect</span>:</strong> Dùng các collectors (<span
                            class="code">toList</span>, <span class="code">toSet</span>, <span
                            class="code">toMap</span>, <span class="code">groupingBy</span>, v.v.) để tổng hợp kết quả
                        của chuỗi stream vào một cấu trúc dữ liệu mới.</li>
                    <li><strong><span class="code">forEach</span>:</strong> Chỉ nên sử dụng <span
                            class="code">forEach</span> như một toán tử kết thúc khi bạn muốn thực hiện một hành động
                        đơn giản trên mỗi phần tử mà <strong>không thay đổi bất kỳ trạng thái nào</strong>, ví dụ như in
                        ra console.</li>
                </ul>
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy giữ cho các hàm trong stream của bạn "sạch sẽ". Hãy coi chuỗi stream như
            một dây chuyền sản xuất: mỗi bước biến đổi sản phẩm và chuyển nó sang bước tiếp theo, và chỉ ở bước cuối
            cùng, sản phẩm hoàn chỉnh mới được đóng gói (collect). Việc giữ cho các hàm không có tác dụng phụ sẽ đảm bảo
            dây chuyền của bạn hoạt động một cách chính xác và hiệu quả.
        </p><br />
    </div>
</template>
<style scoped></style>