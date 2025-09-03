<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 22: Use interfaces only to define types'
})

import { code_block } from '~/data/item22'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use interfaces only to define types" (Chỉ dùng interface để định nghĩa kiểu) có nghĩa là mục
            đích chính và duy nhất của một interface là để <strong>thiết lập một hợp đồng (contract)</strong>. Interface
            nên mô tả những gì một lớp có thể làm, chứ không nên được lạm dụng cho các mục đích khác, đặc biệt là không
            nên dùng làm nơi chứa hằng số.
        </p><br />
        <p>
            Đây là một quy tắc thiết kế quan trọng, giúp giữ cho mã nguồn trong sáng và API dễ hiểu.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Một interface tạo ra một <strong>kiểu (type)</strong> mới. Khi một lớp implement một interface, nó cam kết
            rằng nó sẽ cung cấp các hành vi được định nghĩa trong interface đó. Điều này cho phép chúng ta lập trình
            theo kiểu đa hình (polymorphism), tức là làm việc với các đối tượng thông qua kiểu interface của chúng thay
            vì kiểu cụ thể.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Constant Interface Antipattern">
                <p>
                    Một cách lạm dụng interface rất phổ biến là <strong>Constant Interface Antipattern</strong>. Đây là
                    việc tạo ra một interface chỉ để chứa các hằng số <span class="code">public static final</span>, và
                    sau đó các lớp khác sẽ <span class="code">implements</span> interface này để có thể truy cập các
                    hằng số đó mà không cần ghi tên lớp.
                </p><br />
                <p><strong>Ví dụ về cách làm sai:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Tại sao cách này lại tệ?</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Làm "ô nhiễm" API:</strong> Khi một lớp <span class="code">implements</span> interface
                        này, tất cả các hằng số đó sẽ bị rò rỉ vào không gian tên công khai (public namespace) của lớp.
                        Đây là một chi tiết triển khai không liên quan đến mục đích chính của lớp.</li>
                    <li><strong>Gây nhầm lẫn:</strong> Nó tạo ra một cam kết giả. Lớp <span
                            class="code">implements</span> interface này không có nghĩa là nó "là một" <span
                            class="code">PhysicalConstants</span>.</li>
                    <li><strong>Không cần thiết:</strong> Có những cách tốt hơn nhiều để quản lý hằng số.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Các Ứng dụng và Best Practices" />
        <p>Để tránh Constant Interface Antipattern và sử dụng interface một cách đúng đắn, hãy tuân theo các lựa chọn
            thay thế sau đây.</p>
        <div class="pl-3">
            <BlockOpinion opinion="1. Sử dụng Lớp tiện ích (Utility Class) không thể khởi tạo">
                <p>
                    Đây là cách tốt nhất để quản lý các hằng số. Bạn tạo một lớp <span class="code">final</span> với một
                    constructor <span class="code">private</span> để ngăn chặn việc khởi tạo và kế thừa, và đặt tất cả
                    các hằng số vào đó.
                </p><br />
                <p><strong>Cách làm tốt nhất:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Sử dụng enum">
                <p>
                    Nếu các hằng số tạo thành một tập hợp có liên quan chặt chẽ với nhau (ví dụ: các lựa chọn, các trạng
                    thái), thì <span class="code">enum</span> là lựa chọn tốt hơn nữa.
                </p><br />
                <p><strong>Ví dụ:</strong></p>
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Hãy tôn trọng mục đích của interface. <strong>Chỉ sử dụng interface để định
                nghĩa một kiểu, một hợp đồng về hành vi.</strong> Đối với việc quản lý hằng số, hãy luôn ưu tiên sử dụng
            các lớp tiện ích không thể khởi tạo hoặc <span class="code">enum</span>.
        </p><br />
    </div>
</template>
<style scoped></style>