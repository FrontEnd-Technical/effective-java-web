<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 80: Prefer executors, tasks, and streams to threads'
})

import { code_block } from '~/data/item80'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer executors, tasks, and streams to threads" (Ưu tiên executor, task, và stream thay vì
            thread) có nghĩa là bạn nên <strong>sử dụng các cơ chế trừu tượng cấp cao</strong> của Java để xử lý công
            việc đồng thời, thay vì làm việc trực tiếp với các đối tượng <span class="code">Thread</span> ở cấp thấp.
        </p><br />
        <p>
            Việc này giúp bạn <strong>tách biệt logic nghiệp vụ khỏi việc quản lý luồng</strong>, làm cho mã nguồn trở
            nên <strong>ngắn gọn, rõ ràng, an toàn và mạnh mẽ hơn</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Làm việc trực tiếp với <span class="code">Thread</span> giống như việc lắp ráp một chiếc máy tính từ các
            linh kiện riêng lẻ. Bạn có thể làm được, nhưng nó rất phức tạp và dễ lỗi. Executor Framework cung cấp cho
            bạn một "dàn máy" đã được lắp ráp sẵn, mạnh mẽ và dễ sử dụng.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Làm việc trực tiếp với Thread 👎">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Khó quản lý:</strong> Bạn phải tự xử lý việc tạo, khởi động, và dọn dẹp luồng.</li>
                    <li><strong>Không có cơ chế trả về giá trị:</strong> <span class="code">Thread</span> không cung cấp
                        một cách dễ dàng để lấy kết quả từ một tác vụ.</li>
                    <li><strong>Khó kiểm soát tài nguyên:</strong> Việc tạo ra quá nhiều luồng có thể làm cạn kiệt tài
                        nguyên hệ thống.</li>
                    <li><strong>Mã nguồn phức tạp:</strong> Logic quản lý luồng bị trộn lẫn với logic nghiệp vụ.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Giải pháp: Các Cơ chế cấp cao ✅" />
        <p>
            Java cung cấp các cơ chế trừu tượng tuyệt vời để bạn không cần phải bận tâm đến việc quản lý luồng.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="1. Executor Framework (java.util.concurrent)">
                <p>Đây là trái tim của lập trình đồng thời hiện đại trong Java. Nó bao gồm:</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong><span class="code">ExecutorService</span>:</strong> Một interface đại diện cho một dịch
                        vụ có khả năng thực thi các tác vụ.</li>
                    <li><strong><span class="code">ThreadPool</span>:</strong> Một tập hợp các luồng được quản lý. Các
                        factory method trong <span class="code">Executors</span> giúp bạn tạo chúng dễ dàng.</li>
                    <li><strong><span class="code">Task</span> (<span class="code">Runnable</span>, <span
                                class="code">Callable</span>):</strong> Đơn vị công việc. <span
                            class="code">Callable&lt;V&gt;</span> mạnh hơn vì nó có thể trả về một giá trị.</li>
                    <li><strong><span class="code">Future&lt;V&gt;</span>:</strong> Một đối tượng đại diện cho kết quả
                        của một tác vụ sẽ hoàn thành trong tương lai.</li>
                </ul><br />

                <p><strong>Cách làm tốt nhất:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Stream song song (parallelStream())">
                <p>
                    Đối với các tác vụ xử lý dữ liệu, stream song song (Item 48) là một lựa chọn còn đơn giản hơn nữa.
                    Nó tự động chia nhỏ công việc và thực thi trên một <span class="code">ForkJoinPool</span> chung.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="3. CompletableFuture (Java 8+)">
                <p>
                    Đối với các luồng công việc (workflows) phức tạp, nơi các tác vụ phụ thuộc lẫn nhau, <span
                        class="code">CompletableFuture</span> cung cấp một API cực kỳ mạnh mẽ để kết hợp và xử lý các
                    tác vụ bất đồng bộ.
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy ngừng việc tự quản lý <span class="code">Thread</span>. <strong>Hãy coi
                các tác vụ (tasks) là đơn vị công việc và các executor là cơ chế để thực thi chúng</strong>. Bằng cách
            sử dụng các công cụ cấp cao trong <span class="code">java.util.concurrent</span>, bạn có thể viết mã đồng
            thời một cách an toàn và hiệu quả hơn rất nhiều.
        </p><br />
    </div>
</template>
<style scoped></style>