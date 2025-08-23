<script setup="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 4: Enforce noninstantiability with a private constructor'
})

import { code_block } from '~/data/item4'

</script>

<template>
    <div class="main">
        <p>Nguyên tắc "Enforce noninstantiability with a private constructor" (Thực thi việc không thể khởi tạo bằng một
            constructor private) có nghĩa là bạn nên <strong>ngăn chặn việc tạo thực thể (instance) của một lớp nếu lớp
                đó không
                được thiết kế để có thực thể.</strong></p><br>
        <p>Cách tốt nhất để làm điều này là tạo ra một <strong>constructor</strong> <span
                class="code-class">private</span> duy nhất và trống. Điều này đặc biệt hữu ích cho các lớp tiện ích
            (utility classes).</p><br>
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc"></Heading1>
        <div class="pl-3">
            <p>Có những lớp không bao giờ cần được khởi tạo. Chúng chỉ tồn tại như một "ngôi nhà" để chứa các phương
                thức và hằng số <span class="code-class">static</span> liên quan đến nhau. Ví dụ điển hình là các lớp
                trong JDK như <span class="code-class">java.lang.Math</span> hay
                <span class="code-class">java.util.Collections</span>. Sẽ không có ý nghĩa gì khi viết <span
                    class="code-class">new Math()</span> hay <span class="code-class">new Collections()</span>.
            </p><br>
            <p><strong>Vấn đề là gì?</strong></p>
            <p>Nếu bạn không cung cấp bất kỳ constructor nào, trình biên dịch Java sẽ tự động tạo ra một constructor
                <span class="code-class">public</span> mặc định và không tham số. Điều này cho phép người dùng tạo ra
                các thực thể vô nghĩa của lớp tiện
                ích, gây nhầm lẫn và lãng phí bộ nhớ.
            </p><br>
            <p><strong>Giải pháp:</strong></p>
            <p>Bằng cách khai báo một constructor <span class="code-class">private</span>, bạn sẽ ngăn chặn trình biên
                dịch tạo ra constructor mặc định. Điều này làm cho lớp không thể được khởi tạo từ bên ngoài.</p><br>
            <p><strong>Cách triển khai tốt nhất:</strong></p>
            <p>Để làm cho lớp thực sự không thể khởi tạo, ngay cả từ bên trong chính lớp đó hoặc thông qua reflection,
                bạn nên ném ra một <span class="code-class">AssertionError</span> bên trong constructor private.</p>
            <CodeBlock :code="code_block.method1"></CodeBlock>
            <p>Cách này có hai lợi ích:</p>
            <ul class="list-disc pl-3">
                <li>Thông báo rõ ràng cho bất kỳ ai đọc mã nguồn rằng lớp này không dành cho việc khởi tạo.</li>
                <li>Ngăn chặn việc kế thừa từ lớp này (vì lớp con không thể gọi constructor <span
                        class="code-class">super()</span> của lớp cha).</li>
            </ul>
        </div>
        <br>
        <hr><br>
        <Heading1 title="Ứng dụng trong thực tế"></Heading1>
        <p>Nguyên tắc này được áp dụng gần như độc quyền cho <strong>các lớp tiện ích (utility classes)</strong>. Đây là
            những lớp chỉ chứa các thành viên <span class="code-class">static</span> và không có trạng thái (state).</p>
        <div class="pl-3">
            <BlockOpinion opinion="1. Các Thư viện Tiện ích Chung">
                <p>Đây là ứng dụng phổ biến nhất. Hầu như mọi dự án lớn đều có các lớp tiện ích tự định nghĩa để xử lý
                    các tác vụ lặp đi lặp lại.</p>
                <ul class="list-disc pl-3 space-y-1.5">
                    <li><span class="code-class">StringUtils.java</span>: Chứa các phương thức tĩnh để xử lý chuỗi như
                        <span class="code-class">isBlank()</span>, <span class="code-class">capitalize()</span>, <span
                            class="code-class">reverse()</span>
                    </li>
                    <li><span class="code-class">DateUtils.java</span>: Chứa các phương thức tĩnh để định dạng, phân
                        tích cú pháp và thao tác với ngày tháng.</li>
                    <li><span class="code-class">FileUtils.java</span>: Chứa các phương thức tĩnh để đọc, ghi và quản lý
                        tệp tin.</li>
                    <li><span class="code-class">ValidationUtils.java</span>: Chứa các phương thức tĩnh để kiểm tra tính
                        hợp lệ của dữ liệu, ví dụ như kiểm tra định dạng email, số điện thoại.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="2. Các Lớp Hằng số (Constants Classes)">
                <p>Bạn có thể tạo một lớp chỉ để chứa các hằng số <span class="code-class">public static final</span>
                    được sử dụng trong toàn bộ ứng dụng.</p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p><strong>Lưu ý:</strong> Trong Java hiện đại, việc sử dụng <span class="code-class">enum</span> cho
                    các hằng số liên quan đến nhau thường được ưa chuộng hơn, nhưng đối với các hằng số không liên quan
                    trực tiếp, cách này vẫn rất hữu ích.</p>
            </BlockOpinion>
            <BlockOpinion opinion="3. Các Lớp trong JDK">
                <p>Rất nhiều lớp cốt lõi của Java áp dụng nguyên tắc này:</p>
                <ul class="list-disc pl-3 space-y-1">
                    <li><span class="code-class">java.lang.Math</span>: Chứa các phương thức tĩnh cho các phép toán
                        toán học như <span class="code-class">sqrt()</span>, <span class="code-class">pow()</span>,
                        <span class="code-class">random()</span>.
                    </li>
                    <li><span class="code-class">java.util.Collections</span>: Chứa các phương thức tĩnh để thao tác
                        với các tập hợp như <span class="code-class">sort()</span>, <span
                            class="code-class">shuffle()</span>, <span class="code-class">reverse()</span>.</li>
                    <li><span class="code-class">java.util.Arrays</span>: Chứa các phương thức tĩnh để thao tác với
                        mảng như <span class="code-class">sort()</span>, <span class="code-class">binarySearch()</span>,
                        <span class="code-class">equals()</span>.
                    </li>
                    <li><span class="code-class">java.util.Objects</span>: Chứa các phương thức tĩnh để kiểm tra
                        tính bằng nhau, hashCode, và các thao tác khác với đối tượng.</li>
                    <li><span class="code-class">java.util.concurrent.TimeUnit</span>: Cung cấp các phương thức tĩnh
                        để chuyển đổi giữa các đơn vị thời gian như giây, phút, giờ, ngày.</li>
                    <li><span class="code-class">java.nio.file.Files</span>: Cung cấp các phương thức tĩnh để đọc,
                        ghi và quản lý tệp tin và thư mục.</li>
                </ul>
            </BlockOpinion>
            <br>
            <p><strong>Kết luận:</strong> Nguyên tắc này là một kỹ thuật đơn giản nhưng rất quan trọng để đảm bảo mã
                nguồn của bạn rõ ràng, an toàn và đúng với ý đồ thiết kế. Hãy áp dụng nó cho tất' cả các lớp tiện ích
                của bạn.</p>
        </div>
    </div>
</template>
<style scoped></style>