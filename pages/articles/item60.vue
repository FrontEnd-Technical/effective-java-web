<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 60: Avoid float and double if exact answers are required'
})

import { code_block } from '~/data/item60'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Avoid float and double if exact answers are required" (Tránh dùng float và double nếu cần câu
            trả lời chính xác) có nghĩa là bạn <strong>không bao giờ nên sử dụng các kiểu <span
                    class="code">float</span> hoặc <span class="code">double</span> cho các phép tính đòi hỏi sự chính
                xác tuyệt đối</strong>, đặc biệt là các phép tính liên quan đến <strong>tiền tệ</strong>.
        </p><br />
        <p>
            Thay vào đó, hãy sử dụng <strong><span class="code">BigDecimal</span></strong> để đảm bảo kết quả tính toán
            thập phân luôn chính xác.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Các kiểu <span class="code">float</span> và <span class="code">double</span> được thiết kế cho các phép tính
            khoa học và kỹ thuật. Chúng biểu diễn số dưới dạng dấu phẩy động nhị phân, điều này có nghĩa là chúng
            <strong>không thể biểu diễn chính xác các giá trị thập phân phổ biến</strong> như <span
                class="code">0.1</span>.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Sai số làm tròn 👎">
                <p>
                    Việc sử dụng <span class="code">float</span> hoặc <span class="code">double</span> cho các phép tính
                    tài chính sẽ dẫn đến các lỗi làm tròn không mong muốn và sai lệch kết quả.
                </p><br />
                <p><strong>Ví dụ kinh điển: Tính toán với tiền tệ</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Kết quả này hoàn toàn sai. Bạn đáng lẽ phải mua được 4 món hàng và còn lại 0 đồng. Lỗi này xảy ra do
                    sai số tích lũy trong các phép tính với <span class="code">double</span>.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp và Best Practices" />
        <p>Để có được câu trả lời chính xác, bạn có hai lựa chọn chính.</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Sử dụng BigDecimal (Lựa chọn tốt nhất) ✅">
                <p>
                    <span class="code">BigDecimal</span> được thiết kế đặc biệt để xử lý các phép tính thập phân với độ
                    chính xác tùy ý. Mặc dù nó chậm hơn, nhưng nó cho kết quả chính xác tuyệt đối.
                </p><br />
                <p>
                    <strong>Luôn sử dụng constructor <span class="code">BigDecimal(String)</span></strong>, không dùng
                    <span class="code">BigDecimal(double)</span> để tránh đưa sai số làm tròn vào ngay từ đầu.
                </p><br />

                <p><strong>Cách làm tốt nhất:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Sử dụng int hoặc long (Cho hiệu năng)">
                <p>
                    Nếu hiệu năng là yếu tố cực kỳ quan trọng, bạn có thể thực hiện tất cả các phép tính bằng <span
                        class="code">int</span> hoặc <span class="code">long</span> trên đơn vị tiền tệ nhỏ nhất (ví dụ:
                    xu, cent).
                </p><br />
                <p>
                    <strong>Ví dụ:</strong> Thay vì <span class="code">1.03</span> đô la, bạn sẽ làm việc với <span
                        class="code">103</span> cent. Cách này nhanh hơn nhưng đòi hỏi bạn phải tự quản lý dấu thập phân
                    một cách cẩn thận.
                </p><br />
            </BlockOpinion>
        </div>
        <p><strong>Kết luận:</strong> Quy tắc rất đơn giản:</p>
        <ul class="list-disc pl-5 mt-3 space-y-1.5">
            <li>Đối với <strong>bất kỳ phép tính nào liên quan đến tiền</strong>, hãy <strong>luôn sử dụng <span
                        class="code">BigDecimal</span></strong>.</li>
            <li>Đối với các phép tính khoa học hoặc các bài toán không yêu cầu độ chính xác tuyệt đối, <span
                    class="code">double</span> là lựa chọn phù hợp.</li>
        </ul>
    </div>
</template>
<style scoped></style>