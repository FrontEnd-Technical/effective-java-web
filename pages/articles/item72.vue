<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 72: Favor the use of standard exceptions'
})

import { code_block } from '~/data/item72'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Favor the use of standard exceptions" (Ưu tiên dùng các exception chuẩn) có nghĩa là bạn nên
            <strong>tái sử dụng các lớp exception đã có sẵn trong thư viện chuẩn của Java</strong> thay vì tự tạo ra các
            exception mới cho những tình huống phổ biến.
        </p><br />
        <p>
            Việc này giúp API của bạn trở nên <strong>dễ học, dễ sử dụng hơn</strong> và làm cho mã nguồn của bạn quen
            thuộc hơn với các lập trình viên khác.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Thư viện chuẩn của Java cung cấp một bộ sưu tập phong phú các exception được thiết kế để xử lý hầu hết các
            tình huống lỗi phổ biến. Việc tạo ra một exception mới khi đã có một exception chuẩn phù hợp là một việc làm
            không cần thiết.
        </p><br />
        <div class.pl-3>
            <BlockOpinion opinion="Lợi ích của việc Tái sử dụng Exception chuẩn 📚">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Dễ học và dễ sử dụng:</strong> Các lập trình viên đã quen thuộc với các exception chuẩn
                        như <span class="code">IllegalArgumentException</span>. Khi họ thấy chúng trong API của bạn, họ
                        ngay lập tức hiểu được ý nghĩa.</li>
                    <li><strong>Tăng tính dễ đọc:</strong> Mã nguồn sử dụng các exception chuẩn trở nên dễ hiểu hơn vì
                        nó tuân theo các quy ước đã được cộng đồng chấp nhận.</li>
                    <li><strong>Giảm số lượng lớp:</strong> Bạn không cần phải tạo và bảo trì các lớp exception tùy
                        chỉnh không cần thiết.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Các Exception Chuẩn hay được Tái sử dụng nhất" />
        <p>Dưới đây là danh sách các runtime exception phổ biến nhất mà bạn nên tái sử dụng.</p><br />
        <div class="overflow-x-auto">
            <table class="table-auto w-full border-collapse border border-gray-400">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="px-4 py-2 border border-gray-400">Exception</th>
                        <th class="px-4 py-2 border border-gray-400">Khi nào nên ném ra</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">IllegalArgumentException</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400">Khi người gọi truyền vào một tham số có giá trị
                            không hợp lệ (ví dụ: `age` là số âm).</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">IllegalStateException</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400">Khi một lời gọi phương thức không hợp lệ do trạng
                            thái của đối tượng (ví dụ: gọi `start()` trên một service đã được khởi động).</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">NullPointerException</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400">Khi một tham số không được phép là `null`.</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">IndexOutOfBoundsException</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400">Khi một chỉ mục của mảng, list, hoặc chuỗi nằm
                            ngoài phạm vi hợp lệ.</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">ConcurrentModificationException</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400">Khi phát hiện một sự thay đổi không được phép trên
                            một đối tượng trong môi trường đa luồng.</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">UnsupportedOperationException</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400">Khi một đối tượng không hỗ trợ một phương thức được
                            yêu cầu (ví dụ: gọi `add()` trên một `List` không thể thay đổi).</td>
                    </tr>
                </tbody>
            </table>
        </div><br />
        <div class="pl-3">
            <BlockOpinion opinion="Ví dụ Thực tế">
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="Khi nào thì nên tự tạo Exception?">
                <p>
                    Chỉ tạo exception tùy chỉnh khi bạn cần cung cấp thêm thông tin cho việc phục hồi lỗi. Ví dụ, một
                    <span class="code">InsufficientFundsException</span> có thể có các phương thức để lấy số tiền thiếu
                    hụt. Nếu không, hãy luôn ưu tiên các exception chuẩn.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Trước khi tự tạo một exception mới, hãy <strong>luôn kiểm tra xem thư viện
                chuẩn của Java đã có exception nào phù hợp hay chưa</strong>. Việc tái sử dụng các exception chuẩn sẽ
            làm cho API của bạn trở nên tốt hơn và dễ hiểu hơn đối với cộng đồng.
        </p><br />
    </div>
</template>
<style scoped></style>