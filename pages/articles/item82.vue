<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 82: Document thread safety'
})

import { code_block } from '~/data/item82'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Document thread safety" (Tài liệu hóa tính an toàn luồng) có nghĩa là bạn phải <strong>ghi lại
                một cách rõ ràng và chính xác</strong> mức độ an toàn luồng (thread safety) của mỗi lớp bạn viết, trừ
            khi nó chỉ được dùng trong một luồng duy nhất.
        </p><br />
        <p>
            Việc này tạo ra một "hợp đồng" quan trọng, giúp người dùng biết cách sử dụng lớp của bạn một cách an toàn
            trong các ứng dụng đa luồng và tránh được các lỗi nghiêm trọng.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Cách một lớp hành xử khi được nhiều luồng truy cập là một phần cực kỳ quan trọng trong API của nó. Bạn phải
            tài liệu hóa rõ ràng những đảm bảo mà lớp của bạn cung cấp. Dưới đây là các mức độ phổ biến nhất, từ an toàn
            nhất đến kém an toàn nhất.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Các Mức độ An toàn Luồng">

                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Immutable (Bất biến):</strong> Các đối tượng của lớp này không thể bị thay đổi. Chúng
                        hoàn toàn an toàn để được chia sẻ giữa các luồng. Ví dụ: <span class="code">String</span>, <span
                            class="code">Long</span>.</li>
                    <li><strong>Unconditionally Thread-Safe (An toàn luồng vô điều kiện):</strong> Các đối tượng là khả
                        biến, nhưng có cơ chế đồng bộ hóa bên trong, an toàn để sử dụng đồng thời. Ví dụ: <span
                            class="code">AtomicLong</span>, <span class="code">ConcurrentHashMap</span>.</li>
                    <li><strong>Conditionally Thread-Safe (An toàn luồng có điều kiện):</strong> Giống như trên, nhưng
                        một số phương thức yêu cầu client phải tự đồng bộ hóa bên ngoài. Ví dụ: các iterator được trả về
                        bởi <span class="code">Collections.synchronizedMap</span>.</li>
                    <li><strong>Not Thread-Safe (Không an toàn luồng):</strong> Client <strong>phải</strong> tự thực
                        hiện việc đồng bộ hóa bên ngoài cho mọi chuỗi lời gọi phương thức. Ví dụ: <span
                            class="code">ArrayList</span>, <span class="code">HashMap</span>.</li>
                    <li><strong>Thread-Hostile (Thù địch với luồng):</strong> Lớp này không an toàn để sử dụng đồng thời
                        ngay cả khi client đã bao bọc mọi lời gọi bằng <span class="code">synchronized</span>.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Quy tắc vàng là: <strong>Mỗi lớp nên tài liệu hóa rõ ràng mức độ an toàn luồng của nó trong JavaDoc.</strong>
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Ví dụ về Tài liệu hóa">
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="Lưu ý về Khóa (Locking)">
                <p>
                    Đối với các lớp an toàn luồng có điều kiện hoặc không an toàn luồng, bạn nên tài liệu hóa rõ ràng
                    đối tượng khóa (lock object) nào mà client nên sử dụng để đồng bộ hóa.
                </p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Khóa <span class="code">private</span>:</strong> Nếu bạn sử dụng một đối tượng khóa
                        <span class="code">private</span> bên trong, client sẽ không thể đồng bộ hóa một cách hiệu quả.
                        Điều này phù hợp với các lớp an toàn luồng vô điều kiện.
                    </li>
                    <li><strong>Khóa công khai:</strong> Đối với các lớp không an toàn luồng, việc đồng bộ hóa trên
                        chính đối tượng (<span class="code">synchronized(this)</span>) là một quy ước phổ biến.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Việc tài liệu hóa tính an toàn luồng là một phần không thể thiếu của việc
            thiết kế API. Hãy <strong>xác định và ghi lại một cách nhất quán mức độ an toàn luồng</strong> cho mọi lớp
            bạn viết. Điều này sẽ giúp người dùng tránh được các lỗi đồng thời và làm cho hệ thống của bạn trở nên mạnh
            mẽ hơn.
        </p><br />
    </div>
</template>
<style scoped></style>