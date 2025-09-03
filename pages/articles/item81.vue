<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 81: Prefer concurrency utilities to wait and notify'
})
</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer concurrency utilities to `wait` and `notify`" (Ưu tiên các công cụ đồng thời thay vì
            `wait` và `notify`) có nghĩa là bạn nên <strong>hầu như không bao giờ</strong> sử dụng các cơ chế <span
                class="code">wait()</span> và <span class="code">notify()</span>/<span class="code">notifyAll()</span> ở
            cấp thấp. Thay vào đó, hãy <strong>luôn sử dụng các công cụ trừu tượng cấp cao</strong> trong package <span
                class="code">java.util.concurrent</span>.
        </p><br />
        <p>
            Làm việc trực tiếp với <span class="code">wait</span> và <span class="code">notify</span> cực kỳ
            <strong>phức tạp và dễ gây lỗi</strong>, trong khi các công cụ đồng thời cung cấp các giải pháp mạnh mẽ, an
            toàn và dễ sử dụng hơn rất nhiều.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            <span class="code">wait</span> và <span class="code">notify</span> là các cơ chế nguyên thủy để các luồng
            (threads) có thể giao tiếp và phối hợp với nhau. Tuy nhiên, việc sử dụng chúng một cách đúng đắn là cực kỳ
            khó.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Sự phức tạp và nguy hiểm của wait/notify 👎">
                <p>Để sử dụng <span class="code">wait</span> và <span class="code">notify</span> một cách chính xác, bạn
                    phải:</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Luôn đặt chúng bên trong một khối <span class="code">synchronized</span>.</li>
                    <li>Luôn gọi <span class="code">wait</span> bên trong một vòng lặp <span class="code">while</span>
                        để chống lại "spurious wakeups" (tỉnh giấc giả).</li>
                    <li>Xử lý đúng <span class="code">InterruptedException</span>.</li>
                    <li>Quyết định khi nào dùng <span class="code">notify</span> và khi nào dùng <span
                            class="code">notifyAll</span> (gần như luôn luôn phải dùng <span
                            class="code">notifyAll</span>).</li>
                </ul><br />
                <p>Việc bỏ sót bất kỳ một bước nào trong số này có thể dẫn đến các lỗi nghiêm trọng về liveness (như
                    deadlock) hoặc safety (như race conditions).</p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: Các Công cụ trong java.util.concurrent ✅" />
        <p>
            Package <span class="code">java.util.concurrent</span> chứa một bộ công cụ phong phú, chia thành ba nhóm
            chính, cung cấp các giải pháp thay thế vượt trội cho <span class="code">wait</span> và <span
                class="code">notify</span>.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Executor Framework">
                <p>
                    Như đã thảo luận trong Item 80, Executor Framework giúp bạn quản lý việc thực thi các tác vụ. Nó
                    thay thế hoàn toàn nhu cầu phải tự tạo và quản lý luồng.
                </p>
            </BlockOpinion>
            <BlockOpinion opinion="2. Các Collection đồng thời (Concurrent Collections)">
                <p>
                    Các collection này được thiết kế để quản lý việc đồng bộ hóa bên trong, giúp bạn không cần phải tự
                    khóa (lock) chúng.
                </p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong><span class="code">BlockingQueue&lt;E&gt;</span>:</strong> Đây là sự thay thế hoàn hảo
                        cho các vòng lặp <span class="code">wait-notify</span> trong các kịch bản producer-consumer. Một
                        luồng có thể an toàn <span class="code">put</span> một phần tử vào queue, và một luồng khác có
                        thể <span class="code">take</span> nó ra.</li>
                    <li><strong><span class="code">ConcurrentHashMap</span>:</strong> Một phiên bản <span
                            class="code">HashMap</span> có hiệu năng cao cho môi trường đa luồng.</li>
                </ul><br />

            </BlockOpinion>
            <BlockOpinion opinion="3. Các công cụ Đồng bộ hóa (Synchronizers)">
                <p>Đây là các đối tượng cho phép các luồng chờ đợi lẫn nhau.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong><span class="code">CountDownLatch</span>:</strong> Cho phép một hoặc nhiều luồng chờ đợi
                        cho đến khi một tập hợp các thao tác hoàn thành.</li>
                    <li><strong><span class="code">Semaphore</span>:</strong> Giới hạn số lượng luồng có thể truy cập
                        vào một tài nguyên cùng một lúc.</li>
                    <li><strong><span class="code">CyclicBarrier</span>:</strong> Cho phép một nhóm các luồng chờ đợi
                        nhau tại một điểm chung.</li>
                    <li><strong><span class="code">Exchanger</span>:</strong> Cho phép hai luồng trao đổi dữ liệu tại
                        một điểm đồng bộ hóa.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy coi <span class="code">wait</span> và <span class="code">notify</span> như
            là "ngôn ngữ máy" của lập trình đồng thời. Bạn có thể dùng chúng, nhưng bạn không nên. Thay vào đó, hãy
            <strong>luôn ưu tiên sử dụng các công cụ cấp cao trong <span
                    class="code">java.util.concurrent</span></strong>. Chúng mạnh mẽ hơn, an toàn hơn, dễ sử dụng hơn và
            sẽ giúp bạn xây dựng các ứng dụng đa luồng đúng đắn và hiệu quả.
        </p><br />
    </div>
</template>
<style scoped></style>