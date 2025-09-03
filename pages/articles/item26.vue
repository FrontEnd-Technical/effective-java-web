<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 26: Don’t use raw types'
})

import { code_block } from '~/data/item26'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Don’t use raw types" (Đừng dùng kiểu thô) có nghĩa là bạn nên <strong>luôn chỉ định tham số kiểu
                (type parameter)</strong> khi làm việc với các lớp hoặc interface generic, thay vì sử dụng chúng ở dạng
            "thô".
        </p><br />
        <p>
            Việc tuân thủ quy tắc này giúp bạn tận dụng được lợi ích lớn nhất của generics: <strong>an toàn kiểu (type
                safety) tại thời điểm biên dịch</strong>, giúp phát hiện lỗi sớm và làm cho mã nguồn rõ ràng hơn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Generics được giới thiệu từ Java 5. Trước đó, các collection như <span class="code">List</span> đều hoạt
            động với <span class="code">Object</span>.
        </p>
        <ul class="list-disc pl-5 mt-3 space-y-1.5">
            <li><strong>Raw type (Kiểu thô):</strong> Là tên của một lớp hoặc interface generic mà không có tham số kiểu
                đi kèm. Ví dụ: <span class="code">List</span> là kiểu thô của <span class="code">List&lt;E&gt;</span>.
            </li>
            <li><strong>Parameterized type (Kiểu được tham số hóa):</strong> Là khi bạn chỉ định rõ tham số kiểu. Ví dụ:
                <span class="code">List&lt;String&gt;</span>.
            </li>
        </ul>
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Kiểu thô làm mất an toàn kiểu">
                <p>
                    Khi bạn sử dụng một kiểu thô như <span class="code">List</span>, bạn đang nói với trình biên dịch:
                    "Hãy bỏ qua hệ thống kiểm tra kiểu generic". Điều này có nghĩa là:
                </p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Mất an toàn kiểu tại thời điểm biên dịch:</strong> Trình biên dịch sẽ cho phép bạn thêm
                        bất kỳ loại đối tượng nào vào collection, ngay cả khi điều đó là sai.</li>
                    <li><strong>Rủi ro lỗi <span class="code">ClassCastException</span> lúc chạy:</strong> Lỗi sẽ không
                        được phát hiện cho đến khi bạn cố gắng lấy và sử dụng một phần tử từ collection.</li>
                </ol><br />
                <p><strong>Ví dụ kinh điển về sự nguy hiểm của kiểu thô:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="Giải pháp: Luôn dùng Kiểu được tham số hóa ✅">
                <p>Bằng cách chỉ định tham số kiểu, bạn giao cho trình biên dịch nhiệm vụ đảm bảo an toàn kiểu.</p>
                <br />
                <p><strong>Mã nguồn an toàn và rõ ràng hơn:</strong></p>

                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Quy tắc vàng là: <strong>Không bao giờ sử dụng kiểu thô trong mã nguồn mới</strong>.</p>
        <div class="pl-3">
            <BlockOpinion opinion="Khi nào thì dùng Kiểu thô?">
                <p>Chỉ có hai trường hợp ngoại lệ nhỏ mà bạn phải sử dụng kiểu thô, chủ yếu vì lý do tương thích ngược:
                </p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Trong các class literal:</strong> Bạn phải viết <span class="code">List.class</span>,
                        không được viết <span class="code">List&lt;String&gt;.class</span>.</li>
                    <li><strong>Với toán tử <span class="code">instanceof</span>:</strong> Bạn phải viết <span
                            class="code">if (o instanceof Set)</span>, bạn có thể kiểm tra thêm với wildcard: <br><span
                            class="code">if (o instanceof Set&lt;?&gt;)</span>.</li>
                </ol>
            </BlockOpinion><br>
            <p><strong>Phân biệt <span class="code">List</span> vs <span class="code">List&lt;Object&gt;</span> vs List
                    <span class="code">&lt;?&gt;</span></strong></p>
            <ul class="list-disc pl-5 mt-3 space-y-1.5">
                <li><span class="code">List</span> (Kiểu thô): Bỏ qua hoàn toàn kiểm tra kiểu. Rất không an toàn.
                </li>
                <li><span class="code">List&lt;Object&gt;</span> (Kiểu được tham số hóa): An toàn. Nó nói rõ rằng
                    "đây là một danh sách có thể chứa bất kỳ loại đối tượng nào".</li>
                <li><span class="code">List&lt;?&gt;</span> (Unbounded Wildcard Type): An toàn. Nó đại diện cho "một
                    danh sách của một kiểu không xác định". Bạn không thể thêm bất cứ thứ gì (ngoại trừ <span
                        class="code">null</span>) vào <span class="code">List&lt;?&gt;</span>.</li>
            </ul>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Kiểu thô chỉ tồn tại để tương thích với mã nguồn cũ trước khi có generics.
            Trong mọi mã nguồn mới, hãy <strong>luôn sử dụng các kiểu được tham số hóa</strong> (<span
                class="code">List&lt;String&gt;</span>, <span class="code">Map&lt;Integer, User&gt;</span>). Điều này
            giúp mã nguồn của bạn an toàn hơn, dễ đọc hơn và tận dụng được toàn bộ sức mạnh của hệ thống kiểu Java.
        </p><br />
    </div>
</template>
<style scoped></style>