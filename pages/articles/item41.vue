<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 41: Use marker interfaces to define types'
})

import { code_block } from '~/data/item41'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use marker interfaces to define types" (Sử dụng interface đánh dấu để định nghĩa kiểu) có nghĩa
            là bạn nên <strong>sử dụng các interface không có phương thức (marker interfaces)</strong> để "đánh dấu" các
            lớp, cho biết chúng có một thuộc tính đặc biệt nào đó.
        </p><br />
        <p>
            Đây là một giải pháp <strong>tốt hơn so với việc dùng annotation đánh dấu (marker annotations)</strong> khi
            bạn cần đảm bảo thuộc tính đó được kiểm tra tại thời điểm biên dịch.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Marker interface là một interface không khai báo bất kỳ phương thức nào. Nó chỉ tồn tại để "đánh dấu" các
            lớp implement nó.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Phân biệt Marker Interface và Marker Annotation">
                <p>Cả hai đều có thể dùng để đánh dấu, nhưng chúng có những ưu và nhược điểm khác nhau.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Marker Interface:</strong> <span class="code">public interface MyMarker { }</span></li>
                    <li><strong>Marker Annotation:</strong> <span class="code">@Retention(RetentionPolicy.RUNTIME)
                            @Target(ElementType.TYPE) public @interface MyMarker { }</span></li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="Tại sao ưu tiên Marker Interface? ✅">
                <p>Marker interface có một lợi thế lớn so với marker annotation: <strong>nó định nghĩa một kiểu
                        (type)</strong>.</p><br />
                <p>Điều này cho phép bạn:</p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Phát hiện lỗi tại thời điểm biên dịch:</strong> Bạn có thể viết các phương thức chỉ chấp
                        nhận các đối tượng đã được "đánh dấu" và trình biên dịch sẽ thực thi quy tắc này.</li>
                    <li><strong>Tạo ra các API rõ ràng hơn:</strong> Chữ ký của phương thức sẽ thể hiện rõ ràng rằng nó
                        chỉ hoạt động với các đối tượng có thuộc tính đặc biệt.</li>
                </ol><br />
                <p><strong>Ví dụ kinh điển: <span class="code">Serializable</span></strong></p><br />
                <p>
                    Interface <span class="code">java.io.Serializable</span> là một ví dụ hoàn hảo. Một lớp implement
                    <span class="code">Serializable</span> chỉ đơn giản là thông báo rằng các thực thể của nó có thể
                    được ghi vào một <span class="code">ObjectOutputStream</span>.
                </p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Ví dụ tùy chỉnh:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Khi nào thì dùng Marker Annotation?" />
        <p>
            Mặc dù marker interface được ưu tiên, marker annotation vẫn là lựa chọn tốt hơn khi việc đánh dấu cần được
            áp dụng cho <strong>bất kỳ thành phần nào ngoài lớp hoặc interface</strong> (ví dụ: các module, package,
            phương thức, trường).
        </p><br />
        <p>
            <strong>Ví dụ:</strong> Annotation <span class="code">@Test</span> của JUnit được áp dụng cho các phương
            thức, điều mà interface không thể làm được.
        </p><br />
        <p>
            <strong>Kết luận:</strong> Khi bạn cần đánh dấu các <strong>lớp hoặc interface</strong> để cho biết
            chúng có một thuộc tính đặc biệt nào đó, <strong>hãy luôn ưu tiên sử dụng marker interface</strong>. Nó cung
            cấp sự an toàn về kiểu tại thời điểm biên dịch mà marker annotation không có được. Chỉ sử dụng marker
            annotation khi bạn cần đánh dấu các thành phần khác của chương trình.
        </p><br />
    </div>
</template>
<style scoped></style>