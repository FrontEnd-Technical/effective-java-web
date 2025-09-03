<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 56: Write doc comments for all exposed API elements'
})

import { code_block } from '~/data/item56'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Write doc comments for all exposed API elements" (Viết bình luận tài liệu cho tất cả các thành
            phần API được công khai) có nghĩa là bạn phải <strong>cung cấp tài liệu JavaDoc đầy đủ và rõ ràng</strong>
            cho mọi lớp, interface, phương thức, và trường <span class="code">public</span> hoặc <span
                class="code">protected</span>.
        </p><br />
        <p>
            Đây là một trong những quy tắc quan trọng nhất để tạo ra các API <strong>dễ sử dụng, dễ bảo trì và mạnh
                mẽ</strong>. Một API không có tài liệu tốt gần như không thể sử dụng được.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Tài liệu JavaDoc (<span class="code">/** ... */</span>) không chỉ là một bình luận thông thường. Nó là một
            phần của "hợp đồng" mà API của bạn cam kết với người dùng. Công cụ <span class="code">javadoc</span> sẽ sử
            dụng các bình luận này để tạo ra tài liệu API chuyên nghiệp.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Tại sao phải viết JavaDoc?">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Định nghĩa Hợp đồng:</strong> JavaDoc mô tả <strong>cái gì</strong> một thành phần API
                        làm, không phải <strong>làm như thế nào</strong>. Nó giải thích các điều kiện tiên quyết
                        (preconditions), các điều kiện sau khi hoàn thành (postconditions), và các tác dụng phụ (side
                        effects).</li>
                    <li><strong>Tăng khả năng sử dụng:</strong> Một API được tài liệu hóa tốt sẽ giúp người dùng hiểu và
                        sử dụng nó một cách chính xác mà không cần phải đọc mã nguồn.</li>
                    <li><strong>Tích hợp với IDE:</strong> Các IDE hiện đại sẽ hiển thị JavaDoc dưới dạng tooltip, giúp
                        lập trình viên nhận được thông tin ngay lập tức.</li>
                </ul>

            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Best Practices và Các thẻ quan trọng" />
        <p>
            Để viết JavaDoc hiệu quả, bạn cần mô tả ngắn gọn chức năng của phương thức và sử dụng các thẻ Javadoc một
            cách nhất quán.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Mô tả Phương thức">
                <p>Bắt đầu bằng một đoạn mô tả ngắn gọn, súc tích về những gì phương thức làm.</p><br />
            </BlockOpinion>
            <BlockOpinion opinion="2. Các thẻ Javadoc cần thiết">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><span class="code">@param</span>: Mô tả từng tham số của phương thức.</li>
                    <li><span class="code">@return</span>: Mô tả giá trị trả về. Không dùng cho các phương thức có kiểu
                        trả về là <span class="code">void</span>.</li>
                    <li><span class="code">@throws</span> (hoặc <span class="code">@exception</span>): Mô tả mọi ngoại
                        lệ được ném ra, đặc biệt là các <strong>checked exception</strong>.</li>
                </ul><br />
                <p><strong>Ví dụ hoàn chỉnh:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Lưu ý:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Dùng <span class="code">{@code ...}</span>:</strong> Để bao bọc các đoạn mã hoặc từ khóa
                        Java.</li>
                    <li><strong>Dùng <span class="code">&lt;p&gt;</span>:</strong> Để tạo một đoạn văn mới.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="3. Tài liệu hóa các Điều kiện">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Điều kiện tiên quyết (<span class="code">@throws</span>):</strong> Mô tả các điều kiện
                        phải được đáp ứng trước khi phương thức được gọi.</li>
                    <li><strong>Điều kiện sau khi hoàn thành:</strong> Mô tả trạng thái của hệ thống sau khi phương thức
                        hoàn thành thành công.</li>
                    <li><strong>Tác dụng phụ:</strong> Tài liệu hóa bất kỳ sự thay đổi nào có thể quan sát được bên
                        ngoài phương thức (ví dụ: phương thức khởi động một luồng background).</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Việc viết tài liệu tốt là một phần không thể thiếu của việc phát triển phần
            mềm. Hãy <strong>coi việc viết JavaDoc cho các API công khai là một yêu cầu bắt buộc</strong>. Một API được
            tài liệu hóa cẩn thận sẽ giúp người dùng của bạn thành công và làm cho thư viện hoặc framework của bạn trở
            nên có giá trị hơn rất nhiều.
        </p><br />
    </div>
</template>
<style scoped></style>