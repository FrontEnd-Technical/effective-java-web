<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 55: Return optionals judiciously'
})

import { code_block } from '~/data/item55'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Return optionals judiciously" (Sử dụng Optional làm kiểu trả về một cách thận trọng) có nghĩa là
            bạn nên <strong>sử dụng <span class="code">Optional&lt;T&gt;</span> như một kiểu trả về</strong> cho các
            phương thức mà trong một số trường hợp có thể không có giá trị nào để trả về, nhưng <strong>tránh lạm dụng
                nó</strong> trong các ngữ cảnh khác.
        </p><br />
        <p>
            <span class="code">Optional</span> là một công cụ mạnh mẽ để thiết kế các API rõ ràng hơn và ngăn chặn lỗi
            <span class="code">NullPointerException</span>, nhưng nó không phải là giải pháp thay thế cho mọi trường hợp
            dùng <span class="code">null</span>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            <span class="code">Optional&lt;T&gt;</span> là một đối tượng container bất biến, có thể chứa hoặc không chứa
            một giá trị <span class="code">T</span> khác <span class="code">null</span>. Nó cung cấp một cách rõ ràng để
            biểu diễn sự vắng mặt của một giá trị.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích: Một sự thay thế tốt hơn cho null làm kiểu trả về 👍">
                <p>
                    Trước <span class="code">Optional</span>, một phương thức không tìm thấy kết quả thường phải trả về
                    <span class="code">null</span> hoặc ném ra một ngoại lệ. <span class="code">Optional</span> cung cấp
                    một giải pháp thứ ba, buộc người dùng API phải chủ động suy nghĩ về trường hợp không có giá trị trả
                    về.
                </p><br />
                <p><strong>Ví dụ kinh điển: Tìm phần tử lớn nhất trong collection</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Khi nào thì KHÔNG nên dùng Optional? 👎" />
        <p>Việc lạm dụng <span class="code">Optional</span> có thể làm cho mã nguồn trở nên cồng kềnh và phức tạp một
            cách không cần thiết.</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Không bao giờ trả về Optional của Collection hoặc Mảng">
                <p>
                    Trả về một <span class="code">Optional&lt;List&lt;T&gt;&gt;</span> là một sự phức tạp không cần
                    thiết. Theo nguyên tắc "Return empty collections or arrays, not nulls", bạn nên <strong>luôn trả về
                        một <span class="code">List</span> rỗng</strong> thay thế.
                </p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Không bao giờ dùng Optional làm tham số phương thức hoặc trường">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Tham số phương thức:</strong> Nếu bạn muốn một tham số là tùy chọn, hãy sử dụng
                        <strong>nạp chồng (overloading)</strong>.
                    </li>
                    <li><strong>Trường của lớp:</strong> Một trường <span class="code">Optional&lt;T&gt;</span> gần như
                        luôn là một dấu hiệu xấu. Nó làm cho lớp của bạn có thêm một lớp bao bọc không cần thiết.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="3. Không dùng Optional cho các kiểu boxing">
                <p>
                    Đừng bao giờ dùng <span class="code">Optional&lt;Integer&gt;</span>, <span
                        class="code">Optional&lt;Long&gt;</span>, <span class="code">Optional&lt;Double&gt;</span>. Thay
                    vào đó, hãy sử dụng các phiên bản <span class="code">Optional</span> chuyên dụng cho kiểu nguyên
                    thủy để tránh chi phí boxing: <span class="code">OptionalInt</span>, <span
                        class="code">OptionalLong</span>, <span class="code">OptionalDouble</span>.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy coi <span class="code">Optional&lt;T&gt;</span> là một công cụ có mục đích
            rất cụ thể: <strong>dùng làm kiểu trả về cho các phương thức có thể không tìm thấy giá trị để trả
                về</strong>. Việc sử dụng nó một cách có chọn lọc sẽ giúp bạn thiết kế các API rõ ràng và an toàn hơn.
            Đừng cố gắng sử dụng nó như một sự thay thế toàn năng cho <span class="code">null</span>.
        </p><br />
    </div>
</template>
<style scoped></style>