<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 32: Combine generics and varargs judiciously'
})

import { code_block } from '~/data/item32'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Combine generics and varargs judiciously" (Kết hợp generics và varargs một cách thận trọng) cảnh
            báo rằng việc sử dụng <strong>varargs (<span class="code">...</span>) với các tham số generic (như <span
                    class="code">T...</span>) có thể gây ra các vấn đề về an toàn kiểu</strong> do sự tương tác không
            hoàn hảo giữa hai tính năng này.
        </p><br />
        <p>
            Quy tắc chung là hãy <strong>cẩn thận khi viết các phương thức có tham số varargs generic</strong> và sử
            dụng annotation <strong><span class="code">@SafeVarargs</span></strong> để "im lặng" các cảnh báo sau khi
            bạn đã chứng minh được rằng phương thức đó an toàn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Sự kết hợp 'bị rò rỉ' 💧">
                <p>
                    Cơ chế varargs trong Java thực chất chỉ là một lớp "đường cú pháp" (syntactic sugar) cho việc tạo ra
                    một <strong>mảng</strong>. Ví dụ, một lời gọi đến phương thức <span class="code">doSomething(arg1,
                        arg2)</span> với chữ ký <span class="code">void doSomething(T... args)</span> sẽ được trình biên
                    dịch chuyển thành việc tạo một mảng <span class="code">new T[] { arg1, arg2 }</span>.
                </p><br />
                <p>
                    Vấn đề cốt lõi là <strong>mảng và generics không hoạt động tốt cùng nhau</strong>. Sự không tương
                    thích này tạo ra một "kẽ hở" trong hệ thống kiểu, có thể dẫn đến <strong>heap pollution</strong> (ô
                    nhiễm heap).
                </p><br />
                <p>
                    <strong>Heap pollution</strong> là tình trạng khi một biến của một kiểu được tham số hóa (ví dụ:
                    <span class="code">List&lt;String&gt;</span>) lại trỏ đến một đối tượng của một kiểu tham số hóa
                    khác (ví dụ: <span class="code">List&lt;Integer&gt;</span>). Điều này có thể gây ra lỗi <span
                        class="code">ClassCastException</span> ở một nơi nào đó rất xa vị trí gây ra lỗi gốc.
                </p><br />
                <p><strong>Ví dụ về phương thức không an toàn:</strong></p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>
            Mặc dù có rủi ro, các phương thức varargs generic vẫn rất hữu ích. Do đó, bạn cần biết cách sử dụng chúng
            một cách an toàn.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Sử dụng @SafeVarargs cho các phương thức An toàn">
                <p>
                    Java cung cấp annotation <span class="code">@SafeVarargs</span> (từ Java 7) để người viết phương
                    thức có thể khẳng định với người dùng rằng "phương thức này an toàn".
                </p><br />
                <p>Một phương thức varargs generic được coi là <strong>an toàn</strong> nếu:</p><br />
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li>Nó <strong>không lưu trữ</strong> bất kỳ giá trị nào vào mảng varargs.</li>
                    <li>Nó <strong>không để lộ</strong> tham chiếu đến mảng varargs ra bên ngoài (ví dụ: trả về nó).
                    </li>
                </ol><br />
                <p><strong>Ví dụ: <span class="code">Arrays.asList</span></strong></p><br />
                <p>
                    Phương thức <span class="code">Arrays.asList(T... a)</span> là một ví dụ hoàn hảo. Nó chỉ đọc các
                    phần tử từ mảng <span class="code">a</span> để tạo ra một <span class="code">List</span>. Nó hoàn
                    toàn an toàn và được đánh dấu bằng <span class="code">@SafeVarargs</span>.
                </p><br />
                <p><strong>✅ Cách triển khai an toàn:</strong></p><br />
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Lựa chọn thay thế: Dùng List">
                <p>
                    Nếu một phương thức không an toàn (ví dụ: nó cần lưu trữ dữ liệu vào mảng varargs), bạn có một lựa
                    chọn thay thế hoàn toàn an toàn: <strong>thay thế tham số <span class="code">T...</span> bằng <span
                            class="code">List&lt;T&gt;</span></strong>.
                </p><br />
                <p><strong>❌ Không an toàn:</strong> <span class="code">static &lt;T&gt; T[] toArray(T... args)</span>
                </p><br />
                <p><strong>✅ An toàn:</strong> <span class="code">static &lt;T&gt; List&lt;T&gt; toList(T...
                        args)</span></p><br />
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> ☣️ Hãy nhận thức được những rủi ro khi kết hợp generics và varargs. Đối với các
            phương thức varargs generic mà bạn viết, hãy <strong>chứng minh rằng chúng an toàn</strong> (không ghi và
            không để lộ mảng) và sau đó <strong>thêm annotation <span class="code">@SafeVarargs</span></strong>. Nếu một
            phương thức không thể được chứng minh là an toàn, hãy cân nhắc sử dụng một tham số <span
                class="code">List&lt;T&gt;</span> để thay thế.
        </p><br />
    </div>
</template>
<style scoped></style>