<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 44: Favor the use of standard functional interfaces'
})

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Favor the use of standard functional interfaces" (Ưu tiên dùng các functional interface chuẩn)
            có nghĩa là bạn nên <strong>luôn sử dụng các functional interface có sẵn</strong> trong package <span
                class="code">java.util.function</span> thay vì tự tạo ra các interface mới cho cùng một mục đích.
        </p><br />
        <p>
            Việc này giúp API của bạn trở nên <strong>dễ học, dễ sử dụng hơn và tăng khả năng tương tác</strong> với các
            thành phần khác trong hệ sinh thái Java.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Java 8 giới thiệu một bộ sưu tập phong phú gồm 43 functional interface chuẩn trong package <span
                class="code">java.util.function</span>. Chúng được thiết kế để đáp ứng hầu hết các nhu cầu phổ biến khi
            làm việc với lambda và method reference.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Tại sao nên dùng các Interface chuẩn?">
                <p>
                    Việc tự tạo ra các functional interface mới (ví dụ: <span class="code">MyPredicate&lt;T&gt;</span>,
                    <span class="code">MyFunction&lt;T, R&gt;</span>) khi đã có các interface chuẩn tương đương là một ý
                    tưởng tồi.
                </p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Giảm gánh nặng học hỏi:</strong> Các lập trình viên đã quen thuộc với các interface
                        chuẩn như <span class="code">Predicate</span>, <span class="code">Function</span>, <span
                            class="code">Consumer</span>. Khi bạn sử dụng chúng, API của bạn trở nên quen thuộc và dễ
                        tiếp cận ngay lập tức.</li>
                    <li><strong>Tăng khả năng tương tác (Interoperability):</strong> Mã nguồn của bạn sẽ tích hợp liền
                        mạch với các phương thức khác sử dụng các interface chuẩn, ví dụ như các phương thức trong
                        Stream API (<span class="code">filter</span>, <span class="code">map</span>, <span
                            class="code">forEach</span>).</li>
                    <li><strong>Mã nguồn sạch sẽ hơn:</strong> Bạn không cần phải định nghĩa thêm các interface thừa,
                        giúp dự án của bạn gọn gàng hơn.</li>
                </ul>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Các Interface Chuẩn Quan trọng nhất" />
        <p>
            Bạn chỉ cần nhớ sáu interface cơ bản này, và hầu hết các interface khác là các biến thể của chúng.
        </p><br />

        <div class="overflow-x-auto">
            <table class="table-auto w-full border-collapse border border-gray-400">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="px-4 py-2 border border-gray-400">Interface</th>
                        <th class="px-4 py-2 border border-gray-400">Chữ ký phương thức</th>
                        <th class="px-4 py-2 border border-gray-400">Mục đích</th>
                        <th class="px-4 py-2 border border-gray-400">Ví dụ Lambda</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">Predicate&lt;T&gt;</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">boolean test(T t)</span></td>
                        <td class="px-4 py-2 border border-gray-400">Kiểm tra một điều kiện.</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">s -> s.isEmpty()</span></td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">Function&lt;T,R&gt;</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">R apply(T t)</span></td>
                        <td class="px-4 py-2 border border-gray-400">Chuyển đổi một đối tượng từ <span
                                class="code">T</span> sang <span class="code">R</span>.</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">s -> s.length()</span></td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">Consumer&lt;T&gt;</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">void accept(T t)</span></td>
                        <td class="px-4 py-2 border border-gray-400">Thực hiện một hành động.</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">s ->
                                System.out.println(s)</span></td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">Supplier&lt;T&gt;</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">T get()</span></td>
                        <td class="px-4 py-2 border border-gray-400">Cung cấp một đối tượng.</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">() -> new
                                ArrayList&lt;&gt;()</span></td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">UnaryOperator&lt;T&gt;</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">T apply(T t)</span></td>
                        <td class="px-4 py-2 border border-gray-400">Một <span class="code">Function</span> có kiểu vào
                            và ra giống nhau.</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">s -> s.toLowerCase()</span></td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border border-gray-400"><strong><span
                                    class="code">BinaryOperator&lt;T&gt;</span></strong></td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">T apply(T t1, T t2)</span></td>
                        <td class="px-4 py-2 border border-gray-400">Giống <span class="code">UnaryOperator</span> nhưng
                            nhận hai tham số.</td>
                        <td class="px-4 py-2 border border-gray-400"><span class="code">(a, b) -> a + b</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr><br>
        <Heading1 title="Khi nào thì nên tự tạo Functional Interface?" />
        <p>
            Chỉ có ba trường hợp hiếm hoi mà bạn nên tự tạo functional interface thay vì dùng các interface chuẩn:
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Nó có một tên chung, dễ hiểu hơn:</strong> Ví dụ, <span
                            class="code">Comparator&lt;T&gt;</span> dễ hiểu hơn nhiều so-với <span
                            class="code">ToIntBiFunction&lt;T, T&gt;</span>.</li>
                    <li><strong>Nó có một hợp đồng chặt chẽ hơn:</strong> Ví dụ, <span class="code">Comparator</span> có
                        các yêu cầu nghiêm ngặt về tính đối xứng, bắc cầu, v.v.</li>
                    <li><strong>Nó được hưởng lợi từ các <span class="code">default</span> method tùy chỉnh:</strong> Ví
                        dụ, <span class="code">Comparator</span> có các <span class="code">default</span> method rất hữu
                        ích như <span class="code">thenComparing</span>.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Trước khi tự tạo một functional interface, hãy <strong>luôn kiểm tra package
                <span class="code">java.util.function</span> trước</strong>. Gần như chắc chắn bạn sẽ tìm thấy một
            interface chuẩn phù hợp với nhu cầu của mình. Việc sử dụng các interface chuẩn là một thói quen tốt giúp mã
            nguồn của bạn trở nên chuyên nghiệp, dễ đọc và dễ tích hợp hơn.
        </p><br />
    </div>
</template>
<style scoped></style>