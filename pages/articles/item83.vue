<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 83: Use lazy initialization judiciously'
})

import { code_block } from '~/data/item83'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use lazy initialization judiciously" (Sử dụng khởi tạo lười biếng một cách thận trọng) có nghĩa
            là bạn nên <strong>hạn chế việc trì hoãn khởi tạo một trường</strong> cho đến khi nó được sử dụng lần đầu
            tiên.
        </p><br />
        <p>
            Đối với hầu hết các trường hợp, <strong>khởi tạo thông thường (eager initialization) là lựa chọn tốt
                hơn</strong>: đơn giản hơn, rõ ràng hơn và thường không ảnh hưởng đến hiệu năng.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Khởi tạo lười biếng (lazy initialization) là một kỹ thuật tối ưu hóa, trong đó việc khởi tạo một trường được
            trì hoãn cho đến khi có một phương thức truy cập vào nó lần đầu tiên.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Cái giá phải trả của Lazy Initialization 👎">
                <p>Mặc dù nghe có vẻ hiệu quả, lazy initialization lại là một con dao hai lưỡi:</p><br />
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Làm phức tạp hóa mã nguồn:</strong> Nó đòi hỏi logic kiểm tra <span class="code">if
                            (field == null)</span> trong phương thức truy cập.</li>
                    <li><strong>Trong môi trường đa luồng:</strong> Việc triển khai lazy initialization một cách an toàn
                        (thread-safe) rất phức tạp và có thể làm giảm hiệu năng.</li>
                    <li><strong>Thường không cần thiết:</strong> Chi phí khởi tạo một trường thường rất nhỏ và có thể
                        được thực hiện ngay mà không ảnh hưởng đáng kể đến thời gian khởi động.</li>
                </ol><br />
                <p><strong>So sánh hai cách tiếp cận:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Quy tắc vàng là: <strong>"Trừ khi bạn có lý do chính đáng, hãy cứ khởi tạo các trường một cách bình
                thường."</strong></p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Khi nào thì Lazy Initialization thực sự Hữu ích? ✅">
                <p>
                    Chỉ có một vài tình huống mà lợi ích của lazy initialization vượt qua được sự phức tạp của nó:
                </p><br />

                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Khi một trường rất tốn kém để khởi tạo VÀ không phải lúc nào cũng cần đến:</strong> Nếu
                        việc khởi tạo một trường đòi hỏi nhiều tài nguyên (ví dụ: kết nối đến một dịch vụ ngoài) và
                        trường đó chỉ được sử dụng trong một số ít trường hợp.</li>
                    <li><strong>Để phá vỡ vòng lặp khởi tạo (initialization circularity):</strong> Khi việc khởi tạo của
                        lớp A phụ thuộc vào lớp B và ngược lại.</li>
                </ol><br />
                <p><strong>Ví dụ:</strong></p>
                <CodeBlock :code="code_block.method3"></CodeBlock>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> <strong>Khởi tạo thông thường (eager initialization) nên là lựa chọn mặc định
                của bạn</strong>. Nó đơn giản, sạch sẽ và hiệu quả. Chỉ sử dụng khởi tạo lười biếng (lazy
            initialization) khi bạn có một trường <strong>thực sự tốn kém</strong> để khởi tạo và bạn có <strong>dữ liệu
                đo lường</strong> cho thấy rằng việc trì hoãn khởi tạo đó sẽ mang lại một lợi ích hiệu năng đáng kể.
        </p><br />
    </div>
</template>
<style scoped></style>