<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 43: Prefer method references to lambdas'
})

import { code_block } from '~/data/item43'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer method references to lambdas" (Ưu tiên method reference thay vì lambda) có nghĩa là khi
            một biểu thức lambda chỉ đơn giản là gọi một phương thức đã tồn tại, bạn nên <strong>luôn sử dụng method
                reference</strong> để thay thế.
        </p><br />
        <p>
            Method reference giúp mã nguồn trở nên <strong>ngắn gọn hơn, rõ ràng hơn và dễ đọc hơn</strong> bằng cách
            loại bỏ các tham số và cú pháp thừa.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Method reference, được giới thiệu từ Java 8, là một cách viết tắt đặc biệt cho các biểu thức lambda. Nếu
            lambda của bạn chỉ làm một việc duy nhất là gọi một phương thức, method reference cho phép bạn tham chiếu
            trực tiếp đến phương thức đó bằng tên.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Lambda đôi khi vẫn còn dài dòng">
                <p>
                    Mặc dù lambda đã rất ngắn gọn so-với lớp nặc danh, đôi khi chúng vẫn chứa những tham số lặp lại
                    không cần thiết, làm che khuất ý định thực sự.
                </p><br />
                <p><strong>Ví dụ với Lambda:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Ở đây, <span class="code">count</span> và <span class="code">incr</span> là các tham số boilerplate
                    không thêm nhiều giá trị. Logic cốt lõi là phép cộng.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: Method Reference ✅" />
        <p>
            Method reference loại bỏ hoàn toàn các tham số này, chỉ để lại tên của phương thức thực hiện công việc. Điều
            này làm cho mã nguồn trở nên rõ ràng và tập trung vào hành động chính.
        </p><br />

        <p><strong>Cách làm tốt nhất và hiện đại nhất:</strong></p>
        <CodeBlock :code="code_block.method2"></CodeBlock>
        <p>
            Mã này dễ đọc hơn nhiều: "hợp nhất giá trị bằng cách dùng phép cộng <span class="code">Integer.sum</span>".
            Trình biên dịch sẽ tự động hiểu cách ánh xạ các tham số của lambda vào phương thức <span
                class="code">sum</span>.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Các loại Method Reference">
                <p>Có năm loại method reference chính:</p><br />
                <div class="overflow-x-auto">
                    <table class="table-auto w-full border-collapse border border-gray-400">
                        <thead class="bg-gray-200">
                            <tr>
                                <th class="px-4 py-2 border border-gray-400">Loại</th>
                                <th class="px-4 py-2 border border-gray-400">Ví dụ Lambda</th>
                                <th class="px-4 py-2 border border-gray-400">Ví dụ Method Reference</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2 border border-gray-400"><strong>Static</strong></td>
                                <td class="px-4 py-2 border border-gray-400"><span class="code">(x) ->
                                        String.valueOf(x)</span></td>
                                <td class="px-4 py-2 border border-gray-400"><span class="code">String::valueOf</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 border border-gray-400"><strong>Bound</strong> (đến một đối tượng
                                    cụ thể)</td>
                                <td class="px-4 py-2 border border-gray-400"><span class="code">() ->
                                        instant.isAfter(Instant.now())</span></td>
                                <td class="px-4 py-2 border border-gray-400"><span class="code">instant::isAfter</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 border border-gray-400"><strong>Unbound</strong> (đến một đối tượng
                                    bất kỳ)</td>
                                <td class="px-4 py-2 border border-gray-400"><span class="code">(s1, s2) ->
                                        s1.compareToIgnoreCase(s2)</span></td>
                                <td class="px-4 py-2 border border-gray-400"><span
                                        class="code">String::compareToIgnoreCase</span></td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 border border-gray-400"><strong>Constructor</strong></td>
                                <td class="px-4 py-2 border border-gray-400"><span class="code">() -> new
                                        TreeMap&lt;K,V&gt;()</span></td>
                                <td class="px-4 py-2 border border-gray-400"><span
                                        class="code">TreeMap&lt;K,V&gt;::new</span></td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 border border-gray-400"><strong>Array Constructor</strong></td>
                                <td class="px-4 py-2 border border-gray-400"><span class="code">(len) -> new
                                        int[len]</span></td>
                                <td class="px-4 py-2 border border-gray-400"><span class="code">int[]::new</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> 🚀 Bất cứ khi nào lambda của bạn chỉ đơn giản là <span class="code">(args) ->
                someMethod(args)</span>, hãy <strong>thay thế nó bằng một method reference</strong> <span
                class="code">SomeClass::someMethod</span>. Đây là một thói quen tốt giúp mã nguồn của bạn trở nên sạch
            sẽ, biểu cảm và chuyên nghiệp hơn. Nếu IDE của bạn gợi ý chuyển đổi một lambda thành method reference, hãy
            luôn chấp nhận nó.
        </p><br />
    </div>
</template>
<style scoped></style>