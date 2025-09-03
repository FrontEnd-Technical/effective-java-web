<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 24: Favor static member classes over nonstatic'
})

import { code_block } from '~/data/item24'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Favor static member classes over nonstatic" (Ưu tiên các lớp thành viên static thay vì
            non-static) có nghĩa là khi bạn định nghĩa một lớp lồng bên trong một lớp khác, bạn nên <strong>luôn khai
                báo nó là <span class="code">static</span></strong> trừ khi bạn có lý do đặc biệt để không làm vậy.
        </p><br />
        <p>
            Việc này giúp tránh các lỗi phổ biến liên quan đến rò rỉ bộ nhớ và làm cho mã nguồn trở nên đơn giản hơn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Lớp lồng (nested class) là một lớp được định nghĩa bên trong một lớp khác. Có bốn loại, nhưng chúng ta sẽ
            tập trung vào sự khác biệt quan trọng nhất: <strong>static</strong> vs. <strong>non-static</strong>.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="Sự khác biệt cốt lõi">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Non-static member class (inner class):</strong> Mỗi thực thể của một lớp non-static đều
                        có một <strong>tham chiếu ẩn</strong> đến một thực thể của lớp bao bọc (enclosing class) đã tạo
                        ra nó.</li>
                    <li><strong>Static member class:</strong> Không có tham chiếu ẩn này. Nó chỉ là một lớp thông thường
                        được đặt bên trong không gian tên (namespace) của một lớp khác.</li>
                </ul>

            </BlockOpinion>
            <BlockOpinion opinion="Vấn đề của Lớp Non-static (Inner Class)">
                <p>Tham chiếu ẩn đó, mặc dù hữu ích trong một số trường hợp, lại là nguồn gốc của nhiều vấn đề:</p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Rò rỉ bộ nhớ (Memory Leaks):</strong> Đây là nguy cơ lớn nhất. Nếu một thực thể của
                        inner class tồn tại lâu hơn thực thể của lớp bao bọc, nó sẽ giữ lại tham chiếu đến lớp bao bọc,
                        ngăn cản Garbage Collector dọn dẹp.</li>
                    <li><strong>Tốn bộ nhớ và thời gian:</strong> Tham chiếu ẩn đó chiếm thêm bộ nhớ và tốn thêm thời
                        gian để khởi tạo.</li>
                    <li><strong>Cú pháp phức tạp:</strong> Để tạo một thực thể của inner class từ bên ngoài, bạn cần một
                        thực thể của lớp bao bọc (<span class="code">enclosingInstance.new InnerClass()</span>), điều
                        này khá rườm rà.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>
            Quy tắc vàng rất đơn giản: <strong>Nếu một lớp lồng không cần truy cập vào các trường hoặc phương thức của
                thực thể bao bọc, hãy luôn làm cho nó <span class="code">static</span></strong>.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="1. Sử dụng static member class (Lựa chọn mặc định)">
                <p>Đây là lựa chọn tốt nhất trong hầu hết các trường hợp. Nó hoạt động giống như một lớp top-level thông
                    thường nhưng giúp nhóm các lớp liên quan lại với nhau để tăng tính dễ đọc.</p><br />
                <p><strong>Ví dụ kinh điển: <span class="code">Entry</span> trong <span class="code">Map</span></strong>
                </p><br />
                <p>
                    Lớp <span class="code">Map.Entry</span> là một <span class="code">static member class</span> bên
                    trong interface <span class="code">Map</span>. Nó không cần tham chiếu đến một <span
                        class="code">Map</span> cụ thể nào cả; nó chỉ là một cấu trúc dữ liệu để chứa một cặp key-value.
                </p><br />
                <p><strong>Ví dụ tùy chỉnh: Builder Pattern</strong></p><br />
                <p>
                    Khi triển khai mẫu Builder, lớp <span class="code">Builder</span> luôn là một <span
                        class="code">static member class</span>. Nó không cần truy cập vào trạng thái của đối tượng đang
                    được xây dựng cho đến khi phương thức <span class="code">build()</span> được gọi.
                </p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Khi nào thì dùng Lớp Non-static (Inner Class)?">
                <p>
                    Chỉ có một trường hợp duy nhất bạn nên dùng inner class: khi mỗi thực thể của lớp lồng <strong>cần
                        một tham chiếu trực tiếp</strong> đến một thực thể của lớp bao bọc và cần truy cập vào các
                    trường hoặc phương thức non-static của nó.
                </p><br />
                <p><strong>Ví dụ phổ biến: <span class="code">Iterator</span></strong></p><br />
                <p>
                    Một ví dụ kinh điển là implementation của <span class="code">Iterator</span> trong các lớp
                    collection. Mỗi <span class="code">Iterator</span> phải gắn liền với một thực thể collection cụ thể
                    để có thể duyệt qua các phần tử của nó.
                </p><br />
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Hãy coi việc khai báo một lớp lồng là <span class="code">static</span> như
            một thói quen. Chỉ loại bỏ từ khóa <span class="code">static</span> khi bạn thực sự cần lớp lồng đó truy cập
            vào trạng thái của đối tượng bao bọc. Điều này sẽ giúp bạn tránh được các lỗi rò rỉ bộ nhớ phổ biến và giữ
            cho mã nguồn của mình sạch sẽ hơn.
        </p><br />
    </div>
</template>
<style scoped></style>