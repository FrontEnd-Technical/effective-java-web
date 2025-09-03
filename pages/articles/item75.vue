<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 75: Include failure-capture information in detail messages'
})

import { code_block } from '~/data/item75'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Include failure-capture information in detail messages" (Bao gồm thông tin ghi lại lỗi trong
            thông báo chi tiết) có nghĩa là thông báo (detail message) của một exception nên <strong>chứa tất cả các giá
                trị của tham số và trường</strong> đã góp phần gây ra lỗi đó.
        </p><br />
        <p>
            Việc này cung cấp thông tin <strong>vô giá cho việc gỡ lỗi (debugging)</strong>, giúp lập trình viên nhanh
            chóng xác định được nguyên nhân gốc rễ của vấn đề.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Khi một chương trình thất bại, stack trace của exception thường là thứ duy nhất bạn có để chẩn đoán vấn đề.
            Một thông báo lỗi rõ ràng và đầy đủ thông tin là yếu tố quan trọng nhất để hiểu được chuyện gì đã xảy ra.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Thông báo lỗi vô dụng 👎">
                <p>
                    Một thông báo lỗi chung chung, không chứa bất kỳ dữ liệu nào, sẽ không giúp ích gì cho việc tìm ra
                    nguyên nhân.
                </p><br />
                <p><strong>Ví dụ về thông báo lỗi xấu:</strong></p><br />
                <p><span class="code">throw new IndexOutOfBoundsException();</span></p><br />
                <p>
                    Stack trace sẽ cho bạn biết lỗi xảy ra ở đâu, nhưng bạn sẽ không biết được giá trị của chỉ mục
                    (index) bị lỗi là bao nhiêu và giới hạn của mảng là gì.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp và Best Practices" />
        <p>
            Thông báo chi tiết của một exception nên được tạo ra để con người có thể đọc và hiểu. Nó nên chứa một cách
            ngắn gọn tất cả thông tin liên quan đến lỗi.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Cung cấp đầy đủ Ngữ cảnh ✅">
                <p>
                    Để làm cho thông báo lỗi trở nên hữu ích, hãy bao gồm tất-cả các giá trị của tham số và trường đã
                    dẫn đến exception.
                </p><br />

                <p><strong>Cách làm tốt nhất:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Với thông báo lỗi này, bạn sẽ ngay lập tức biết được vấn đề: <span
                        class="code">java.lang.IndexOutOfBoundsException: Index: -1, Size: 5</span>. Việc debug trở nên
                    dễ dàng hơn rất nhiều.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="Cung cấp các Accessor Method trong Exception tùy chỉnh">
                <p>
                    Đối với các exception tùy chỉnh, một thực hành tốt nữa là cung cấp các phương thức accessor để
                    chương trình có thể truy cập vào các thông tin lỗi này một cách có hệ thống.
                </p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Stack trace của một exception là công cụ chính để phân tích lỗi sau khi nó xảy
            ra. <strong>Hãy làm cho thông báo lỗi của bạn hữu ích nhất có thể</strong> bằng cách bao gồm tất cả các
            thông tin liên quan. Đừng bao giờ ném ra một exception với một thông báo trống hoặc chung chung.
        </p><br />
    </div>
</template>
<style scoped></style>