<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 58: Prefer for-each loops to traditional for loops'
})

import { code_block } from '~/data/item58'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer for-each loops to traditional for loops" (Ưu tiên vòng lặp for-each thay vì vòng lặp for
            truyền thống) có nghĩa là bạn nên <strong>luôn sử dụng vòng lặp <span class="code">for-each</span></strong>
            để duyệt qua các phần tử của một collection hoặc một mảng bất cứ khi nào có thể.
        </p><br />
        <p>
            Vòng lặp <span class="code">for-each</span> (còn gọi là "enhanced for loop") giúp mã nguồn trở nên
            <strong>ngắn gọn, dễ đọc, an toàn hơn và giảm thiểu khả năng xảy ra lỗi</strong> so với các vòng lặp <span
                class="code">for</span> truyền thống dùng chỉ mục hoặc iterator.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Vòng lặp <span class="code">for-each</span> che giấu đi sự phức tạp của iterator hoặc biến chỉ mục, cho phép
            bạn tập trung vào logic xử lý cho từng phần tử.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Vòng lặp for truyền thống phức tạp và dễ lỗi 👎">
                <p>
                    Có hai cách duyệt qua một collection bằng vòng lặp truyền thống, và cả hai đều có nhược điểm.
                </p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p>
                    Cả hai cách trên đều dài dòng và chứa nhiều "code boilerplate", tạo ra nhiều cơ hội cho các lỗi khó
                    tìm.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: Vòng lặp for-each ✅" />
        <p>
            <span class="code">For-each</span> giải quyết tất cả các vấn đề trên bằng một cú pháp đơn giản và rõ ràng.
        </p><br />

        <p><strong>Cách làm tốt nhất:</strong></p>
        <CodeBlock :code="code_block.method3"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích vượt trội">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Ngắn gọn và Dễ đọc:</strong> Cú pháp thể hiện rõ ràng ý định: "với mỗi phần tử <span
                            class="code">e</span> trong collection <span class="code">c</span>...".</li>
                    <li><strong>An toàn:</strong> Không có biến chỉ mục hay iterator nào bị lộ ra ngoài, vì vậy không có
                        nguy cơ xảy ra các lỗi liên quan đến chúng.</li>
                    <li><strong>Linh hoạt:</strong> Nó hoạt động trên bất kỳ đối tượng nào implement interface <span
                            class="code">Iterable</span>, bao gồm tất cả các collection và mảng.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="Khi nào thì không thể dùng for-each?">
                <p>Chỉ có ba trường hợp hiếm hoi mà bạn vẫn cần dùng vòng lặp <span class="code">for</span> truyền
                    thống:</p><br />
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Lọc và Xóa (Destructive Filtering):</strong> Nếu bạn cần duyệt qua một collection và xóa
                        các phần tử, bạn phải dùng <span class="code">iterator.remove()</span> một cách tường minh.</li>
                    <li><strong>Biến đổi (Transforming):</strong> Nếu bạn cần thay đổi các phần tử trong một <span
                            class="code">List</span> bằng cách gán giá trị mới (ví dụ: <span class="code">list.set(i,
                            newValue)</span>), bạn cần chỉ mục.</li>
                    <li><strong>Duyệt song song:</strong> Nếu bạn cần duyệt qua nhiều collection cùng một lúc, bạn cần
                        kiểm soát chỉ mục hoặc iterator một cách thủ công.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Vòng lặp <span class="code">for-each</span> mang lại sự rõ ràng và an toàn
            mà không làm giảm hiệu năng. Hãy <strong>biến nó thành lựa chọn mặc định của bạn</strong> để duyệt qua các
            collection và mảng. Chỉ quay lại dùng vòng lặp <span class="code">for</span> truyền thống khi bạn thực sự
            cần đến iterator hoặc chỉ mục cho các tác vụ đặc biệt.
        </p><br />
    </div>
</template>
<style scoped></style>