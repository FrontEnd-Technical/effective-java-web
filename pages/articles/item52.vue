<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 52: Use overloading judiciously'
})

import { code_block } from '~/data/item52'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use overloading judiciously" (Sử dụng nạp chồng một cách thận trọng) có nghĩa là bạn nên
            <strong>hạn chế việc sử dụng nạp chồng (overloading)</strong> và chỉ làm vậy khi các phương thức có cùng tên
            thực sự làm cùng một việc trên các kiểu dữ liệu khác nhau.
        </p><br />
        <p>
            Việc lạm dụng nạp chồng có thể gây ra <strong>sự nhầm lẫn và các lỗi khó lường</strong>, vì quyết định phiên
            bản nào của phương thức sẽ được gọi được đưa ra tại <strong>thời điểm biên dịch</strong>, không phải lúc
            chạy.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Nạp chồng (Overloading) là việc định nghĩa nhiều phương thức có cùng tên nhưng khác nhau về danh sách tham
            số. Ghi đè (Overriding) là việc định nghĩa lại một phương thức trong lớp con đã tồn tại ở lớp cha.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Overloading bị 'đóng băng' lúc biên dịch 😵">
                <p>Sự khác biệt cốt lõi và nguy hiểm nhất là:</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Overriding (ghi đè):</strong> Quyết định phương thức nào sẽ được gọi được đưa ra
                        <strong>lúc chạy (runtime)</strong>, dựa trên kiểu thực tế của đối tượng.
                    </li>
                    <li><strong>Overloading (nạp chồng):</strong> Quyết định phương thức nào sẽ được gọi được đưa ra
                        <strong>lúc biên dịch (compile-time)</strong>, dựa trên kiểu khai báo của các tham số.
                    </li>
                </ul><br />
                <p><strong>Ví dụ kinh điển về sự nhầm lẫn:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Tại sao lại sai?</strong></p><br />
                <p>
                    Mặc dù lúc chạy, các đối tượng trong mảng là <span class="code">HashSet</span>, <span
                        class="code">ArrayList</span>, v.v., nhưng tại thời điểm biên dịch, kiểu của biến <span
                        class="code">c</span> trong vòng lặp <span class="code">for</span> là <span
                        class="code">Collection&lt;?&gt;</span>. Do đó, trình biên dịch "đóng băng" lựa chọn và luôn gọi
                    phiên bản <span class="code">classify(Collection&lt;?&gt; c)</span>.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Best Practices và Ứng dụng" />
        <p>Quy tắc vàng là <strong>đừng bao giờ nạp chồng các phương thức có cùng số lượng tham số mà có thể được chuyển
                đổi lẫn nhau</strong>.</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Tránh nạp chồng các Kiểu có liên quan">
                <p>
                    Hãy tránh nạp chồng các phương thức có các tham số là các kiểu có thể được gán cho nhau, đặc biệt là
                    các interface. Thay vào đó, <strong>hãy đặt tên khác nhau cho chúng</strong>.
                </p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Khi nào thì Nạp chồng an toàn?">
                <p>
                    Nạp chồng là an toàn và hữu ích khi các phương thức thực sự <strong>làm cùng một việc</strong> nhưng
                    trên các <strong>kiểu dữ liệu hoàn toàn khác nhau</strong>.
                </p><br />
                <p>
                    <strong>Ví dụ tốt: Constructor của <span class="code">ArrayList</span></strong><br />
                    <span class="code">ArrayList</span> có các constructor như <span class="code">ArrayList(int
                        initialCapacity)</span> và <span class="code">ArrayList(Collection&lt;? extends E&gt; c)</span>.
                    Các tham số <span class="code">int</span> và <span class="code">Collection</span> hoàn toàn khác
                    biệt, vì vậy không thể có sự nhầm lẫn nào.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="3. Quy tắc 'Cùng số tham số, cùng hành vi'">
                <p>
                    Từ Java 8, bạn nên tuân thủ quy tắc: nếu bạn nạp chồng các phương thức có cùng số lượng tham số, hãy
                    đảm bảo rằng chúng <strong>hành xử giống hệt nhau</strong> khi được truyền vào cùng một bộ giá trị.
                </p><br />
                <p>
                    Ví dụ, phương thức <span class="code">remove</span> trong <span class="code">List</span> có hai
                    phiên bản: <span class="code">remove(Object o)</span> và <span class="code">remove(int
                        index)</span>. Đây là một thiết kế có thể gây nhầm lẫn.
                </p><br />
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Hãy coi <strong>nạp chồng là một công cụ nên được dùng một cách thận
                trọng</strong>. Thay vì dựa vào nó, hãy ưu tiên đặt tên các phương thức một cách rõ ràng. Nếu bạn phải
            nạp chồng, hãy đảm bảo rằng các tham số của các phiên bản khác nhau là hoàn toàn không liên quan để tránh
            gây ra sự nhầm lẫn và các lỗi khó tìm.
        </p><br />
    </div>
</template>
<style scoped></style>