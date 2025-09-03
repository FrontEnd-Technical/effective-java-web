<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 25: Limit source files to a single top-level class'
})

import { code_block } from '~/data/item25'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Limit source files to a single top-level class" (Giới hạn mỗi file mã nguồn chỉ có một lớp
            top-level) có nghĩa là bạn nên <strong>đặt mỗi lớp hoặc interface top-level vào một file <span
                    class="code">.java</span> riêng</strong>.
        </p><br />
        <p>
            Việc tuân thủ quy tắc đơn giản này giúp <strong>tránh các lỗi biên dịch và hành vi khó lường</strong> liên
            quan đến thứ tự biên dịch file, đồng thời làm cho mã nguồn dễ tìm kiếm và quản lý hơn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Nhiều Lớp Top-level trong một File">
                <p>
                    Mặc dù trình biên dịch Java cho phép bạn định nghĩa nhiều hơn một lớp top-level trong một file <span
                        class="code">.java</span> (miễn là chỉ có một lớp <span class="code">public</span>), làm như vậy
                    là một ý tưởng rất tồi.
                </p><br />
                <p>
                    Vấn đề cốt lõi là <strong>thứ tự biên dịch có thể ảnh hưởng đến hành vi của chương trình</strong>.
                    Trình biên dịch sẽ tạo ra một file <span class="code">.class</span> cho mỗi lớp bạn định nghĩa. Nếu
                    bạn thay đổi thứ tự biên dịch các file <span class="code">.java</span>, bạn có thể nhận được các
                    file <span class="code">.class</span> khác nhau, dẫn đến các kết quả khác nhau khi chạy chương
                    trình.
                </p><br />
                <p><strong>Ví dụ kinh điển gây nhầm lẫn:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <ul class="list-disc pl-5 space-y-1.5">
                    <li>Nếu bạn chạy <span class="code">javac Main.java Utensil.java</span>: Chương trình sẽ in ra:
                        <span class="code">pan and cake</span>.
                    </li>
                    <li>Nếu file <span class="code">Utensil.java</span> bị xóa và bạn chỉ chạy <span class="code">javac
                            Main.java</span>, hành vi sẽ phụ thuộc vào việc trình biên dịch có tìm thấy một định nghĩa
                        khác của <span class="code">Dessert</span> ở nơi khác hay không, dẫn đến sự không chắc chắn.
                    </li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <div class="pl-3">
            <BlockOpinion opinion="Giải pháp: Một Lớp Top-level cho mỗi File">
                <p>
                    Cách giải quyết rất đơn giản: <strong>Luôn đặt mỗi lớp top-level vào một file <span
                            class="code">.java</span> riêng biệt và đặt tên file trùng với tên lớp.</strong>
                </p>

                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p>
                    Bằng cách này, bạn loại bỏ hoàn toàn mọi sự mơ hồ. Trình biên dịch sẽ biết chính xác nơi để tìm định
                    nghĩa cho mỗi lớp, và thứ tự biên dịch sẽ không còn quan trọng nữa.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="Sử dụng Lớp lồng (Nested Classes)">
                <p>
                    Nếu bạn có một lớp nhỏ chỉ mang tính chất hỗ trợ cho một lớp top-level khác, cách tốt nhất để nhóm
                    chúng lại là sử dụng <strong>lớp lồng (nested class)</strong>, đặc biệt là <span class="code">static
                        member class</span>.
                </p><br />
                <CodeBlock :code="code_block.method3"></CodeBlock>
                <p>
                    Cách này giữ cho các lớp liên quan ở cùng một nơi mà không vi phạm quy tắc "một lớp top-level cho
                    mỗi file".
                </p><br />
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Hãy tuân thủ quy ước đơn giản này một cách nghiêm ngặt. <strong>Mỗi lớp
                top-level nên nằm trong file <span class="code">.java</span> của riêng nó</strong>. Điều này giúp trình
            biên dịch và các nhà phát triển khác dễ dàng xác định và quản lý mã nguồn của bạn, đồng thời loại bỏ một
            nguồn gây lỗi tiềm ẩn và khó chịu.
        </p><br />
    </div>
</template>
<style scoped></style>