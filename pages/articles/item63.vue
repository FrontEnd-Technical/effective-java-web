<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 63: Beware the performance of string concatenation'
})

import { code_block } from '~/data/item63'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Beware the performance of string concatenation" (Cẩn thận với hiệu năng của việc nối chuỗi) cảnh
            báo rằng việc <strong>sử dụng toán tử <span class="code">+</span> để nối chuỗi trong một vòng lặp là cực kỳ
                không hiệu quả</strong>.
        </p><br />
        <p>
            Thay vào đó, bạn nên <strong>luôn sử dụng <span class="code">StringBuilder</span></strong> để xây dựng các
            chuỗi phức tạp hoặc nối chuỗi trong vòng lặp. Việc này nhanh hơn đáng kể.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Toán tử <span class="code">+</span> trông có vẻ tiện lợi, nhưng nó che giấu một chi phí hiệu năng lớn.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Nối chuỗi bằng + trong vòng lặp rất chậm 👎">
                <p>
                    <span class="code">String</span> trong Java là một đối tượng <strong>bất biến (immutable)</strong>.
                    Điều này có nghĩa là mỗi khi bạn nối hai chuỗi, một đối tượng <span class="code">String</span>
                    <em>hoàn toàn mới</em> sẽ được tạo ra.
                </p><br />
                <p>
                    Khi bạn làm điều này trong một vòng lặp, bạn sẽ tạo ra rất nhiều đối tượng trung gian không cần
                    thiết. Thuật toán này có độ phức tạp thời gian là <strong>bậc hai (O(n²))</strong>, nghĩa là thời
                    gian thực thi sẽ tăng lên một cách chóng mặt khi số lượng chuỗi tăng lên.
                </p><br />
                <p><strong>Ví dụ về cách làm sai:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: StringBuilder ✅" />
        <p>
            <span class="code">StringBuilder</span> là một lớp khả biến (mutable) được thiết kế đặc biệt cho việc xây
            dựng chuỗi. Nó hoạt động bằng cách sử dụng một mảng ký tự nội bộ, tránh việc phải tạo ra các đối tượng mới
            liên tục.
        </p><br />

        <p><strong>Cách làm tốt nhất:</strong></p>
        <CodeBlock :code="code_block.method2"></CodeBlock>
        <p>
            Phiên bản này có độ phức tạp thời gian là <strong>tuyến tính (O(n))</strong> và nhanh hơn phiên bản dùng
            toán tử <span class="code">+</span> hàng trăm, thậm chí hàng ngàn lần đối với các chuỗi lớn.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Lưu ý: Khi nào thì dùng + được?">
                <p>
                    Trình biên dịch Java hiện đại rất thông minh. Khi bạn viết một câu lệnh nối chuỗi đơn giản trên một
                    dòng, nó sẽ tự động chuyển đổi nó thành <span class="code">StringBuilder</span> cho bạn.
                </p>
                <CodeBlock :code="code_block.method3"></CodeBlock>
                <p>
                    Vì vậy, đối với các phép nối chuỗi đơn giản, không nằm trong vòng lặp, việc sử dụng <span
                        class="code">+</span> là hoàn toàn chấp nhận được và dễ đọc hơn.
                </p><br />
            </BlockOpinion>
        </div>
        <p><strong>Kết luận:</strong> Quy tắc rất rõ ràng:</p><br />
        <ul class="list-disc pl-5 mt-3 space-y-1.5">
            <li>Đối với việc nối chuỗi <strong>trên một dòng hoặc với số lượng nhỏ, cố định</strong>, hãy cứ
                <strong>dùng toán tử <span class="code">+</span></strong> cho dễ đọc.
            </li>
            <li>Đối với việc nối chuỗi <strong>trong vòng lặp hoặc khi cần xây dựng một chuỗi phức tạp</strong>, hãy
                <strong>luôn sử dụng <span class="code">StringBuilder</span></strong> để đảm bảo hiệu năng tốt.
            </li>
        </ul>
    </div>
</template>
<style scoped></style>