<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 14: Consider implementing Comparable'
})

import { code_block } from '~/data/item14'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Consider implementing Comparable" (Cân nhắc implement interface Comparable) có nghĩa là bạn nên
            làm cho các lớp giá trị (value classes) của mình có khả năng <strong>so sánh và sắp xếp một cách tự
                nhiên</strong> bằng cách implement interface <span class="code">Comparable&lt;T&gt;</span>.
        </p><br />
        <p>
            Việc này là một best practice cực kỳ hữu ích, vì nó giúp các đối tượng của bạn tích hợp liền mạch với các
            thuật toán và các cấu trúc dữ liệu yêu cầu thứ tự của Java.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion='<span class="code">Comparable</span> là gì?'>
                <p>
                    <span class="code">Comparable&lt;T&gt;</span> là một interface trong Java chỉ có một phương thức duy
                    nhất: <span class="code">int compareTo(T o)</span>. Phương thức này định nghĩa <strong>thứ tự tự
                        nhiên (natural ordering)</strong> của các đối tượng.
                </p><br />
                <p>Nó trả về:</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Số âm:</strong> nếu đối tượng hiện tại (<span class="code">this</span>) nhỏ hơn đối
                        tượng <span class="code">o</span>.</li>
                    <li><strong>Số không:</strong> nếu đối tượng hiện tại bằng đối tượng <span class="code">o</span>.
                    </li>
                    <li><strong>Số dương:</strong> nếu đối tượng hiện tại lớn hơn đối tượng <span class="code">o</span>.
                    </li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="Tại sao lại quan trọng?">
                <p>Khi lớp của bạn implement <span class="code">Comparable</span>, nó ngay lập tức trở nên mạnh mẽ hơn
                    rất nhiều:</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Tự động sắp xếp:</strong> Bạn có thể ném các đối tượng của mình vào một mảng hoặc <span
                            class="code">List</span> và gọi <span class="code">Arrays.sort()</span> hoặc <span
                            class="code">Collections.sort()</span> mà không cần làm gì thêm.</li>
                    <li><strong>Tương thích với các Collection được sắp xếp:</strong> Các đối tượng của bạn có thể được
                        sử dụng trong các cấu trúc dữ liệu yêu cầu thứ tự như <span class="code">TreeSet</span> và <span
                            class="code">TreeMap</span>. Các collection này sẽ tự động duy trì các phần tử theo thứ tự
                        được sắp xếp.</li>
                    <li><strong>Dễ dàng tìm kiếm và lấy min/max:</strong> Các thuật toán tìm kiếm và các phương thức như
                        <span class="code">Collections.min()</span>, <span class="code">Collections.max()</span> hoạt
                        động hiệu quả hơn.
                    </li>
                    <li><strong>Làm cho lớp dễ hiểu hơn:</strong> Việc định nghĩa một thứ tự tự nhiên làm cho mục đích
                        và hành vi của lớp trở nên rõ ràng hơn.</li>
                </ul><br />
                <p>
                    <strong>Hợp đồng quan trọng:</strong> <span class="code">compareTo()</span> phải nhất quán với <span
                        class="code">equals()</span>. Tức là, <span class="code">(x.compareTo(y) == 0)</span> nên trả về
                    cùng một kết quả boolean như <span class="code">x.equals(y)</span>. Nếu không, bạn phải ghi chú rõ
                    ràng trong tài liệu, nếu không các lớp như <span class="code">TreeSet</span> sẽ hoạt động sai.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Các Ứng dụng và Best Practices" />
        <div class="pl-3">
            <BlockOpinion opinion='Khi nào nên Implement <span class="code">Comparable</span>?'>
                <p>Bạn nên implement <span class="code">Comparable</span> cho các <strong>lớp giá trị có một thứ tự tự
                        nhiên rõ ràng</strong>. Ví dụ:</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><span class="code">String</span> (thứ tự từ điển).</li>
                    <li><span class="code">Integer</span>, <span class="code">Double</span> (thứ tự số học).</li>
                    <li><span class="code">Date</span>, <span class="code">Instant</span> (thứ tự thời gian).</li>
                    <li>Các lớp tùy chỉnh như <span class="code">PhoneNumber</span> (sắp xếp theo mã vùng...), <span
                            class="code">User</span> (sắp xếp theo username), <span class="code">Money</span> (sắp xếp
                        theo giá trị).</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion='Cách triển khai <span class="code">compareTo()</span>'>
                <p><strong>Công thức truyền thống:</strong> So sánh các trường theo thứ tự từ quan trọng nhất đến ít
                    quan trọng nhất. Nếu so sánh trường đầu tiên cho kết quả khác 0, hãy trả về kết quả đó ngay lập tức.
                    Nếu không, hãy chuyển sang trường tiếp theo.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Đối với kiểu nguyên thủy:</strong> Sử dụng các phương thức <span
                            class="code">compare</span> tĩnh như <span class="code">Integer.compare()</span>, <span
                            class="code">Double.compare()</span>.
                        <strong>Đừng dùng phép trừ <span class="code">this.field - other.field</span></strong> vì nó có
                        thể gây tràn số (overflow).
                    </li>
                    <li><strong>Đối với kiểu đối tượng:</strong> Gọi phương thức <span class="code">compareTo()</span>
                        của chúng một cách đệ quy.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="Cách triển khai Hiện đại (Java 8+)">
                <p>
                    Java 8 giới thiệu các phương thức <span class="code">Comparator.comparing</span> và <span
                        class="code">thenComparing</span>, giúp việc triển khai <span class="code">compareTo()</span>
                    trở nên cực kỳ <strong>ngắn gọn, dễ đọc và an toàn</strong>. Đây là cách tốt nhất được khuyến nghị
                    hiện nay.
                </p><br />
                <p><strong>Ví dụ hoàn chỉnh với <span class="code">PhoneNumber</span>:</strong></p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Cách hoạt động của Comparator:</strong></p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><span class="code">comparingInt(pn -> pn.areaCode)</span>: So sánh theo <span
                            class="code">areaCode</span> trước.</li>
                    <li><span class="code">.thenComparingInt(pn -> pn.prefix)</span>: Nếu <span
                            class="code">areaCode</span> bằng nhau, so sánh tiếp theo <span class="code">prefix</span>.
                    </li>
                    <li><span class="code">.thenComparingInt(pn -> pn.lineNum)</span>: Nếu cả <span
                            class="code">areaCode</span> và <span class="code">prefix</span> đều bằng nhau, so sánh nốt
                        <span class="code">lineNum</span>.
                    </li>
                </ol>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Dành thời gian để implement <span class="code">Comparable</span> cho các lớp giá
            trị của bạn là một sự đầu tư xứng đáng. Nó làm cho các đối tượng của bạn trở nên mạnh mẽ và dễ sử dụng hơn
            rất nhiều. Hãy <strong>luôn ưu tiên sử dụng các phương thức <span class="code">Comparator</span> của Java
                8+</strong> để triển khai logic so sánh một cách an toàn và rõ ràng.
        </p><br />
    </div>
</template>
<style scoped></style>