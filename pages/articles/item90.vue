<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 90: Consider serialization proxies instead of serialized instances'
})

import { code_block } from '~/data/item90'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Consider serialization proxies instead of serialized instances" giới thiệu một <strong>mẫu thiết
                kế (pattern) mạnh mẽ</strong> để triển khai <span class="code">Serializable</span> một cách <strong>an
                toàn và mạnh mẽ nhất</strong>.
        </p><br />
        <p>
            Đây được xem là cách <strong>tốt nhất</strong> để bảo vệ lớp của bạn khỏi các lỗi và lỗ hổng bảo mật liên
            quan đến serialization, vượt trội hơn cả việc viết <span class="code">readObject</span> một cách phòng thủ.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Thay vì để lớp chính của bạn implement <span class="code">Serializable</span> và tự xử lý logic trong <span
                class="code">writeObject</span>/<span class="code">readObject</span>, bạn sẽ tạo ra một lớp "proxy" tuần
            tự hóa. Lớp proxy này là một lớp lồng <span class="code">private static</span> bên trong lớp chính, có nhiệm
            vụ duy nhất là đại diện cho dạng tuần tự hóa của lớp chính.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: readObject vẫn còn rủi ro 💣">
                <p>
                    Ngay cả khi được viết một cách phòng thủ, phương thức <span class="code">readObject</span> vẫn rất
                    phức tạp và dễ gây lỗi. Nó là một "constructor extralinguistic" (constructor ngoài ngôn ngữ), và rất
                    khó để đảm bảo nó bảo toàn tất cả các quy tắc bất biến của lớp một cách chính xác.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="Giải pháp: Serialization Proxy Pattern">
                <p>
                    Mẫu thiết kế này hoạt động bằng cách sử dụng hai phương thức "ma thuật" khác của cơ chế
                    serialization:
                </p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong><span class="code">writeReplace()</span>:</strong> Được định nghĩa trong lớp chính. Khi
                        một đối tượng của lớp này được serialize, JVM sẽ gọi phương thức này và serialize đối tượng mà
                        nó trả về (chính là proxy).</li>
                    <li><strong><span class="code">readResolve()</span>:</strong> Được định nghĩa trong lớp proxy. Sau
                        khi một đối tượng proxy được deserialize, JVM sẽ gọi phương thức này và trả về đối tượng mà nó
                        trả về (chính là một thực thể mới của lớp chính).</li>
                </ul><br />

            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Các bước Triển khai và Best Practices ✅" />
        <ol class="list-decimal pl-5 mt-3 space-y-1.5">
            <li>Lớp bên ngoài (lớp chính) implement <span class="code">Serializable</span>.</li>
            <li>Định nghĩa một lớp lồng <span class="code">private static</span> (lớp proxy) cũng implement <span
                    class="code">Serializable</span>.</li>
            <li>Trong lớp bên ngoài, thêm một phương thức <span class="code">writeReplace()</span> trả về một thực thể
                mới của lớp proxy.</li>
            <li>Trong lớp proxy, thêm một phương thức <span class="code">readResolve()</span> trả về một thực thể mới
                của lớp bên ngoài.</li>
            <li>Thêm một phương thức <span class="code">readObject</span> vào lớp bên ngoài và để nó ném ra <span
                    class="code">InvalidObjectException</span> để ngăn chặn tấn công.</li>
        </ol><br />
        <div class="pl-3">
            <BlockOpinion opinion="Ví dụ kinh điển: Lớp Period an toàn tuyệt đối">
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="Lợi ích vượt trội">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>An toàn hơn:</strong> Kẻ tấn công không thể tạo ra các thực thể <span
                            class="code">Period</span> không hợp lệ, vì quá trình deserialize cuối cùng luôn phải đi qua
                        constructor công khai của <span class="code">Period</span>.</li>
                    <li><strong>Mạnh mẽ hơn:</strong> Tách biệt hoàn toàn dạng tuần tự hóa (được định nghĩa trong <span
                            class="code">SerializationProxy</span>) khỏi cách triển khai của lớp <span
                            class="code">Period</span>. Bạn có thể tự do thay đổi các trường <span
                            class="code">private</span> của <span class="code">Period</span> mà không ảnh hưởng đến tính
                        tương thích.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Mẫu thiết kế <strong>serialization proxy</strong> là cách tiếp cận <strong>an
                toàn và mạnh mẽ nhất</strong> để implement <span class="code">Serializable</span>. Mặc dù nó dài dòng
            hơn một chút, nhưng nó cung cấp một lớp bảo vệ gần như tuyệt đối chống lại các lỗi và các cuộc tấn công liên
            quan đến deserialization.
        </p><br />
    </div>
</template>
<style scoped></style>