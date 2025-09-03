<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 42: Prefer lambdas to anonymous classes'
})

import { code_block } from '~/data/item42'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer lambdas to anonymous classes" (Ưu tiên lambda thay vì các lớp nặc danh) có nghĩa là khi
            bạn cần tạo một thực thể của một <strong>functional interface</strong> (một interface chỉ có một phương thức
            trừu tượng duy nhất), bạn nên <strong>luôn sử dụng biểu thức lambda</strong> thay vì dùng lớp nặc danh
            (anonymous class).
        </p><br />
        <p>
            Lambda giúp mã nguồn của bạn trở nên <strong>ngắn gọn, dễ đọc và biểu cảm hơn rất nhiều</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Lambda được giới thiệu từ Java 8 như một cách để giảm thiểu code boilerplate và mang các khái niệm của lập
            trình hàm vào Java.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Lớp Nặc danh Dài dòng 👎">
                <p>
                    Trước Java 8, để truyền một "hàm" hoặc một "hành động" vào một phương thức, bạn phải sử dụng một lớp
                    nặc danh.
                </p><br />
                <p><strong>Ví dụ về cách làm cũ (Sắp xếp một danh sách):</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Mã này rất dài dòng. Phần logic quan trọng (<span class="code">Integer.compare(...)</span>) bị che
                    lấp bởi rất nhiều cú pháp thừa của việc tạo ra một đối tượng.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: Biểu thức Lambda ✅" />
        <p>
            Biểu thức lambda là một cách biểu diễn ngắn gọn cho một hàm. Nó cho phép bạn tập trung vào logic cốt lõi mà
            không cần cú pháp thừa.
        </p><br />

        <p><strong>Cách làm tốt nhất và hiện đại nhất:</strong></p>
        <CodeBlock :code="code_block.method2"></CodeBlock>
        <p>
            Mã này thực hiện chính xác điều tương tự như phiên bản lớp nặc danh, nhưng gọn hơn rất nhiều. Trình biên
            dịch sẽ tự động suy ra rằng bạn đang cung cấp một implementation cho phương thức <span
                class="code">compare</span> của <span class="code">Comparator</span>.
        </p><br />
        <p>Thậm chí, bạn có thể làm cho nó gọn hơn nữa bằng cách sử dụng các phương thức <span
                class="code">Comparator.comparingInt</span> và method reference:</p>
        <CodeBlock :code="code_block.method3"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Hạn chế của Lambda">
                <p>
                    Một điều quan trọng cần nhớ là lambda chỉ có thể được sử dụng cho các <strong>functional
                        interface</strong>. Nếu một interface có nhiều hơn một phương thức trừu tượng, bạn vẫn phải dùng
                    lớp nặc danh hoặc một lớp cụ thể. Ngoài ra, <span class="code">this</span> trong một lambda sẽ tham
                    chiếu đến <span class="code">this</span> của lớp bao bọc, không phải chính lambda đó.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Kể từ Java 8, không có lý do gì để sử dụng các lớp nặc danh cho các functional
            interface. <strong>Hãy luôn ưu tiên sử dụng lambda</strong> để làm cho mã nguồn của bạn trở nên sạch sẽ,
            ngắn gọn và dễ hiểu hơn. Hãy tận dụng các phương thức tiện ích trong <span
                class="code">java.util.function</span> và các method reference để viết mã theo phong cách lập trình hàm
            một cách hiệu quả nhất.
        </p><br />
    </div>
</template>
<style scoped></style>