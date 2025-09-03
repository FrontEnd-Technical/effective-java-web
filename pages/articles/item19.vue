<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 19: Design and document for inheritance or else prohibit it'
})

import { code_block } from '~/data/item19'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Design and document for inheritance or else prohibit it" (Thiết kế và tài liệu hóa cho việc kế
            thừa, nếu không thì hãy cấm nó) có nghĩa là bạn phải <strong>chủ động quyết định</strong> một lớp có được
            phép kế thừa hay không. Nếu cho phép, bạn phải <strong>thiết kế nó một cách cẩn thận và ghi lại các quy tắc
                sử dụng</strong>. Nếu không, bạn phải <strong>chấm dứt khả năng kế thừa</strong> bằng cách làm cho lớp
            đó <span class="code">final</span>.
        </p><br />
        <p>
            Đây là một quy tắc thiết kế phòng thủ, giúp ngăn chặn việc lạm dụng kế thừa và tạo ra các hệ thống dễ bảo
            trì hơn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Một lớp thông thường không được thiết kế để kế thừa thường không an toàn để làm lớp cha. Việc kế thừa từ một
            lớp như vậy rất rủi ro vì các chi tiết triển khai của nó có thể thay đổi trong các phiên bản tương lai, làm
            hỏng lớp con một cách không lường trước.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Kế thừa phá vỡ tính đóng gói">
                <p>
                    Khi một lớp được kế thừa, các chi tiết triển khai của nó (ví dụ: cách các phương thức gọi lẫn nhau)
                    trở thành một phần của API công khai. Lớp con trở nên phụ thuộc chặt chẽ vào các chi tiết này.
                </p><br />
                <p>
                    <strong>Ví dụ:</strong> Giả sử lớp cha <span class="code">HashSet</span> có một phương thức <span
                        class="code">addAll</span> được triển khai bằng cách gọi <span class="code">add</span> nhiều
                    lần. Nếu bạn kế thừa <span class="code">HashSet</span> và ghi đè cả <span class="code">add</span> và
                    <span class="code">addAll</span> để đếm số phần tử, bạn sẽ bị lỗi đếm trùng lặp. Nếu trong phiên bản
                    Java tiếp theo, <span class="code">HashSet</span> thay đổi cách triển khai <span
                        class="code">addAll</span> để không gọi <span class="code">add</span>, lớp con của bạn sẽ lại
                    hoạt động sai theo một cách khác.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Các Ứng dụng và Best Practices" />
        <p>Quy tắc này đưa ra hai lựa chọn rõ ràng cho mỗi lớp <span class="code">public</span> bạn viết.</p>
        <div class="pl-3">
            <BlockOpinion opinion="Lựa chọn 1: Thiết kế và Tài liệu hóa cho việc Kế thừa">
                <p>
                    Nếu bạn muốn một lớp có thể được kế thừa một cách an toàn, bạn phải làm nhiều hơn là chỉ cung cấp
                    các phương thức <span class="code">public</span>.
                </p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Tài liệu hóa việc tự sử dụng (self-use):</strong> Bạn phải ghi lại chính xác những
                        phương thức nào có thể ghi đè (overridable) và chúng được sử dụng như thế nào bên trong lớp. Ví
                        dụ: "Phương thức <span class="code">addAll</span> sẽ gọi phương thức <span
                            class="code">add</span> cho từng phần tử."</li>
                    <li><strong>Cung cấp các "móc" (hooks) <span class="code">protected</span>:</strong> Cung cấp các
                        phương thức hoặc trường <span class="code">protected</span> được thiết kế đặc biệt để lớp con có
                        thể "móc" vào và thay đổi hành vi nội bộ một cách an toàn.</li>
                    <li><strong>Kiểm thử bằng cách viết lớp con:</strong> Cách duy nhất để chắc chắn rằng một lớp an
                        toàn cho việc kế thừa là viết ít nhất một vài lớp con để kiểm tra.</li>
                    <li><strong>Constructor không được gọi các phương thức có thể ghi đè:</strong> Điều này có thể dẫn
                        đến hành vi không xác định vì phương thức của lớp con sẽ được gọi trước khi constructor của nó
                        được thực thi.</li>
                </ol><br />
                <p>
                    Đây là một công việc khó khăn và tốn nhiều công sức, thường chỉ được thực hiện khi xây dựng các
                    framework hoặc các lớp cơ sở trừu tượng (như <span class="code">AbstractList</span>).
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="Lựa chọn 2: Cấm Kế thừa (Lựa chọn mặc định)">
                <p>
                    Đối với hầu hết các lớp thông thường, cách tiếp cận tốt nhất và an toàn nhất là cấm kế thừa. Có hai
                    cách để làm điều này:
                </p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li>
                        <strong>Khai báo lớp là <span class="code">final</span>:</strong> Đây là cách đơn giản và rõ
                        ràng nhất.
                        <CodeBlock :code="code_block.method1"></CodeBlock>
                    </li>
                    <li>
                        <strong>Làm cho tất cả các constructor là <span class="code">private</span> hoặc <span
                                class="code">package-private</span>:</strong> Nếu không có constructor nào có thể truy
                        cập được, không ai có thể tạo lớp con. Bạn có thể cung cấp các phương thức factory tĩnh công
                        khai để thay thế.
                        <CodeBlock :code="code_block.method2"></CodeBlock>
                    </li>
                </ol>
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> <strong>Lựa chọn mặc định của bạn nên là cấm kế thừa</strong>. Hãy khai báo
            các lớp của bạn là <span class="code">final</span> trừ khi bạn có một lý do thiết kế rõ ràng, có chủ đích để
            cho phép chúng được kế thừa. Cách tiếp cận này giúp bạn tuân thủ nguyên tắc "ưu tiên composition thay vì
            inheritance" và tạo ra mã nguồn mạnh mẽ, an toàn và dễ dàng phát triển trong tương lai.
        </p><br />
    </div>
</template>
<style scoped></style>