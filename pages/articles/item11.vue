<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 11: Always override hashCode when you override equals'
})

import { code_block } from '~/data/item11'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Always override hashCode when you override equals" (Luôn override hashCode khi bạn override
            equals) là một trong những quy tắc <strong>bắt buộc và quan trọng nhất</strong> trong lập trình Java.
        </p><br />
        <p>
            Nói một cách đơn giản: <strong>Nếu hai đối tượng được coi là bằng nhau theo phương thức <span
                    class="code">equals()</span>, thì chúng bắt buộc phải có cùng một giá trị <span
                    class="code">hashCode()</span></strong>. Vi phạm quy tắc này sẽ làm cho các collection dựa trên cơ
            chế băm (hash-based collections) như <span class="code">HashMap</span>, <span class="code">HashSet</span>,
            và <span class="code">Hashtable</span> hoạt động sai hoàn toàn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc và Hợp đồng" />
        <div class="pl-3">
            <BlockOpinion
                opinion='Hợp đồng giữa <span class="code">equals()</span> và <span class="code">hashCode()</span>'>
                <p>Hợp đồng này rất đơn giản nhưng cực kỳ nghiêm ngặt:</p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li>Nếu <span class="code">o1.equals(o2)</span> trả về <span class="code">true</span>, thì <span
                            class="code">o1.hashCode()</span> <strong>phải</strong> bằng <span
                            class="code">o2.hashCode()</span>.</li>
                    <li>Nếu <span class="code">o1.hashCode()</span> khác <span class="code">o2.hashCode()</span>, thì
                        <span class="code">o1.equals(o2)</span> <strong>phải</strong> trả về <span
                            class="code">false</span>.
                    </li>
                    <li>Tuy nhiên, nếu <span class="code">o1.hashCode()</span> bằng <span
                            class="code">o2.hashCode()</span>, thì <span class="code">o1.equals(o2)</span> <strong>không
                            nhất thiết</strong> phải là <span class="code">true</span>. (Đây được gọi là "xung đột" -
                        collision).</li>
                </ol>
            </BlockOpinion>
            <BlockOpinion opinion="Tại sao quy tắc này lại quan trọng?">
                <p>
                    Các collection như <span class="code">HashMap</span> và <span class="code">HashSet</span> sử dụng
                    <span class="code">hashCode()</span> để tối ưu hóa việc tìm kiếm. Thay vì duyệt qua toàn bộ các phần
                    tử, chúng hoạt động theo hai bước:
                </p>
                <ol class="list-decimal pl-5 my-3 space-y-1.5">
                    <li><strong>Bước 1 (Dùng <span class="code">hashCode()</span>):</strong> Tính toán <span
                            class="code">hashCode()</span> của đối tượng để nhanh chóng xác định "xô" (bucket) nào sẽ
                        chứa đối tượng đó.</li>
                    <li><strong>Bước 2 (Dùng <span class="code">equals()</span>):</strong> Chỉ tìm kiếm và so sánh bằng
                        <span class="code">equals()</span> với các đối tượng nằm trong "xô" đó.
                    </li>
                </ol>
                <p>Hãy tưởng tượng bạn cần tìm một cuốn sách trong một thư viện khổng lồ.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1">
                    <li><span class="code">hashCode()</span> giống như việc bạn nhìn vào <strong>số hiệu trên gáy
                            sách</strong> để đi thẳng đến đúng dãy kệ.</li>
                    <li><span class="code">equals()</span> giống như việc bạn
                        <strong>đọc tựa đề và tác giả</strong> của từng cuốn sách trên dãy kệ đó để tìm ra cuốn chính
                        xác
                        bạn cần.
                    </li>
                </ul><br>
                <p>
                    Nếu bạn override <span class="code">equals()</span> để nói rằng hai cuốn sách có cùng tựa đề và tác
                    giả là một, nhưng lại
                    không override <span class="code">hashCode()</span> (dẫn đến việc chúng có số hiệu khác nhau), bạn
                    sẽ đi sai kệ và <strong>không bao
                        giờ tìm thấy</strong> cuốn sách, mặc dù nó có tồn tại trong thư viện.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Hậu quả của việc vi phạm" />
        <p>
            Nếu bạn chỉ override <span class="code">equals()</span> mà không override <span
                class="code">hashCode()</span>, bạn sẽ sử dụng phương thức <span class="code">hashCode()</span> mặc định
            từ lớp <span class="code">Object</span>, phương thức này thường trả về một giá trị dựa trên địa chỉ bộ nhớ
            của đối tượng.
        </p><br>
        <p><strong>Ví dụ về lỗi nghiêm trọng:</strong></p>
        <CodeBlock :code="code_block.method1"></CodeBlock>
        <p><strong>Sử dụng trong <span class="code">HashMap</span>:</strong></p>
        <CodeBlock :code="code_block.method4"></CodeBlock>
        <p><strong>Tại sao lại trả về <span class="code">null</span>?</strong></p>
        <ul class="list-disc pl-5 mt-3 space-y-1.5">
            <li><span class="code">number1</span> và <span class="code">number2</span> có giá trị <span
                    class="code">hashCode()</span> khác nhau
                (vì chúng là hai đối tượng khác nhau trong bộ nhớ).</li>
            <li><span class="code">map.get(number2)</span> sẽ tìm trong một "xô" sai.</li>
            <li>Nó không bao giờ có cơ hội gọi <span class="code">equals()</span> để so sánh và do đó không tìm thấy
                "Jenny".</li>
        </ul><br>
        <hr><br>
        <Heading1 title="Các Ứng dụng và Best Practices" />
        <div class="pl-3">
            <BlockOpinion opinion="Công thức viết một phương thức hashCode() tốt:">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li>Khai báo một biến kết quả <span class="code">int result</span> và khởi tạo nó với mã hash của
                        trường quan trọng đầu tiên.</li>
                    <li>Đối với mỗi trường quan trọng còn lại (<span class="code">f</span>) được sử dụng trong phương
                        thức <span class="code">equals()</span>, hãy tính toán mã hash <span class="code">c</span> cho
                        trường đó:
                        <ul class="list-disc pl-5 space-y-1">
                            <li>Nếu trường là kiểu nguyên thủy: Dùng các phương thức wrapper như <span
                                    class="code">Short.hashCode(f)</span>.</li>
                            <li>Nếu trường là đối tượng: Gọi <span class="code">f.hashCode()</span> (cẩn thận nếu <span
                                    class="code">f</span> có
                                thể là <span class="code">null</span>).</li>
                            <li>Nếu trường là mảng: Dùng <span class="code">Arrays.hashCode(f)</span>.</li>
                        </ul>
                    </li>
                    <li>Kết hợp mã hash <span class="code">c</span> vào <span class="code">result</span> bằng công thức:
                        <span class="code">result = 31 * result + c;</span>
                    </li>
                    <li>Trả về <span class="code">result</span>.</li>
                </ol><br>
                <p><strong>Tại sao lại là số 31?</strong> Vì 31 là một số nguyên tố lẻ, nó giúp tạo ra các mã hash phân
                    tán tốt hơn và có
                    thể được tối ưu hóa bởi máy ảo Java.</p><br>
                <p><strong>Ví dụ hoàn chỉnh:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="Các phương pháp hiện đại:">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Sử dụng <span class="code">Objects.hash()</span> (từ Java 7):</strong> Cách này ngắn gọn
                        và tiện lợi hơn.</li>
                </ul>
                <CodeBlock :code="code_block.method3"></CodeBlock>
                <ul class="list-disc pl-5 space-y-1.5">
                    <li><strong>Sử dụng IDE hoặc Lombok:</strong> Các IDE hiện đại (IntelliJ, Eclipse) có thể tự động
                        tạo ra các phương thức <span class="code">equals()</span> và <span
                            class="code">hashCode()</span> chính xác cho bạn. Thư viện Lombok với annotation <span
                            class="code">@EqualsAndHashCode</span> cũng làm điều tương tự, giúp giảm thiểu mã
                        boilerplate.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy biến nó thành một thói quen không thể phá vỡ. <strong>Mỗi khi bạn gõ <span
                    class="code">@Override public boolean equals</span>, ngay lập tức hãy gõ <span
                    class="code">@Override public int hashCode</span></strong>.
        </p><br />
    </div>
</template>
<style scoped></style>