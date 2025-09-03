<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 17: Minimize mutability'
})

import { code_block } from '~/data/item17'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Minimize mutability" (Tối thiểu hóa khả năng thay đổi) có nghĩa là bạn nên <strong>thiết kế các
                lớp của mình sao cho các thực thể (instance) của chúng không thể bị thay đổi sau khi đã được
                tạo</strong>. Các lớp như vậy được gọi là lớp <strong>bất biến (immutable)</strong>.
        </p><br />
        <p>
            Việc tuân thủ nguyên tắc này giúp tạo ra mã nguồn đơn giản hơn, an toàn hơn và dễ hiểu hơn, đặc biệt là
            trong các hệ thống đa luồng.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Một lớp được coi là bất biến nếu trạng thái bên trong của các đối tượng của nó không thể được sửa đổi sau
            khi chúng được khởi tạo. <span class="code">String</span>, các lớp bao bọc (wrapper) cho kiểu nguyên thủy
            (như <span class="code">Integer</span>, <span class="code">Long</span>), và <span
                class="code">java.time.LocalDate</span> là những ví dụ kinh điển về các lớp bất biến trong JDK.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="Các Quy tắc để tạo một Lớp Bất biến">
                <p>Để làm cho một lớp trở nên bất biến, bạn phải tuân thủ năm quy tắc sau:</p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Không cung cấp các phương thức thay đổi trạng thái</strong> (setters).</li>
                    <li><strong>Đảm bảo lớp không thể được kế thừa</strong> (dùng <span class="code">final</span>
                        class).</li>
                    <li><strong>Làm cho tất cả các trường là <span class="code">final</span></strong>.</li>
                    <li><strong>Làm cho tất cả các trường là <span class="code">private</span></strong>.</li>
                    <li><strong>Đảm bảo quyền truy cập độc quyền vào bất kỳ thành phần khả biến nào</strong>. Nếu một
                        trường là một đối tượng khả biến (mutable) (ví dụ: <span class="code">Date</span> hoặc <span
                            class="code">List</span>), bạn phải tạo các bản sao phòng thủ (defensive copies) trong
                        constructor và getters.</li>
                </ol><br>
                <p><strong>Ví dụ về một lớp bất biến:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Lợi ích và Ứng dụng Tốt nhất" />
        <p>Mặc dù có một nhược điểm là phải tạo đối tượng mới cho mỗi lần thay đổi, lợi ích của tính bất biến thường
            vượt trội hơn rất nhiều.</p>
        <div class="pl-3">
            <BlockOpinion opinion="1. Lợi ích của Tính Bất biến">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Đơn giản hơn:</strong> Các đối tượng bất biến chỉ có một trạng thái duy nhất, là trạng
                        thái khi chúng được tạo ra. Điều này làm cho việc suy luận về mã nguồn trở nên dễ dàng hơn rất
                        nhiều.</li>
                    <li><strong>An toàn tuyệt đối trong đa luồng (Thread-Safe) 🕊️:</strong> Vì chúng không thể bị thay
                        đổi, bạn có thể tự do chia sẻ các đối tượng bất biến giữa các luồng mà không cần bất kỳ cơ chế
                        đồng bộ hóa (<span class="code">synchronized</span>) nào.</li>
                    <li><strong>Có thể được tái sử dụng:</strong> Bạn có thể cache và tái sử dụng các đối tượng bất biến
                        một cách an toàn. Ví dụ: <span class="code">Boolean.TRUE</span> và <span
                            class="code">Boolean.FALSE</span>.</li>
                    <li><strong>Tuyệt vời để làm key trong <span class="code">Map</span> và phần tử trong <span
                                class="code">Set</span>:</strong> Vì <span class="code">hashCode()</span> của chúng
                        không thay đổi, chúng hoạt động hoàn hảo trong các hash-based collection.</li>
                </ul>

            </BlockOpinion>
            <BlockOpinion opinion="2. Các Ứng dụng Tốt nhất">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Các Lớp Giá trị (Value Classes):</strong> Đây là ứng dụng phổ biến nhất. Bất kỳ lớp nào
                        đại diện cho một giá trị (như <span class="code">PhoneNumber</span>, <span
                            class="code">Money</span>, <span class="code">ComplexNumber</span>, <span
                            class="code">Color</span>) đều nên là bất biến.</li>
                    <li><strong>DTOs (Data Transfer Objects):</strong> Làm cho các DTO bất biến đảm bảo rằng dữ liệu
                        không bị thay đổi một cách vô tình khi nó được truyền giữa các tầng của ứng dụng.</li>
                    <li><strong>Các đối tượng Cấu hình (Configuration Objects):</strong> Cấu hình nên được tải một lần
                        và không thay đổi trong suốt vòng đời của ứng dụng.</li>
                    <li><strong>Các sự kiện (Events):</strong> Trong các kiến trúc hướng sự kiện, các sự kiện đã xảy ra
                        trong quá khứ nên là bất biến.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Quy tắc vàng là hãy <strong>làm cho mỗi lớp trở nên bất biến trừ khi có một lý
                do thực sự thuyết phục để làm cho nó khả biến</strong>. Ngay cả khi đó, hãy cố gắng tối thiểu hóa khả
            năng thay đổi. Việc ưu tiên tính bất biến sẽ giúp bạn xây dựng được các ứng dụng mạnh mẽ, an toàn và dễ bảo
            trì hơn.
        </p><br />
    </div>
</template>
<style scoped></style>