<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 68: Adhere to generally accepted naming conventions'
})

import { code_block } from '~/data/item68'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Adhere to generally accepted naming conventions" (Tuân thủ các quy ước đặt tên được chấp nhận
            rộng rãi) có nghĩa là bạn nên <strong>luôn tuân theo các quy ước đặt tên chuẩn của cộng đồng Java</strong>.
        </p><br />
        <p>
            Việc này giúp mã nguồn của bạn trở nên <strong>dễ đọc, dễ hiểu và quen thuộc</strong> đối với các lập trình
            viên khác, làm cho việc bảo trì và hợp tác trở nên dễ dàng hơn rất nhiều.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Java có một bộ quy ước đặt tên rất vững chắc đã được hình thành qua nhiều năm. Việc học và áp dụng chúng là
            một trong những điều cơ bản nhất để viết mã nguồn chuyên nghiệp.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Tại sao phải Tuân thủ?">
                <p>
                    Việc tuân thủ các quy ước đặt tên mang lại lợi ích to lớn với chi phí bỏ ra rất nhỏ. Một mã nguồn
                    tuân thủ quy ước sẽ:
                </p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Dễ đọc hơn:</strong> Giống như đọc một bài văn được viết đúng ngữ pháp, mã nguồn sẽ trở
                        nên trong sáng và dễ hiểu.</li>
                    <li><strong>Giảm sự ngạc nhiên:</strong> Các lập trình viên khác sẽ không phải đoán ý nghĩa của một
                        cái tên lạ.</li>
                    <li><strong>Tăng khả năng tái sử dụng:</strong> Mã nguồn dễ hiểu sẽ dễ được tái sử dụng hơn.</li>
                    <li><strong>Tích hợp tốt với các công cụ:</strong> Nhiều công cụ và IDE dựa vào các quy ước này để
                        hoạt động.</li>
                </ul><br />

            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Các Quy ước Đặt tên Quan trọng nhất" />
        <div class="overflow-x-auto">
            <table class="table-auto w-full border-collapse border border-gray-400">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="px-4 py-2 border border-gray-400">Thành phần</th>
                        <th class="px-4 py-2 border border-gray-400">Quy ước</th>
                        <th class="px-4 py-2 border border-gray-400">Ví dụ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong>Package</strong></td>
                        <td class="px-4 py-2 border border-gray-400">Chữ thường, nối nhau. Thường bắt đầu bằng tên miền
                            đảo ngược.</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">com.google.common</span>, <span
                                class="code">org.hibernate</span></td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong>Class/Interface</strong></td>
                        <td class="px-4 py-2 border border-gray-400"><strong>UpperCamelCase</strong> (PascalCase). Là
                            danh từ.</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">String</span>, <span
                                class="code">ArrayList</span>, <span class="code">HttpRequest</span></td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong>Enum</strong></td>
                        <td class="px-4 py-2 border border-gray-400">Giống như Class/Interface.</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">LogLevel</span>, <span
                                class="code">DayOfWeek</span></td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong>Method</strong></td>
                        <td class="px-4 py-2 border border-gray-400"><strong>lowerCamelCase</strong>. Thường là động từ.
                        </td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">sendMessage()</span>, <span
                                class="code">calculateTotal()</span></td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong>Variable</strong></td>
                        <td class="px-4 py-2 border border-gray-400"><strong>lowerCamelCase</strong>. Tên ngắn gọn nhưng
                            có ý nghĩa.</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">firstName</span>, <span
                                class="code">userList</span>, <span class="code">i</span> (biến lặp)</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong>Constant</strong> (<span
                                class="code">static final</span>)</td>
                        <td class="px-4 py-2 border border-gray-400"><strong>CONSTANT_CASE</strong> (chữ hoa, gạch
                            dưới).</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">MAX_CONNECTIONS</span>, <span
                                class="code">DEFAULT_TIMEOUT</span></td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong>Type Parameter</strong> (Generics)</td>
                        <td class="px-4 py-2 border border-gray-400">Một chữ cái in hoa. <span class="code">T</span> cho
                            kiểu, <span class="code">E</span> cho phần tử, <span class="code">K</span> cho key, <span
                                class="code">V</span> cho value.</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">&lt;T&gt;</span>, <span
                                class="code">&lt;E&gt;</span>, <span class="code">&lt;K, V&gt;</span></td>
                    </tr>
                </tbody>
            </table>
        </div><br />
        <div class="pl-3">
            <BlockOpinion opinion="Ví dụ Thực tế">
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Việc tuân thủ các quy ước đặt tên là một trong những thói quen đơn giản nhưng
            có tác động lớn nhất mà bạn có thể áp dụng. Hãy học thuộc chúng và sử dụng một cách nhất quán. Điều này sẽ
            ngay lập tức nâng cao chất lượng và tính chuyên nghiệp cho mã nguồn của bạn.
        </p><br />
    </div>
</template>
<style scoped></style>