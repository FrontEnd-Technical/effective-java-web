<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 86: Implement Serializable with great caution'
})

import { code_block } from '~/data/item86'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Implement Serializable with great caution" (Implement Serializable với sự thận trọng cao độ) có
            nghĩa là việc quyết định cho một lớp implement interface <span class="code">Serializable</span> là một
            <strong>cam kết lớn và đầy rủi ro</strong>.
        </p><br />
        <p>
            Nếu bạn bắt buộc phải làm vậy, bạn phải <strong>thiết kế một "dạng tuần tự hóa tùy chỉnh" (custom serialized
                form)</strong> một cách cẩn thận, thay vì chấp nhận dạng mặc định.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan: Cái giá của việc implements Serializable" />
        <p>
            Việc thêm <span class="code">implements Serializable</span> vào một lớp nghe có vẻ đơn giản, nhưng nó có
            những hậu quả lâu dài và nghiêm trọng:
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Giảm sự linh hoạt:</strong> Khi một lớp đã được công khai và là <span
                            class="code">Serializable</span>, <strong>dạng tuần tự hóa của nó sẽ trở thành một phần của
                            API công khai</strong>. Bạn không thể dễ dàng thay đổi cấu trúc bên trong của lớp mà không
                        phá vỡ tính tương thích.</li>
                    <li><strong>Tăng nguy cơ lỗi và lỗ hổng bảo mật:</strong> <span class="code">Serializable</span>
                        cung cấp một "constructor ẩn" (<span class="code">readObject</span>), tạo ra một bề mặt tấn công
                        lớn.</li>
                    <li><strong>Tăng gánh nặng kiểm thử:</strong> Mỗi khi bạn thay đổi lớp, bạn phải kiểm tra xem việc
                        serialize và deserialize có còn hoạt động đúng hay không.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Các Best Practices khi phải Implement Serializable" />
        <p>Nếu bạn không thể tránh được việc implement <span class="code">Serializable</span>, hãy tuân thủ các quy tắc
            sau để giảm thiểu rủi ro.</p>
        <div class="pl-3">
            <BlockOpinion opinion="1. Sử dụng một Dạng Tuần tự hóa Tùy chỉnh ✅">
                <p><strong>Đừng bao giờ chấp nhận dạng tuần tự hóa mặc định.</strong> Thay vào đó, hãy định nghĩa một
                    dạng tùy chỉnh bằng cách:</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Khai báo một <span class="code">serialVersionUID</span> tường minh.</strong></li>
                    <li><strong>Triển khai các phương thức <span class="code">writeObject</span> và <span
                                class="code">readObject</span></strong> để kiểm soát hoàn toàn những gì được ghi và đọc.
                    </li>
                </ul>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Bảo vệ các Quy tắc Bất biến trong readObject">
                <p>
                    Hãy coi <span class="code">readObject</span> như một <strong>constructor công khai</strong>. Bên
                    trong nó, bạn phải <strong>kiểm tra tính hợp lệ của dữ liệu</strong> và <strong>tạo các bản sao
                        phòng thủ</strong> (Item 50) cho các trường khả biến, giống hệt như bạn làm trong constructor.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="3. Sử dụng readResolve cho các Singleton">
                <p>
                    Nếu một lớp Singleton implement <span class="code">Serializable</span>, bạn <strong>bắt buộc phải
                        cung cấp một phương thức <span class="code">readResolve</span></strong> để trả về thực thể duy
                    nhất (<span class="code">INSTANCE</span>). Nếu không, mỗi lần deserialize, một thực thể mới sẽ được
                    tạo ra, phá vỡ hoàn toàn mẫu Singleton.
                </p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Việc implement <span class="code">Serializable</span> là một quyết định thiết
            kế quan trọng và nguy hiểm. Nếu bạn phải làm vậy, <strong>hãy luôn cung cấp một dạng tuần tự hóa tùy
                chỉnh</strong> với <span class="code">serialVersionUID</span>. Hãy viết các phương thức <span
                class="code">writeObject</span> và <span class="code">readObject</span> một cách cẩn thận, và coi <span
                class="code">readObject</span> như một constructor cần được bảo vệ kỹ lưỡng.
        </p><br />
    </div>
</template>
<style scoped></style>