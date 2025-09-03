<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 89: For instance control, prefer enum types to readResolve'
})

import { code_block } from '~/data/item89'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "For instance control, prefer enum types to <span class="code">readResolve</span>" có nghĩa là
            khi bạn cần triển khai mẫu thiết kế <strong>Singleton</strong>, cách tốt nhất, đơn giản và an toàn nhất là
            sử dụng một <strong><span class="code">enum</span> có một phần tử duy nhất</strong>.
        </p><br />
        <p>
            Phương pháp này vượt trội hơn hẳn so với việc sử dụng phương thức <span class="code">readResolve</span>, vốn
            phức tạp và dễ gây lỗi.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Kiểm soát thực thể (instance control) là việc đảm bảo rằng một lớp chỉ có một số lượng thực thể nhất định,
            trường hợp phổ biến nhất là chỉ có một thực thể duy nhất (Singleton).
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: readResolve phức tạp và dễ lỗi 👎">
                <p>
                    Khi một lớp <span class="code">Serializable</span> cần duy trì đặc tính Singleton, bạn phải cung cấp
                    một phương thức <span class="code">readResolve</span>. Phương thức này được gọi sau khi đối tượng
                    được deserialize và cho phép bạn thay thế đối tượng vừa được tạo bằng một thực thể đã tồn tại.
                </p><br />
                <p><strong>Ví dụ về cách làm cũ (dùng <span class="code">readResolve</span>):</strong></p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Mặc dù hoạt động, cách này vẫn đòi hỏi sự cẩn thận. Nếu bạn quên <span
                        class="code">readResolve</span> hoặc triển khai sai, đặc tính Singleton sẽ bị phá vỡ.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: Enum Singleton ✅" />
        <p>
            Kể từ Java 5, cách tốt nhất tuyệt đối để triển khai một Singleton là dùng một <span
                class="code">enum</span>.
        </p><br />

        <p><strong>Cách làm tốt nhất:</strong></p><br />
        <CodeBlock :code="code_block.method2"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích vượt trội của Enum Singleton">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Ngắn gọn và Rõ ràng:</strong> Đây là cách triển khai ngắn gọn nhất có thể.</li>
                    <li><strong>An toàn tuyệt đối với Serialization:</strong> Java đảm bảo rằng bạn sẽ không bao giờ có
                        thể tạo ra một thực thể <span class="code">enum</span> thứ hai thông qua quá trình deserialize.
                        Bạn không cần phải viết <span class="code">readResolve</span>.</li>
                    <li><strong>An toàn tuyệt đối với Reflection:</strong> JVM cũng bảo vệ bạn khỏi các cuộc tấn công
                        bằng reflection.</li>
                    <li><strong>Đảm bảo Thread-safe:</strong> Việc khởi tạo <span class="code">enum</span> được JVM đảm
                        bảo an toàn trong môi trường đa luồng.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Nếu lớp của bạn cần phải là một Singleton, <strong>cách tốt nhất gần như trong
                mọi trường hợp là làm cho nó trở thành một <span class="code">enum</span> có một phần tử duy
                nhất</strong>. Nó cung cấp tất cả các đảm bảo bạn cần một cách miễn phí, không cần bất kỳ mã boilerplate
            phức tạp nào.
        </p><br />
    </div>
</template>
<style scoped></style>