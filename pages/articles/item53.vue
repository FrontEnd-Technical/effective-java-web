<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 53: Use varargs judiciously'
})

import { code_block } from '~/data/item53'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use varargs judiciously" (Sử dụng varargs một cách thận trọng) có nghĩa là bạn nên <strong>nhận
                thức được chi phí hiệu năng</strong> của varargs và <strong>tránh sử dụng chúng trong các tình huống
                nhạy cảm về hiệu năng</strong>.
        </p><br />
        <p>
            Varargs rất tiện lợi cho việc tạo các API linh hoạt, nhưng mỗi lần gọi đến một phương thức varargs, một
            <strong>mảng mới sẽ được tạo ra</strong>, điều này có thể ảnh hưởng đến hiệu năng nếu phương thức đó được
            gọi rất thường xuyên.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Varargs (variable arity arguments) cho phép một phương thức chấp nhận một số lượng đối số tùy ý.
        </p>
        <CodeBlock :code="code_block.method1"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Chi phí Hiệu năng">
                <p>
                    Mỗi khi bạn gọi một phương thức varargs, trình biên dịch sẽ tạo ra một mảng để chứa các đối số và
                    truyền mảng đó vào phương thức.
                </p><br />
                <p>
                    Việc cấp phát và sau đó thu hồi mảng này bởi Garbage Collector sẽ tốn chi phí. Nếu phương thức của
                    bạn được gọi hàng triệu lần trong một vòng lặp, chi phí này có thể trở nên đáng kể.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>
            Quy tắc vàng là: <strong>Trong 95% các trường hợp, varargs là tốt. Nhưng đối với 5% các trường hợp còn lại,
                khi hiệu năng là tối quan trọng, bạn phải cung cấp các phiên bản nạp chồng (overloaded).</strong>
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Giải pháp: Cung cấp các phiên bản Nạp chồng">
                <p>
                    Để giảm thiểu chi phí hiệu năng, bạn có thể cung cấp các phiên bản nạp chồng của phương thức cho các
                    trường hợp phổ biến nhất (ví dụ: không có đối số, một, hai, hoặc ba đối số). Các phiên bản này sẽ
                    không tạo ra mảng.
                </p><br />
                <p>
                    Phương thức varargs sẽ chỉ được gọi cho các trường hợp ít phổ biến hơn với số lượng đối số lớn hơn.
                </p><br />
                <p>
                    <strong>Ví dụ kinh điển: <span class="code">EnumSet.of</span></strong><br />
                    Lớp <span class="code">EnumSet</span> trong JDK là một ví dụ hoàn hảo. Nó cung cấp các phiên bản nạp
                    chồng cho từ một đến năm tham số, và một phiên bản varargs cho các trường hợp còn lại.
                </p><br />

                <p><strong>✅ Cách làm tốt nhất:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Varargs là một công cụ tuyệt vời để tạo ra các API linh hoạt và dễ đọc. Hãy cứ
            sử dụng chúng. Tuy nhiên, nếu bạn xác định được một phương thức varargs là <strong>điểm nghẽn cổ chai về
                hiệu năng</strong> thông qua việc đo lường (profiling), hãy áp dụng mẫu thiết kế nạp chồng: <strong>cung
                cấp các phiên bản cụ thể cho các trường hợp phổ biến nhất</strong> để tránh chi phí tạo mảng không cần
            thiết.
        </p><br />
    </div>
</template>
<style scoped></style>