<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 69: Use exceptions only for exceptional conditions'
})

import { code_block } from '~/data/item69'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use exceptions only for exceptional conditions" (Chỉ dùng exception cho các điều kiện đặc biệt)
            có nghĩa là bạn <strong>không bao giờ nên sử dụng exception để kiểm soát luồng (control flow) thông
                thường</strong> của một chương trình. Exception chỉ nên được dành riêng cho các <strong>tình huống lỗi
                thực sự</strong>.
        </p><br />
        <p>
            Việc lạm dụng exception cho control flow sẽ làm cho mã nguồn trở nên <strong>khó hiểu, chậm chạp và dễ gây
                lỗi</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Exception được thiết kế cho các điều kiện đặc biệt (exceptional conditions). Chúng làm gián đoạn luồng thực
            thi bình thường của chương trình một cách đột ngột.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Lạm dụng Exception cho Control Flow 👎">
                <p>
                    Một số lập trình viên có thể bị cám dỗ sử dụng exception để thoát khỏi một vòng lặp hoặc để báo hiệu
                    một trạng thái bình thường nào đó. Đây là một antipattern nghiêm trọng.
                </p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Hiệu năng kém:</strong> Việc tạo và ném một exception là một tác vụ <strong>cực kỳ tốn
                            kém</strong> so với các cấu trúc điều khiển luồng thông thường như <span
                            class="code">if-else</span>.</li>
                    <li><strong>Mã nguồn khó hiểu:</strong> Vòng lặp <span class="code">try-catch</span> làm che khuất
                        logic thực sự của chương trình.</li>
                </ul><br />
                <p><strong>Ví dụ kinh điển về cách làm sai (dùng exception để thoát vòng lặp):</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp và Best Practices" />
        <p>Hãy luôn ưu tiên các cơ chế kiểm tra trạng thái và control flow thông thường.</p>
        <div class="pl-3">
            <BlockOpinion opinion="Sử dụng các Phương pháp Kiểm tra Trạng thái ✅">
                <p>Hầu hết các lớp đều cung cấp các phương thức để kiểm tra trạng thái trước khi thực hiện một hành
                    động.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Thay vì gọi <span class="code">iterator.next()</span> và bắt <span
                            class="code">NoSuchElementException</span>, hãy luôn kiểm tra bằng <span
                            class="code">iterator.hasNext()</span> trước.</li>
                    <li>Thay vì truy cập <span class="code">arr[i]</span> và bắt <span
                            class="code">ArrayIndexOutOfBoundsException</span>, hãy luôn kiểm tra <span class="code">i <
                                arr.length</span>.</li>
                </ul><br />

                <p><strong>Cách làm tốt nhất:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="Thiết kế API tốt">
                <p>Khi viết API, đừng buộc người dùng phải dùng exception cho control flow. Hãy cung cấp các phương thức
                    kiểm tra trạng thái.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Cung cấp phương thức <span class="code">hasNext()</span>:</strong> Nếu bạn tạo một lớp
                        giống <span class="code">Iterator</span>.</li>
                    <li><strong>Trả về <span class="code">Optional</span> hoặc giá trị đặc biệt:</strong> Nếu một phương
                        thức có thể không tìm thấy kết quả, hãy trả về <span class="code">Optional.empty()</span> (Item
                        55) hoặc một giá trị đặc biệt như <span class="code">null</span> hoặc <span
                            class="code">false</span>.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy coi exception như một tín hiệu báo động khẩn cấp. <strong>Chỉ sử dụng
                chúng cho các điều kiện lỗi thực sự</strong>—những tình huống mà phương thức không thể hoàn thành công
            việc mà nó đã cam kết. Đối với các luồng điều khiển thông thường và có thể dự đoán được, hãy luôn sử dụng
            các phương pháp kiểm tra trạng thái, giá trị trả về đặc biệt, hoặc <span class="code">Optional</span>.
        </p><br />
    </div>
</template>
<style scoped></style>