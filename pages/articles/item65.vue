<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 65: Prefer interfaces to reflection'
})

import { code_block } from '~/data/item65'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer interfaces to reflection" (Ưu tiên interface thay vì reflection) có nghĩa là bạn nên
            <strong>hầu như không bao giờ</strong> sử dụng <span class="code">java.lang.reflect</span> (reflection)
            trong lập trình ứng dụng thông thường. Thay vào đó, hãy <strong>truy cập các đối tượng thông qua interface
                hoặc một lớp cha</strong> đã biết.
        </p><br />
        <p>
            Reflection là một công cụ rất mạnh mẽ nhưng cũng cực kỳ nguy hiểm, nó làm mất đi những lợi ích cốt lõi của
            việc kiểm tra kiểu tĩnh (static typing) trong Java.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Reflection cho phép bạn kiểm tra và thao tác với các lớp, phương thức, và trường tại thời điểm chạy
            (runtime), ngay cả khi chúng là <span class="code">private</span>.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Cái giá phải trả của Reflection 👎">
                <p>Việc sử dụng reflection đi kèm với một cái giá rất đắt:</p><br />
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Mất an toàn kiểu tại thời điểm biên dịch:</strong> Trình biên dịch không thể giúp bạn
                        phát hiện lỗi. Lỗi sẽ chỉ xảy ra lúc chạy và gây sập chương trình.</li>
                    <li><strong>Mã nguồn dài dòng và khó đọc:</strong> Mã nguồn sử dụng reflection rất phức tạp, khó
                        hiểu và khó bảo trì.</li>
                    <li><strong>Hiệu năng rất kém:</strong> Các thao tác reflection chậm hơn rất nhiều so với việc gọi
                        phương thức trực tiếp.</li>
                    <li><strong>Rủi ro bảo mật:</strong> Reflection có thể phá vỡ các cơ chế đóng gói và bảo mật của ứng
                        dụng.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Giải pháp và Best Practices" />
        <p>
            Trong hầu hết các trường hợp, bạn có thể đạt được mục tiêu của mình bằng các kỹ thuật hướng đối tượng thông
            thường mà không cần đến reflection.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Sử dụng Interface và Factory ✅">
                <p>
                    Nếu bạn cần tạo một thực thể của một lớp mà bạn không biết trước tại thời điểm biên dịch, cách tốt
                    nhất là <strong>sử dụng một interface</strong> mà lớp đó implement.
                </p><br />
                <p><strong>Ví dụ: Thay thế <span class="code">Class.forName().newInstance()</span></strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <CodeBlock :code="code_block.method2"></CodeBlock>

            </BlockOpinion>
            <BlockOpinion opinion="Khi nào thì Reflection hữu ích?">
                <p>
                    Chỉ có một số ít trường hợp mà reflection là cần thiết và hợp lệ, chủ yếu là trong việc <strong>xây
                        dựng các framework và công cụ</strong>.
                </p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Framework Dependency Injection (DI):</strong> Spring sử dụng reflection để quét các
                        annotation (<span class="code">@Autowired</span>) và tự động "tiêm" các dependency.</li>
                    <li><strong>Thư viện Serialization:</strong> Các thư viện như Jackson và Gson dùng reflection để đọc
                        các trường của một đối tượng và chuyển nó thành JSON.</li>
                    <li><strong>Các công cụ Testing:</strong> JUnit và Mockito dùng reflection để gọi các phương thức
                        test hoặc tạo các đối tượng mock.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Đối với lập trình ứng dụng thông thường, <strong>hãy tránh xa
                reflection</strong>. Nó làm cho mã của bạn không an toàn, chậm và phức tạp. Hãy luôn ưu tiên sử dụng các
            phương thức truy cập thông thường thông qua interface. Hãy coi reflection như một công cụ dành riêng cho các
            chuyên gia xây dựng framework.
        </p><br />
    </div>
</template>
<style scoped></style>