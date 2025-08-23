<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 12: Always override toString'
})

import { code_block } from '~/data/item12'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Always override toString" (Luôn ghi đè phương thức toString) có nghĩa là bạn nên cung cấp một
            phiên bản tùy chỉnh của phương thức <span class="code">toString()</span> cho các lớp của mình, thay vì chấp
            nhận phiên bản mặc định từ lớp <span class="code">Object</span>.
        </p><br />
        <p>
            Việc này là một best practice cực kỳ hữu ích vì một phương thức <span class="code">toString()</span> tốt sẽ
            giúp cho lớp của bạn <strong>dễ sử dụng hơn và thuận tiện hơn rất nhiều trong việc gỡ lỗi (debug) và ghi log
                (logging)</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion='Vấn đề của <span class="code">toString()</span> mặc định'>
                <p>
                    Nếu bạn không ghi đè <span class="code">toString()</span>, bạn sẽ kế thừa phiên bản từ lớp <span
                        class="code">Object</span>. Phiên bản này chỉ trả về một chuỗi không hữu ích, bao gồm tên lớp,
                    ký tự <span class="code">@</span> và mã hash của đối tượng dưới dạng hex.
                </p><br />
                <p><span class="code">com.mypackage.PhoneNumber@163b91</span></p><br />
                <p>
                    Chuỗi này gần như <strong>vô dụng</strong>. Nó không cho bạn biết bất kỳ thông tin nào về trạng thái
                    bên trong của đối tượng. Khi bạn thấy chuỗi này trong một file log hoặc trong debugger, bạn sẽ không
                    biết được đối tượng <span class="code">PhoneNumber</span> này thực sự chứa số điện thoại nào.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion='Lợi ích của việc override <span class="code">toString()</span>'>
                <p>
                    Một phương thức <span class="code">toString()</span> được triển khai tốt sẽ trả về một chuỗi
                    <strong>ngắn gọn, giàu thông tin, và dễ đọc</strong>, mô tả rõ ràng trạng thái của đối tượng.
                </p><br />
                <p><strong>Ví dụ về một <span class="code">toString()</span> tốt:</strong></p><br />
                <p><span class="code">PhoneNumber{areaCode=707, prefix=867, lineNum=5309}</span></p><br />
                <p>Lợi ích là ngay lập tức và rõ ràng:</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Logging hiệu quả:</strong> Khi bạn ghi log một đối tượng, file log của bạn sẽ chứa thông
                        tin có ý nghĩa, giúp chẩn đoán lỗi nhanh hơn rất nhiều. <br>
                        <span class="code">logger.info("Processing order: " + order); // In ra Order{id=123,
                            amount=99.99}</span>
                    </li>
                    <li><strong>Debugging dễ dàng:</strong> Trong trình gỡ lỗi, các đối tượng sẽ hiển thị giá trị hữu
                        ích thay vì các mã khó hiểu.</li>
                    <li><strong>Thông báo lỗi rõ ràng:</strong> Khi một ngoại lệ được ném ra, việc gọi <span
                            class="code">toString()</span> trên các đối tượng liên quan sẽ cung cấp ngữ cảnh đầy đủ
                        trong stack trace.</li>
                    <li><strong>Tăng khả năng sử dụng của lớp:</strong> Các nhà phát triển khác khi sử dụng lớp của bạn
                        sẽ thấy dễ dàng hơn khi có thể in ra trạng thái của nó một cách đơn giản.</li>
                </ul>
                <br>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Các Ứng dụng và Best Practices" />
        <div class="pl-3">
            <BlockOpinion opinion="1. Cung cấp thông tin gì?">
                <p>
                    Phương thức <span class="code">toString()</span> của bạn nên trả về tất cả các thông tin
                    <strong>quan trọng và có ý nghĩa</strong> chứa trong đối tượng. Đối với một lớp <span
                        class="code">User</span>, đó có thể là <span class="code">userId</span>, <span
                        class="code">username</span>, và <span class="code">email</span>.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="2. Định dạng trả về">
                <p>
                    Bạn có toàn quyền quyết định định dạng của chuỗi trả về. Một định dạng phổ biến và dễ đọc là <span
                        class="code">ClassName{fieldName1=value1, fieldName2=value2, ...}</span>.
                </p><br />
                <p><strong>Quan trọng:</strong> Bạn nên quyết định và ghi rõ trong tài liệu (JavaDoc) rằng bạn
                    <strong>có cam kết với định dạng này hay không</strong>.
                </p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Nếu có:</strong> Các nhà phát triển khác có thể dựa vào định dạng này để phân tích cú
                        pháp chuỗi. Điều này biến <span class="code">toString()</span> thành một phần của API công khai
                        của bạn.</li>
                    <li><strong>Nếu không (khuyến nghị):</strong> Hãy ghi rõ trong tài liệu rằng định dạng này có thể
                        thay đổi trong các phiên bản tương lai. Điều này cho bạn sự linh hoạt để cải thiện nó mà không
                        phá vỡ code của người dùng.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="3. Cách triển khai tốt nhất">
                <p>Việc viết <span class="code">toString()</span> thủ công có thể tẻ nhạt và dễ lỗi. Trong Java hiện
                    đại, có hai cách tốt hơn:</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Sử dụng IDE:</strong> Hầu hết các IDE hiện đại (IntelliJ, Eclipse, VS Code) đều có chức
                        năng tự động tạo phương thức <span class="code">toString()</span> cho bạn.</li>
                    <li><strong>Sử dụng Thư viện Lombok:</strong> Đây là cách được ưa chuộng nhất trong nhiều dự án. Chỉ
                        cần thêm annotation <span class="code">@ToString</span> vào lớp của bạn, Lombok sẽ tự động tạo
                        ra một phương thức <span class="code">toString()</span> hoàn hảo tại thời điểm biên dịch.</li>
                </ul><br />
                <p><strong>Ví dụ với Lombok:</strong></p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Dành thời gian để cung cấp một phương thức <span class="code">toString()</span>
            tốt là một sự đầu tư nhỏ mang lại lợi ích lớn. Nó làm cho mã nguồn của bạn dễ debug, dễ bảo trì hơn và giúp
            đồng nghiệp của bạn làm việc hiệu quả hơn. Hãy biến nó thành một thói quen và sử dụng các công cụ hiện đại
            như Lombok để thực hiện nó một cách dễ dàng.
        </p><br />
    </div>
</template>
<style scoped></style>