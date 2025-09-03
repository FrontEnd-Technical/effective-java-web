<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 38: Emulate extensible enums with interfaces'
})

import { code_block } from '~/data/item38'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Emulate extensible enums with interfaces" (Mô phỏng enum có thể mở rộng bằng interface) đưa ra
            một giải pháp cho một trong những hạn chế của <span class="code">enum</span>: <strong><span
                    class="code">enum</span> không thể được kế thừa</strong>.
        </p><br />
        <p>
            Bằng cách cho <span class="code">enum</span> <strong>implement một interface</strong>, bạn có thể tạo ra một
            hệ thống linh hoạt, cho phép người dùng tự định nghĩa các hằng số của riêng họ mà vẫn có thể được sử dụng ở
            bất cứ đâu yêu cầu các hằng số cơ bản.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Đôi khi, bạn muốn cung cấp một tập hợp các hằng số (<span class="code">enum</span>) cốt lõi nhưng cũng cho
            phép người dùng của API hoặc thư viện của bạn thêm vào các hằng số của riêng họ. Vì <span
                class="code">enum</span> là <span class="code">final</span>, bạn không thể kế thừa từ nó.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Giải pháp: Dùng Interface làm Kiểu chung">
                <p>
                    Giải pháp là định nghĩa một <span class="code">interface</span> mô tả hành vi của các hằng số, sau
                    đó cho cả <span class="code">enum</span> cơ bản và các <span class="code">enum</span> mở rộng của
                    người dùng cùng implement interface đó.
                </p><br />

                <p><strong>Ví dụ kinh điển: Các phép toán có thể mở rộng</strong></p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li>
                        <strong>Định nghĩa một Interface chung:</strong>
                        <CodeBlock :code="code_block.method1"></CodeBlock>
                    </li>
                    <li>
                        <strong>Tạo <span class="code">enum</span> cơ bản implement Interface đó:</strong>
                        <CodeBlock :code="code_block.method2"></CodeBlock>
                    </li>
                    <li>
                        <strong>Người dùng có thể tạo <span class="code">enum</span> mở rộng của riêng họ:</strong>
                        <CodeBlock :code="code_block.method3"></CodeBlock>
                    </li>
                </ol>
                <p>
                    Bây giờ, bạn có thể viết các phương thức chấp nhận bất kỳ đối tượng <span
                        class="code">Operation</span> nào, dù nó đến từ <span class="code">BasicOperation</span> hay
                    <span class="code">ExtendedOperation</span>.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Mẫu thiết kế này đặc biệt hữu ích khi xây dựng các <strong>API hoặc framework có tính mở rộng</strong>.</p>
        <br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Xây dựng các API có thể cắm (Pluggable APIs)">
                <p>
                    Khi bạn muốn cho phép người dùng "cắm" các hành vi hoặc hằng số của riêng họ vào hệ thống của bạn,
                    mẫu thiết kế này là một lựa chọn tuyệt vời.
                </p><br />
                <p><strong>Ví dụ sử dụng:</strong></p>
                <CodeBlock :code="code_block.method4"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="Nhược điểm">
                <p>
                    Một nhược điểm nhỏ là bạn không thể kế thừa các triển khai từ một <span class="code">enum</span> này
                    sang một <span class="code">enum</span> khác. Nếu có nhiều logic cần chia sẻ, bạn có thể đặt nó
                    trong một lớp helper.
                </p><br />
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Mặc dù <span class="code">enum</span> không thể được kế thừa, bạn vẫn có thể
            đạt được khả năng mở rộng bằng cách <strong>sử dụng interface để định nghĩa một kiểu chung</strong>. Đây là
            một mẫu thiết kế mạnh mẽ cho phép bạn tạo ra các API linh hoạt và dễ mở rộng, nơi người dùng có thể cung cấp
            các hằng số của riêng họ mà vẫn tích hợp liền mạch với hệ thống.
        </p><br />
    </div>
</template>
<style scoped></style>