<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 18: Favor composition over inheritance'
})

import { code_block } from '~/data/item18'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Favor composition over inheritance" (Ưu tiên composition thay vì inheritance) có nghĩa là khi
            bạn muốn tái sử dụng mã nguồn và mở rộng chức năng, bạn nên <strong>ưu tiên việc chứa một thực thể của lớp
                khác bên trong lớp của mình (composition)</strong>, thay vì kế thừa từ nó (inheritance).
        </p><br />
        <p>
            Đây là một trong những nguyên tắc thiết kế hướng đối tượng quan trọng nhất, giúp tạo ra các hệ thống
            <strong>linh hoạt, mạnh mẽ và dễ bảo trì hơn</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Vấn đề của Inheritance" />
        <p>
            Inheritance (kế thừa) là một công cụ mạnh mẽ, nhưng việc lạm dụng nó, đặc biệt là kế thừa triển khai
            (implementation inheritance), có thể dẫn đến nhiều vấn-đề nghiêm-trọng.
        </p>
        <ol class="list-decimal pl-5 mt-3 space-y-1.5">
            <li><strong>Phá vỡ tính đóng gói (Encapsulation):</strong> Lớp con bị phụ thuộc chặt chẽ vào chi tiết triển
                khai của lớp cha. Nếu lớp cha thay đổi trong một phiên bản tương lai, lớp con có thể bị phá vỡ một cách
                không lường trước.</li>
            <li><strong>Hệ thống "mong manh":</strong> Vì sự phụ thuộc chặt chẽ ở trên, một thay đổi nhỏ ở lớp cha có
                thể gây ra hiệu ứng gợn sóng, làm hỏng các lớp con.</li>
            <li><strong>Hạn chế sự linh hoạt:</strong> Bạn chỉ có thể kế thừa từ một lớp duy nhất trong Java.</li>
        </ol><br />
        <p><strong>Ví dụ kinh điển: Tạo một <span class="code">HashSet</span> đếm số lần thêm phần tử</strong></p>
        <CodeBlock :code="code_block.method1"></CodeBlock>
        <p>
            <strong>Vấn đề:</strong> Phương thức <span class="code">addAll</span> của <span class="code">HashSet</span>
            được triển khai bằng cách gọi <span class="code">add()</span> lặp đi lặp lại. Do đó, khi bạn gọi <span
                class="code">addAll</span>, <span class="code">addCount</span> sẽ bị cộng hai lần, dẫn đến kết quả sai.
        </p><br />
        <hr><br>
        <Heading1 title="Giải pháp: Composition (và Forwarding)" />
        <p>
            Composition đơn giản là việc một lớp chứa một tham chiếu <span class="code">private</span> đến một thực thể
            của một lớp khác. Thay vì kế thừa hành vi, lớp của bạn sẽ <strong>ủy thác (delegate)</strong> các yêu cầu
            đến đối tượng mà nó chứa. Các phương thức trong lớp của bạn sẽ gọi các phương thức tương ứng của đối tượng
            chứa bên trong; kỹ thuật này được gọi là <strong>forwarding</strong>.
        </p><br />

        <p><strong>Cách tiếp cận dùng Composition (mạnh mẽ và an toàn):</strong></p>
        <CodeBlock :code="code_block.method2"></CodeBlock>
        <p>
            Với composition, bạn không phụ thuộc vào chi tiết triển khai của <span class="code">HashSet</span>. Bạn chỉ
            sử dụng API công khai của nó. Dù <span class="code">HashSet</span> có thay đổi cách triển khai <span
                class="code">addAll</span> như thế nào đi nữa, lớp của bạn vẫn hoạt động đúng.
        </p><br />
        <hr><br>
        <Heading1 title="Các Ứng dụng và Best Practices" />
        <p>Quy tắc vàng là hãy tự hỏi: "Lớp B có thực sự <strong>là một</strong> (is-a) lớp A không?".</p>
        <div class="pl-3">
            <BlockOpinion opinion="Khi nào nên dùng Inheritance?">
                <p>
                    Chỉ sử dụng inheritance khi có mối quan-hệ "is-a" thực sự giữa lớp con và lớp cha. Tức là, mọi thực
                    thể của lớp con đều là một thực thể của lớp cha và có thể thay thế hoàn toàn cho lớp cha mà không
                    gây ra lỗi (nguyên tắc Liskov Substitution).
                </p><br />
                <p><strong>Ví dụ tốt:</strong> <span class="code">Dog</span> <strong>là một</strong> <span
                        class="code">Animal</span>. <span class="code">ArrayList</span> <strong>là một</strong> <span
                        class="code">AbstractList</span>.</p>
            </BlockOpinion>
            <BlockOpinion opinion="Khi nào nên dùng Composition?">
                <p>
                    Trong <strong>hầu hết các trường hợp khác</strong>, composition là lựa chọn tốt hơn. Nó đặc biệt hữu
                    ích khi bạn muốn "mượn" chức năng của một lớp khác mà không có mối quan-hệ "is-a" rõ ràng.
                </p><br />
                <p><strong>Ví dụ tốt:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Một <span class="code">Car</span> <strong>có một</strong> (has-a) <span
                            class="code">Engine</span>. <span class="code">Car</span> không phải là <span
                            class="code">Engine</span>.</li>
                    <li>Một <span class="code">ReportGenerator</span> <strong>sử dụng một</strong> (uses-a) <span
                            class="code">DatabaseConnection</span>.</li>
                    <li>Lớp <span class="code">InstrumentedSet</span> ở trên <strong>mở rộng chức năng</strong> của một
                        <span class="code">Set</span>, nhưng nó không phải là một <span class="code">HashSet</span>.
                    </li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy xem <strong>composition là lựa chọn mặc định</strong>. Chỉ sử dụng
            inheritance khi bạn có thể tự tin khẳng định rằng lớp con thực sự là một dạng đặc biệt của lớp cha. Cách
            tiếp cận này sẽ giúp bạn xây dựng các hệ thống linh hoạt, dễ bảo trì và ít bị lỗi hơn.
        </p><br />
    </div>
</template>
<style scoped></style>