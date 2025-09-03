<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 16: In public classes, use accessor methods, not public fields'
})

import { code_block } from '~/data/item16'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "In public classes, use accessor methods, not public fields" (Trong các lớp public, hãy dùng
            phương thức truy cập, không dùng trường public) có nghĩa là bạn <strong>không bao giờ nên để các trường
                (fields) của một lớp <span class="code">public</span> là <span class="code">public</span></strong>. Thay
            vào đó, hãy khai báo chúng là <span class="code">private</span> và cung cấp các phương thức <span
                class="code">public</span> để truy cập (getters) và thay đổi (setters) chúng.
        </p><br />
        <p>
            Đây là một trong những quy tắc cơ bản và quan trọng nhất của <strong>tính đóng gói (encapsulation)</strong>.
            Việc vi phạm nó sẽ tước đi những lợi ích cốt lõi mà lập trình hướng đối tượng mang lại.
        </p><br />
        <hr><br>
        <Heading1 title="Tại sao không nên dùng public fields? 👎" />
        <p>Khi bạn khai báo một trường là <span class="code">public</span>, bạn đã mất đi tất cả quyền kiểm soát đối với
            nó.</p>
        <ol class="list-decimal pl-5 mt-3 space-y-1.5">
            <li><strong>Mất đi sự đóng gói:</strong> Bạn đã để lộ chi tiết triển khai bên trong của lớp ra thế giới bên
                ngoài.</li>
            <li><strong>Mất đi sự linh hoạt:</strong> Đây là hậu quả nghiêm trọng nhất. Một khi bạn đã công khai một
                trường, bạn <strong>không thể thay đổi cách biểu diễn của nó</strong> mà không phá vỡ code của tất cả
                các client đang sử dụng lớp đó.</li>
            <li><strong>Mất khả năng kiểm soát và kiểm tra dữ liệu:</strong> Bạn không thể thực thi bất kỳ logic nào khi
                trường được truy cập hoặc thay đổi.</li>
            <li><strong>Mất an toàn trong đa luồng:</strong> Bạn không thể thêm cơ chế đồng bộ hóa (<span
                    class="code">synchronized</span>) để quản lý việc truy cập đồng thời.</li>
        </ol><br>
        <hr><br>
        <Heading1 title="Lợi ích của việc dùng Accessor Methods (Getters/Setters)" />
        <p>Bằng cách che giấu các trường và chỉ hiển thị các phương thức, bạn có được sự kiểm soát và linh hoạt tối đa.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="1. Bảo vệ sự đóng gói và tăng tính linh hoạt">
                <p>Đây là lợi ích lớn nhất. Bạn có thể thay đổi hoàn toàn cách biểu diễn dữ liệu bên trong lớp mà không
                    làm ảnh hưởng đến bất kỳ ai.</p><br />
                <p><strong>Ví dụ kinh điển: Thay đổi cách lưu trữ tuổi của một người.</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>Client vẫn gọi <span class="code">person.getAge()</span> như bình thường. <strong>Sự linh hoạt này là
                        không thể có được với một trường <span class="code">public int age;</span></strong>.</p><br />
            </BlockOpinion>
            <BlockOpinion opinion="2. Thực thi Logic và Kiểm tra dữ liệu">
                <p>Setters cho phép bạn thêm vào các logic kiểm tra (validation) để đảm bảo rằng đối tượng của bạn luôn
                    ở trạng thái hợp lệ.</p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="3. Tạo các Thuộc tính chỉ đọc">
                <p>Bạn có thể dễ dàng tạo một thuộc tính chỉ đọc bằng cách chỉ cung cấp phương thức getter mà không có
                    setter.</p><br />
                <p>Ví dụ, một lớp <span class="code">Order</span> có thể có một <span class="code">orderId</span> được
                    tạo ra một lần và không bao giờ thay đổi:</p><br />
                <p><span class="code">public String getOrderId() { return this.orderId; }</span></p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Trường hợp Ngoại lệ" />
        <p>
            Trường hợp duy nhất mà một trường <span class="code">public</span> có thể được chấp nhận trong một lớp <span
                class="code">public</span> là khi nó là một <strong>hằng số <span class="code">public static
                    final</span></strong>.
        </p>
        <CodeBlock :code="code_block.method3"></CodeBlock>
        <p>
            <strong>Kết luận:</strong> Việc sử dụng các trường <span class="code">private</span> kết hợp với các
            phương thức truy cập <span class="code">public</span> là một trong những trụ cột của thiết kế hướng đối
            tượng tốt trong Java. Nó bảo vệ sự đóng gói, đảm bảo tính linh hoạt và cho phép bạn kiểm soát hoàn toàn lớp
            của mình.
        </p><br />
    </div>
</template>
<style scoped></style>