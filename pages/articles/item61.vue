<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 61: Prefer primitive types to boxed primitives'
})

import { code_block } from '~/data/item61'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer primitive types to boxed primitives" (Ưu tiên các kiểu nguyên thủy thay vì các kiểu
            nguyên thủy được bao bọc) có nghĩa là bạn nên <strong>luôn sử dụng các kiểu nguyên thủy (<span
                    class="code">int</span>, <span class="code">double</span>, <span
                    class="code">boolean</span>)</strong> thay vì các lớp bao bọc (wrapper classes) của chúng (<span
                class="code">Integer</span>, <span class="code">Double</span>, <span class="code">Boolean</span>), trừ
            khi bạn có lý do bắt buộc phải dùng lớp bao bọc.
        </p><br />
        <p>
            Việc này giúp mã nguồn của bạn <strong>đơn giản hơn, nhanh hơn và an toàn hơn</strong> trước các lỗi <span
                class="code">NullPointerException</span>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Java phân biệt rõ ràng giữa các kiểu nguyên thủy và các lớp bao bọc của chúng. Mặc dù cơ chế
            <strong>autoboxing/unboxing</strong> giúp việc chuyển đổi giữa chúng trở nên tiện lợi, việc lạm dụng các lớp
            bao bọc có thể dẫn đến những vấn đề nghiêm trọng.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề của các Kiểu được bao bọc (Boxed Primitives) 👎">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Hiệu năng kém:</strong> Các kiểu được bao bọc là các đối tượng. Việc tạo và thu hồi
                        chúng tốn kém hơn nhiều so với các kiểu nguyên thủy.</li>
                    <li><strong>Nguy cơ <span class="code">NullPointerException</span>:</strong> Một biến kiểu bao bọc
                        có thể có giá trị <span class="code">null</span>. Khi Java cố gắng tự động "mở hộp" (unbox) một
                        biến <span class="code">null</span>, nó sẽ ném ra <span
                            class="code">NullPointerException</span>.</li>
                    <li><strong>Hành vi khó lường với <span class="code">==</span>:</strong> Toán tử <span
                            class="code">==</span> trên các kiểu được bao bọc sẽ so sánh tham chiếu của đối tượng, không
                        phải giá trị.</li>
                </ol><br />
                <p><strong>Ví dụ 1: Vấn đề hiệu năng</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Ví dụ 2: Nguy cơ <span class="code">NullPointerException</span></strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Quy tắc vàng là: <strong>Khi có lựa chọn, hãy luôn ưu tiên các kiểu nguyên thủy.</strong></p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Khi nào thì BẮT BUỘC phải dùng Kiểu được bao bọc? ✅">
                <p>Chỉ có ba trường hợp chính mà bạn phải sử dụng các lớp bao bọc:</p><br />

                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Làm phần tử trong Collection:</strong> Các collection của Java (như <span
                            class="code">List</span>, <span class="code">Set</span>, <span class="code">Map</span>) chỉ
                        có thể chứa các đối tượng. Bạn không thể tạo <span class="code">List&lt;int&gt;</span>, vì vậy
                        bạn phải dùng <span class="code">List&lt;Integer&gt;</span>.</li>
                    <li><strong>Làm tham số kiểu trong Generics:</strong> Tương tự như trên, bạn không thể sử dụng kiểu
                        nguyên thủy làm tham số kiểu.</li>
                    <li><strong>Khi cần giá trị <span class="code">null</span>:</strong> Nếu một trường hoặc một giá trị
                        trả về cần biểu diễn trạng thái "không có giá trị" bằng <span class="code">null</span>, bạn phải
                        sử dụng kiểu được bao bọc.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy sử dụng các kiểu nguyên thủy (<span class="code">int</span>, <span
                class="code">long</span>, <span class="code">double</span>, <span class="code">boolean</span>, v.v.) làm
            <strong>lựa chọn mặc định</strong> cho các biến, trường, tham số và giá trị trả về. Chúng đơn giản, nhanh và
            an toàn. Chỉ sử dụng các lớp bao bọc (<span class="code">Integer</span>, <span class="code">Long</span>,
            <span class="code">Double</span>, <span class="code">Boolean</span>, v.v.) khi <strong>bối cảnh yêu
                cầu</strong> hoặc khi bạn <strong>cố ý cần đến khả năng có giá trị <span
                    class="code">null</span></strong>.
        </p><br />
    </div>
</template>
<style scoped></style>