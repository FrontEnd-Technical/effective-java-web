<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 35: Use instance fields instead of ordinals'
})

import { code_block } from '~/data/item35'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use instance fields instead of ordinals" (Dùng các trường của thực thể thay vì thứ tự) có nghĩa
            là bạn <strong>không bao giờ nên lấy dữ liệu từ thứ tự (ordinal)</strong> của một hằng số <span
                class="code">enum</span>. Thay vào đó, hãy <strong>lưu trữ dữ liệu đó trực tiếp vào các trường (instance
                fields)</strong> của <span class="code">enum</span>.
        </p><br />
        <p>
            Việc phụ thuộc vào <span class="code">ordinal()</span> là một thực hành tồi, làm cho mã nguồn trở nên
            <strong>mong manh, khó bảo trì và dễ gây lỗi</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Sự nguy hiểm của ordinal() 👎">
                <p>
                    Mỗi hằng số trong một <span class="code">enum</span> có một thứ tự (ordinal) dựa trên vị trí khai
                    báo của nó (bắt đầu từ 0). Phương thức <span class="code">ordinal()</span> trả về con số này.
                </p><br />
                <p>
                    Vấn đề cốt lõi là <strong>thứ tự này cực kỳ không ổn định</strong>. Nếu bạn thay đổi thứ tự các hằng
                    số, thêm một hằng số mới vào giữa, hoặc xóa một hằng số, giá trị <span class="code">ordinal()</span>
                    của các hằng số khác sẽ thay đổi, làm phá vỡ hoàn toàn logic của chương trình.
                </p><br />
                <p><strong>Ví dụ về cách làm sai:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Tại sao lại nguy hiểm?</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Nếu bạn quyết định thêm một hằng số mới cho một nghệ sĩ solo chơi hai nhạc cụ: <span
                            class="code">SOLO_WITH_TWO_INSTRUMENTS</span>.</li>
                    <li>Và bạn chèn nó vào sau <span class="code">SOLO</span>.</li>
                    <li>Ngay lập tức, <span class="code">DUET.numberOfMusicians()</span> sẽ trả về <span
                            class="code">3</span> thay vì <span class="code">2</span>, và tất cả các hằng số sau đó cũng
                        sẽ sai. Đây là một lỗi logic rất khó tìm.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Giải pháp: Sử dụng Instance Fields ✅" />
        <p>
            Cách làm đúng là lưu trữ dữ liệu mà bạn cần trực tiếp vào một trường của <span class="code">enum</span> và
            khởi tạo nó trong constructor.
        </p><br />

        <p><strong>Cách làm tốt nhất:</strong></p><br />
        <CodeBlock :code="code_block.method2"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Lợi ích vượt trội:">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Mạnh mẽ và An toàn:</strong> Bây giờ, giá trị trả về được gắn chặt với hằng số, không
                        phải vị trí của nó. Bạn có thể tự do sắp xếp lại, thêm hoặc xóa các hằng số mà không sợ làm hỏng
                        logic.</li>
                    <li><strong>Linh hoạt:</strong> Bạn có thể có nhiều hằng số cùng chia sẻ một giá trị trường, điều mà
                        <span class="code">ordinal()</span> không thể làm được.
                    </li>
                    <li><strong>Dễ đọc và dễ hiểu:</strong> Mã nguồn trở nên rõ ràng hơn. Nhìn vào <span
                            class="code">SOLO(1)</span>, bạn biết ngay giá trị của nó là 1.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy coi phương thức <span class="code">ordinal()</span> như là một chi tiết
            triển khai nội bộ của <span class="code">EnumSet</span> và <span class="code">EnumMap</span>. <strong>Không
                bao giờ sử dụng <span class="code">ordinal()</span> trong mã nguồn của bạn.</strong> Thay vào đó, hãy
            luôn sử dụng các <strong>trường của thực thể (instance fields)</strong> để liên kết dữ liệu với các hằng số
            <span class="code">enum</span>.
        </p><br />
    </div>
</template>
<style scoped></style>