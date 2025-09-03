<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 39: Prefer annotations to naming patterns'
})

import { code_block } from '~/data/item39'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer annotations to naming patterns" (Ưu tiên annotation thay vì các mẫu đặt tên) có nghĩa là
            khi bạn cần đánh dấu các thành phần của chương trình (lớp, phương thức, trường) để một công cụ hoặc
            framework có thể xử lý chúng một cách đặc biệt, bạn nên <strong>luôn sử dụng annotation</strong> thay vì dựa
            vào các quy ước đặt tên.
        </p><br />
        <p>
            Annotation cung cấp một giải pháp <strong>mạnh mẽ, an toàn về kiểu và được kiểm tra bởi trình biên
                dịch</strong>, trong khi các mẫu đặt tên rất dễ gây lỗi và không an toàn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Naming Patterns (Mẫu đặt tên) 👎">
                <p>
                    Trước khi có annotation (trước Java 5), các framework thường yêu cầu lập trình viên tuân theo các
                    quy ước đặt tên để chúng có thể nhận diện và xử lý các phương thức đặc biệt. Ví dụ, framework JUnit
                    3 yêu cầu tất cả các phương thức test phải có tên bắt đầu bằng <span class="code">test</span>.
                </p><br />
                <p><strong>Ví dụ về cách làm sai (Naming Pattern):</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Nhược điểm của cách này:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Dễ lỗi:</strong> Một lỗi chính tả đơn giản (như <span class="code">tset</span> thay vì
                        <span class="code">test</span>) sẽ khiến công cụ bỏ qua phương thức đó một cách âm thầm, và bạn
                        sẽ có một bài test không bao giờ được chạy.
                    </li>
                    <li><strong>Không được kiểm tra bởi trình biên dịch:</strong> Trình biên dịch không biết gì về quy
                        ước đặt tên này, vì vậy nó không thể giúp bạn phát hiện lỗi.</li>
                    <li><strong>Không linh hoạt:</strong> Bạn không thể truyền thêm tham số hoặc thông tin vào một cái
                        tên.</li>
                    <li><strong>Gây "ô nhiễm" mã nguồn:</strong> Tên của phương thức bị buộc phải tuân theo một quy ước
                        cứng nhắc.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Giải pháp: Annotations ✅" />
        <p>Annotation là một dạng metadata mà bạn có thể đính kèm trực tiếp vào các thành phần của chương trình.</p>
        <br />

        <p><strong>Cách làm tốt nhất (JUnit 4/5):</strong></p><br />
        <CodeBlock :code="code_block.method2"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích vượt trội của Annotation">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>An toàn về kiểu:</strong> Nếu bạn gõ sai tên annotation (<span class="code">@Tset</span>
                        thay vì <span class="code">@Test</span>), trình biên dịch sẽ báo lỗi ngay lập tức.</li>
                    <li><strong>Linh hoạt và Mạnh mẽ:</strong> Annotation có thể có các tham số (parameters), cho phép
                        bạn cung cấp thêm thông tin.</li>
                </ul><br />
                <CodeBlock :code="code_block.method3"></CodeBlock>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Áp dụng cho mọi thành phần:</strong> Bạn có thể áp dụng annotation cho hầu hết mọi thứ:
                        lớp, phương thức, trường, tham số, biến cục bộ.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="Ứng dụng phổ biến nhất">
                <p>Annotation đã trở thành một phần không thể thiếu trong lập trình Java hiện đại:</p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Testing:</strong> JUnit (<span class="code">@Test</span>), TestNG (<span
                            class="code">@Test</span>).</li>
                    <li><strong>Frameworks:</strong> Spring (<span class="code">@Component</span>, <span
                            class="code">@Autowired</span>, <span class="code">@Service</span>), Jakarta EE (<span
                            class="code">@Inject</span>, <span class="code">@Entity</span>).</li>
                    <li><strong>Build Tools & Libraries:</strong> Lombok (<span class="code">@Data</span>, <span
                            class="code">@Builder</span>), Jackson (<span class="code">@JsonProperty</span>).</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Các mẫu đặt tên là một di tích của quá khứ. Bất cứ khi nào bạn cần đánh dấu
            một thành phần mã nguồn để xử lý đặc biệt, <strong>hãy luôn định nghĩa và sử dụng một annotation</strong>.
            Chúng an toàn hơn, mạnh mẽ hơn, linh hoạt hơn và là tiêu chuẩn trong ngành công nghiệp phần mềm hiện đại.
        </p><br />
    </div>
</template>
<style scoped></style>