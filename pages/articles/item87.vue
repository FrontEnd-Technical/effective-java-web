<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 87: Consider using a custom serialized form'
})

import { code_block } from '~/data/item87'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Consider using a custom serialized form" (Cân nhắc sử dụng một dạng tuần tự hóa tùy chỉnh) có
            nghĩa là khi bạn quyết định một lớp phải là <span class="code">Serializable</span>, bạn nên <strong>nghiêm
                túc xem xét việc tự định nghĩa dạng tuần tự hóa</strong> cho nó, thay vì chấp nhận dạng mặc định.
        </p><br />
        <p>
            <strong>Không chấp nhận dạng tuần tự hóa mặc định</strong> là lựa chọn an toàn nhất, vì nó giúp bạn tách
            biệt API công khai khỏi chi tiết triển khai nội bộ, mang lại sự <strong>linh hoạt và mạnh mẽ</strong> cho
            lớp của bạn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Khi bạn không cung cấp các phương thức <span class="code">writeObject</span> và <span
                class="code">readObject</span>, Java sẽ sử dụng một dạng tuần tự hóa mặc định. Dạng này về cơ bản là một
            bản ghi lại cấu trúc vật lý của đối tượng trong bộ nhớ.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề của Dạng Tuần tự hóa Mặc định 👎">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Ràng buộc vĩnh viễn với cách triển khai:</strong> Đây là vấn đề lớn nhất. Dạng mặc định
                        bị ràng buộc chặt chẽ với tất cả các trường, kể cả <span class="code">private</span>. Nếu trong
                        phiên bản tương lai, bạn đổi tên một trường <span class="code">private</span>, bạn sẽ phá vỡ
                        tính tương thích.</li>
                    <li><strong>Hiệu năng kém:</strong> Dạng mặc định có thể không hiệu quả, lưu trữ cả những dữ liệu
                        không cần thiết.</li>
                    <li><strong>Rủi ro bảo mật và lỗi:</strong> Nó để lộ cấu trúc nội bộ của lớp. Khi deserialize, các
                        quy tắc bất biến của lớp có thể bị vi phạm.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Giải pháp: Thiết kế Dạng Tuần tự hóa Tùy chỉnh ✅" />
        <p>
            Bằng cách cung cấp các phương thức <span class="code">writeObject</span> và <span
                class="code">readObject</span>, bạn có thể kiểm soát hoàn toàn quá trình này. Dạng tùy chỉnh chỉ nên
            chứa <strong>dữ liệu logic</strong> của đối tượng, không phải chi tiết triển khai vật lý.
        </p><br />

        <div class="pl-3">
            <BlockOpinion opinion="Best Practices">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Đánh dấu các trường <span class="code">transient</span>:</strong> Bất kỳ trường nào
                        không phải là một phần của dữ liệu logic của đối tượng nên được đánh dấu là <span
                            class="code">transient</span> (ví dụ: các giá trị được cache).</li>
                    <li><strong>Implement <span class="code">writeObject</span>:</strong> Để ghi các trường logic một
                        cách thủ công.</li>
                    <li><strong>Implement <span class="code">readObject</span>:</strong> Để đọc các trường logic và thực
                        hiện bất kỳ việc kiểm tra tính hợp lệ nào cần thiết.</li>
                    <li><strong>Luôn khai báo <span class="code">serialVersionUID</span>.</strong></li>
                </ol>
            </BlockOpinion>
            <BlockOpinion opinion="Ví dụ kinh điển:">
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Tại sao lại tốt hơn?</strong></p>
                <p>
                    Dạng tuần tự hóa của <span class="code">StringList</span> bây giờ chỉ là một <span
                        class="code">int</span> (kích thước) theo sau bởi các <span class="code">String</span>. Nó không
                    hề chứa thông tin về cấu trúc <span class="code">Entry</span> bên trong. Điều này có nghĩa là trong
                    tương lai, bạn có thể thay đổi hoàn toàn cách triển khai nội bộ (ví dụ: dùng <span
                        class="code">ArrayList</span>) mà vẫn có thể đọc được các đối tượng <span
                        class="code">StringList</span> cũ đã được serialize.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> <strong>Dạng tuần tự hóa mặc định chỉ nên được xem xét cho các lớp rất đơn
                giản và bạn chắc chắn rằng chúng sẽ không bao giờ thay đổi</strong>. Đối với bất kỳ lớp <span
                class="code">Serializable</span> nào khác, hãy dành thời gian để thiết kế một <strong>dạng tuần tự hóa
                tùy chỉnh</strong> chất lượng cao. Sự đầu tư này sẽ được đền đáp bằng một hệ thống linh hoạt và mạnh mẽ
            hơn rất nhiều trong dài hạn.
        </p><br />
    </div>
</template>
<style scoped></style>