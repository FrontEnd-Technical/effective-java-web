<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 79: Avoid excessive synchronization'
})

import { code_block } from '~/data/item79'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Avoid excessive synchronization" (Tránh đồng bộ hóa quá mức) có nghĩa là bạn nên <strong>giữ cho
                các khối mã <span class="code">synchronized</span> nhỏ nhất có thể</strong> và <strong>không bao giờ giữ
                khóa (lock) trong một thời gian dài</strong>.
        </p><br />
        <p>
            Đồng bộ hóa là cần thiết để đảm bảo tính đúng đắn, nhưng lạm dụng nó có thể dẫn đến <strong>hiệu năng kém,
                deadlock (khóa chết), và liveness failures (lỗi sống)</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Trong khi việc thiếu đồng bộ hóa gây ra các lỗi về an toàn (safety failures), thì việc đồng bộ hóa quá mức
            lại gây ra các lỗi về hiệu năng và khả năng sống (liveness).
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Cái giá phải trả của Đồng bộ hóa quá mức 👎">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Giảm hiệu năng:</strong> Đồng bộ hóa hạn chế khả năng thực thi song song của các luồng.
                        Nếu một vùng <span class="code">synchronized</span> quá lớn hoặc thực hiện các tác vụ tốn thời
                        gian (như I/O), hiệu năng của toàn bộ hệ thống sẽ bị ảnh hưởng nghiêm trọng.</li>
                    <li><strong>Nguy cơ Deadlock và Livelock:</strong> Nếu bạn gọi một phương thức "ngoại lai" (alien
                        method) - một phương thức được thiết kế để được ghi đè hoặc được cung cấp bởi client - từ bên
                        trong một khối <span class="code">synchronized</span>, bạn đang tự đặt mình vào nguy cơ
                        deadlock.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Giải pháp và Best Practices" />
        <p>Quy tắc vàng là: <strong>Bên trong một khối <span class="code">synchronized</span>, đừng làm nhiều hơn những
                gì bạn phải làm.</strong></p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Giữ cho các khối synchronized nhỏ gọn">
                <p>
                    Chỉ đặt các dòng mã thực sự cần truy cập vào dữ liệu được chia sẻ vào bên trong khối <span
                        class="code">synchronized</span>. Hãy di chuyển tất cả các công việc khác ra bên ngoài.
                </p><br />
                <p><strong>❌ Cách làm sai (khối <span class="code">synchronized</span> quá lớn):</strong></p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>✅ Cách làm tốt nhất (thu hẹp phạm vi):</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Ưu tiên các Collection đồng bộ và Lớp Atomic">
                <p>
                    Thay vì tự quản lý việc đồng bộ hóa bằng <span class="code">synchronized</span>, hãy <strong>ưu tiên
                        sử dụng các lớp trong <span class="code">java.util.concurrent</span></strong>.
                </p><br />

                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Dùng <span class="code">ConcurrentHashMap</span> thay vì <span
                            class="code">Collections.synchronizedMap</span>.</li>
                    <li>Dùng <span class="code">CopyOnWriteArrayList</span> cho các <span class="code">List</span> được
                        đọc nhiều và ghi ít.</li>
                    <li>Dùng <span class="code">AtomicLong</span> cho các biến đếm.</li>
                </ul><br />
                <p>Những lớp này được các chuyên gia tối ưu hóa để có hiệu năng cao nhất trong môi trường đa luồng.</p>
                <br />
            </BlockOpinion>
            <BlockOpinion opinion="3. Thiết kế các Lớp Bất biến (Immutable)">
                <p>
                    Cách tốt nhất để tránh phải đồng bộ hóa là không chia sẻ dữ liệu khả biến. Hãy cố gắng làm cho các
                    đối tượng của bạn trở nên bất biến (Item 17). Các đối tượng bất biến có thể được chia sẻ tự do giữa
                    các luồng mà không cần bất kỳ sự đồng bộ hóa nào.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Đồng bộ hóa là cần thiết cho sự đúng đắn, nhưng nó là con dao hai lưỡi. Để duy
            trì hiệu năng tốt và tránh các lỗi deadlock, hãy <strong>giữ cho các vùng <span
                    class="code">synchronized</span> của bạn ngắn nhất có thể</strong>. Hãy di chuyển các công việc tốn
            thời gian và các lời gọi đến phương thức ngoại lai ra khỏi các khối đồng bộ hóa.
        </p><br />
    </div>
</template>
<style scoped></style>