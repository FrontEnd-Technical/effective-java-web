<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 78: Synchronize access to shared mutable data'
})

import { code_block } from '~/data/item78'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Synchronize access to shared mutable data" (Đồng bộ hóa việc truy cập vào dữ liệu khả biến được
            chia sẻ) có nghĩa là bất cứ khi nào bạn có <strong>nhiều luồng (threads) cùng đọc và ghi vào cùng một dữ
                liệu có thể thay đổi</strong>, bạn <strong>bắt buộc phải sử dụng cơ chế đồng bộ hóa</strong>.
        </p><br />
        <p>
            Nếu không, chương trình của bạn có thể bị lỗi nghiêm trọng do <strong>thread interference</strong> (xung đột
            luồng) và <strong>memory consistency errors</strong> (lỗi nhất quán bộ nhớ).
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Khi một luồng đang sửa đổi dữ liệu, một luồng khác có thể đọc dữ liệu đó ở trạng thái không nhất quán. Tệ
            hơn, các thay đổi được thực hiện bởi một luồng có thể không hiển thị với các luồng khác.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Dữ liệu bị hỏng 👎">
                <p>
                    Không có đồng bộ hóa, một thao tác tưởng chừng như đơn giản như <span class="code">count++</span>
                    thực chất lại bao gồm ba bước: (1) đọc giá trị, (2) tăng giá trị, (3) ghi lại giá trị. Nếu hai luồng
                    cùng thực hiện, chúng có thể cùng đọc một giá trị cũ, dẫn đến kết quả sai.
                </p><br />
                <p><strong>Ví dụ kinh điển về phương thức không an toàn (non-thread-safe):</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Nếu 1000 luồng cùng gọi <span class="code">increment()</span> 1000 lần, kết quả cuối cùng của <span
                        class="code">count</span> sẽ gần như chắc chắn <strong>không phải</strong> là 1,000,000.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp và Best Practices" />
        <p>Để đảm bảo rằng các thay đổi trên dữ liệu được chia sẻ diễn ra một cách an toàn và nhất quán, bạn phải sử
            dụng đồng bộ hóa.</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Sử dụng từ khóa synchronized ✅">
                <p>Đây là cơ chế đồng bộ hóa cơ bản nhất trong Java. Nó đảm bảo hai điều quan trọng:</p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Mutual Exclusion (Loại trừ tương hỗ):</strong> Chỉ một luồng có thể thực thi một khối mã
                        <span class="code">synchronized</span> trên cùng một đối tượng tại một thời điểm.
                    </li>
                    <li><strong>Visibility (Tính hiển thị):</strong> Đảm bảo rằng các thay đổi về trạng thái được thực
                        hiện trong một khối <span class="code">synchronized</span> sẽ được hiển thị cho tất cả các luồng
                        khác.</li>
                </ul><br />

                <p><strong>Cách làm tốt nhất (sửa lại ví dụ trên):</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Sử dụng các Lớp trong java.util.concurrent">
                <p>
                    Java 5 giới thiệu một bộ công cụ đa luồng cực kỳ mạnh mẽ trong package <span
                        class="code">java.util.concurrent</span>. Hãy <strong>luôn ưu tiên sử dụng các công cụ cấp cao
                        này</strong> thay vì tự dùng <span class="code">synchronized</span> ở cấp thấp.
                </p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Các lớp Atomic:</strong> Dùng <span class="code">AtomicLong</span>, <span
                            class="code">AtomicInteger</span> cho các biến đếm đơn giản. Chúng nhanh hơn và an toàn.
                    </li>
                    <li><strong>Các Collection đồng bộ:</strong> Dùng <span class="code">ConcurrentHashMap</span> thay
                        vì <span class="code">Collections.synchronizedMap(new HashMap&lt;&gt;())</span>.</li>
                    <li><strong>Locks:</strong> Dùng <span class="code">ReentrantLock</span> cho các kịch bản khóa phức
                        tạp hơn.</li>
                </ul>
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Bất cứ khi nào bạn viết hoặc bảo trì một lớp có chứa một trường khả biến có
            thể được truy cập bởi nhiều luồng, hãy đảm bảo rằng <strong>mọi truy cập vào trường đó (cả đọc và ghi) đều
                được đồng bộ hóa</strong>. Hãy ưu tiên sử dụng các lớp tiện ích trong <span
                class="code">java.util.concurrent</span> và chỉ dùng đến <span class="code">synchronized</span> khi cần
            thiết.
        </p><br />
    </div>
</template>
<style scoped></style>