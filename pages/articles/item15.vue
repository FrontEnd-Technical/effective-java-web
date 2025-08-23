<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 15: Minimize the accessibility of classes and members'
})

import { code_block } from '~/data/item15'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Minimize the accessibility of classes and members" (Tối thiểu hóa khả năng truy cập của các lớp
            và thành viên) là một trong những nền tảng quan trọng nhất của thiết kế phần mềm tốt, với ý tưởng cốt lõi là
            <strong>đóng gói (encapsulation)</strong>. Bạn nên <strong>che giấu tối đa các chi tiết triển khai</strong>
            và chỉ hiển thị ra bên ngoài một <strong>API công khai (public API) nhỏ gọn và cần thiết</strong>.
        </p><br />
        <p>
            Quy tắc vàng là hãy bắt đầu với mức độ truy cập <strong>hạn chế nhất (<span
                    class="code">private</span>)</strong> và chỉ nới lỏng nó khi thực sự cần thiết. Điều này giúp tạo ra
            các thành phần có <strong>sự phụ thuộc lỏng lẻo (loosely coupled)</strong>, giúp hệ thống trở nên linh hoạt,
            dễ bảo trì và an toàn hơn.
        </p><br />
        <hr><br>
        <Heading1 title="Các Mức độ Truy cập" />
        <p>Java cung cấp bốn mức độ truy cập, từ hạn chế nhất đến rộng rãi nhất:</p>
        <ul class="list-disc pl-5 mt-3 space-y-1.5">
            <li><span class="code">private</span>: Chỉ truy cập được từ bên trong chính lớp đó.</li>
            <li><span class="code">package-private</span> (mặc định, không có từ khóa): Truy cập được từ các lớp trong
                cùng một package.</li>
            <li><span class="code">protected</span>: Giống <span class="code">package-private</span>, cộng thêm quyền
                truy cập từ các lớp con ở package khác.</li>
            <li><span class="code">public</span>: Truy cập được từ bất kỳ đâu.</li>
        </ul>
        <br>
        <hr><br>
        <Heading1 title="Các Ví dụ và Ứng dụng Tốt nhất" />
        <div class="pl-3">
            <BlockOpinion opinion="1. Che giấu Trạng thái Nội bộ của các Đối tượng (Fields)">
                <p>
                    Đây là ứng dụng cơ bản và quan trọng nhất. <strong>Luôn khai báo các trường (fields) của một lớp là
                        <span class="code">private</span></strong> và chỉ cung cấp quyền truy cập thông qua các phương
                    thức <span class="code">public</span> (getters/setters).
                </p><br />
                <p><strong>Lợi ích:</strong> Bạn hoàn toàn kiểm soát được trạng thái của đối tượng. Bạn có thể thêm
                    logic kiểm tra (validation) vào setter hoặc thay đổi cách lưu trữ dữ liệu bên trong mà không ảnh
                    hưởng đến các lớp khác.</p><br />
                <p><strong>Ví dụ:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion='2. Sử dụng <span class="code">package-private</span> cho các Thành phần Nội bộ'>
                <p>
                    Trong một package hoặc một module tính năng, thường có những lớp hoặc phương thức chỉ mang tính chất
                    "hỗ trợ" cho các lớp public chính. Việc để chúng ở mức <span class="code">package-private</span> sẽ
                    che giấu chúng khỏi phần còn lại của ứng dụng, làm cho API của module trở nên gọn gàng hơn.
                </p><br />
                <p><strong>Lợi ích:</strong> Giảm sự phức tạp của API công khai và cho phép bạn tự do thay đổi các lớp
                    hỗ trợ này mà không sợ phá vỡ các module khác.</p><br />
                <p><strong>Ví dụ: </strong>Trong một package <span class="code">com.mycompany.order</span>, bạn có thể
                    có:</p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="3. Che giấu Logic Phức tạp trong các Lớp Service">
                <p>
                    Các lớp service thường có một vài phương thức <span class="code">public</span> để thực hiện các
                    nghiệp vụ chính, nhưng bên trong chúng có thể chứa hàng chục phương thức <span
                        class="code">private</span> để chia nhỏ các tác vụ phức tạp.
                </p><br />
                <p><strong>Lợi ích:</strong> Giúp phương thức <span class="code">public</span> trở nên ngắn gọn, dễ đọc
                    và dễ hiểu. Nó cũng che giấu các chi tiết triển khai phức tạp mà client không cần quan tâm.</p>
                <br />
                <p><strong>Ví dụ:</strong></p>
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
        </div>
    </div>
</template>
<style scoped></style>