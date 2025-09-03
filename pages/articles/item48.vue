<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 48: Use caution when making streams parallel'
})

import { code_block } from '~/data/item48'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use caution when making streams parallel" (Thận trọng khi sử dụng stream song song) có nghĩa là
            bạn <strong>không nên song song hóa các chuỗi stream một cách tùy tiện</strong>, vì việc này có thể dẫn đến
            <strong>kết quả sai hoặc làm giảm hiệu năng</strong> thay vì tăng tốc.
        </p><br />
        <p>
            Hãy chỉ sử dụng stream song song (<span class="code">parallel()</span>) khi bạn chắc chắn rằng mã nguồn của
            mình an toàn và đã đo lường thấy có sự cải thiện hiệu năng rõ rệt.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Việc chuyển một stream tuần tự thành song song rất dễ dàng: chỉ cần gọi phương thức <span
                class="code">.parallel()</span>. Tuy nhiên, đằng sau sự đơn giản đó là những rủi ro tiềm ẩn.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Khi nào thì parallel() gây hại? 👎">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Kết quả sai do Tác dụng phụ (Side Effects):</strong> Nếu các hàm lambda của bạn không
                        "thuần khiết" (pure), tức là chúng có tác dụng phụ (sửa đổi trạng thái bên ngoài), việc chạy
                        song song sẽ gây ra race conditions và cho kết quả không thể đoán trước.</li>
                    <li><strong>Hiệu năng kém hơn:</strong> Việc song song hóa có chi phí overhead (quản lý luồng, chia
                        tách dữ liệu). Nếu công việc tính toán quá nhỏ, chi phí này có thể lớn hơn lợi ích, làm chương
                        trình chạy chậm hơn.</li>
                    <li><strong>Không phù hợp với mọi nguồn dữ liệu:</strong> Hiệu quả của stream song song phụ thuộc
                        rất nhiều vào khả năng "chia tách" (splittability) của nguồn dữ liệu.</li>
                </ol><br />
                <p><strong>Ví dụ về kết quả sai (Stateful Lambda):</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Để sử dụng stream song song một cách an toàn và hiệu quả, hãy đảm bảo các điều kiện sau được đáp ứng.</p>
        <br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Hàm Lambda phải 'Thuần khiết'">
                <p>
                    Các hàm lambda của bạn <strong>bắt buộc</strong> phải không có tác dụng phụ (stateless và
                    side-effect-free). Chúng chỉ nên nhận đầu vào và tạo ra đầu ra. Đây là điều kiện tiên quyết.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="2. Nguồn dữ liệu phải Dễ chia tách">
                <p>Hiệu quả của việc song song hóa phụ thuộc vào cấu trúc dữ liệu nguồn.</p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Tốt 👍:</strong> <span class="code">ArrayList</span>, <span class="code">HashMap</span>,
                        <span class="code">HashSet</span>, mảng, <span class="code">IntStream.range</span>. Các cấu trúc
                        này có thể được chia thành các phần nhỏ một cách hiệu quả.
                    </li>
                    <li><strong>Kém 👎:</strong> <span class="code">LinkedList</span>, <span
                            class="code">Stream.iterate</span>. Các cấu trúc này khó chia tách, làm cho việc song song
                        hóa không hiệu quả.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="3. Công việc phải đủ Lớn">
                <p>
                    Tổng số công việc cần thực hiện phải đủ lớn để bù đắp cho chi phí overhead của việc song song hóa.
                    Một quy tắc kinh nghiệm là <span class="code">N * Q > 100,000</span>, trong đó <span
                        class="code">N</span> là số lượng phần tử và <span class="code">Q</span> là khối lượng công việc
                    trên mỗi phần tử.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="Ví dụ tốt về việc dùng parallel()">
                <p>Tính số nguyên tố là một tác vụ tốn nhiều CPU và hưởng lợi từ việc song song hóa:</p>

                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="Best Practices Tóm tắt">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Đừng song song hóa một cách mù quáng:</strong> Đừng bao giờ thêm <span
                            class="code">.parallel()</span> vào một stream mà không suy nghĩ.</li>
                    <li><strong>Đảm bảo tính đúng đắn:</strong> Luôn chắc chắn rằng các hàm lambda của bạn không có tác
                        dụng phụ.</li>
                    <li><strong>Đo lường hiệu năng:</strong> <strong>Luôn đo lường</strong> thời gian thực thi của cả
                        phiên bản tuần tự và song song. Chỉ giữ lại phiên bản song song nếu nó thực sự nhanh hơn.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Stream song song là một công cụ mạnh mẽ để tăng tốc các tác vụ tính toán
            chuyên sâu, nhưng nó không phải là một viên đạn bạc. Hãy <strong>sử dụng nó một cách thận trọng</strong>,
            luôn ưu tiên tính đúng đắn và <strong>chỉ áp dụng sau khi đã đo lường</strong> cẩn thận để xác nhận lợi ích
            về hiệu năng.
        </p><br />
    </div>
</template>
<style scoped></style>