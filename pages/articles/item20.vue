<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 20: Prefer interfaces to abstract classes'
})

import { code_block } from '~/data/item20'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer interfaces to abstract classes" (Ưu tiên interface thay vì abstract class) có nghĩa là
            khi bạn cần định nghĩa một kiểu (type) mà nhiều lớp có thể cùng triển khai, <strong>hãy bắt đầu với một
                interface</strong>. Chỉ sử dụng abstract class khi bạn thực sự cần chia sẻ mã nguồn hoặc trạng thái.
        </p><br />
        <p>
            Đây là một trong những nguyên tắc thiết kế quan trọng nhất trong Java, giúp tạo ra các hệ thống linh hoạt và
            dễ bảo trì hơn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Cả interface và abstract class đều cho phép bạn định nghĩa một kiểu và yêu cầu các lớp khác phải tuân thủ
            một hợp đồng nhất định. Tuy nhiên, chúng có những khác biệt cốt lõi.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="Tại sao ưu tiên Interfaces?">
                <p>Interfaces cung cấp sự linh hoạt vượt trội so với abstract classes.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Hỗ trợ "đa kế thừa" kiểu:</strong> Đây là lợi ích lớn nhất. Một lớp chỉ có thể <span
                            class="code">extends</span> từ <strong>một</strong> abstract class, nhưng nó có thể <span
                            class="code">implements</span> <strong>nhiều</strong> interfaces. Ví dụ, một lớp <span
                            class="code">DigitalSong</span> có thể implement cả <span class="code">Playable</span>,
                        <span class="code">Serializable</span>, và <span class="code">Comparable</span>.
                    </li>
                    <li><strong>Linh hoạt hơn:</strong> Các lớp hiện có có thể dễ dàng được "trang bị thêm" để implement
                        một interface mới. Bạn không thể làm điều này với abstract class, vì lớp đó có thể đã kế thừa từ
                        một lớp cha khác.</li>
                    <li><strong>Cho phép tạo các "mixin":</strong> Interfaces rất lý tưởng để định nghĩa các hành vi tùy
                        chọn. Ví dụ, một interface <span class="code">Flyable</span> có thể được implement bởi cả <span
                            class="code">Bird</span> (một <span class="code">Animal</span>) và <span
                            class="code">Airplane</span> (một <span class="code">Vehicle</span>).</li>
                    <li><strong>An toàn hơn để phát triển (Java 8+):</strong> Với <span class="code">default</span>
                        methods, bạn có thể thêm các phương thức mới vào một interface mà không làm hỏng các lớp đã
                        implement nó.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Khi nào Abstract Classes vẫn hữu ích?" />
        <p>
            Mặc dù interfaces được ưu tiên, abstract classes vẫn có một vai trò quan trọng và không thể thay thế.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="Skeletal Implementations (Bộ khung triển khai)">
                <p>
                    Đây là ứng dụng tốt nhất của abstract class: cung cấp một <strong>bộ khung triển khai (skeletal
                        implementation)</strong> cho một interface phức tạp.
                </p><br />
                <p>
                    Khi một interface có nhiều phương thức, việc triển khai tất cả chúng có thể rất tẻ nhạt. Một
                    abstract class đồng hành có thể cung cấp các triển khai mặc định cho hầu hết các phương thức, chỉ để
                    lại một vài phương thức "nguyên thủy" cốt lõi cho người dùng tự định nghĩa.
                </p><br />
                <p>
                    <strong>Ví dụ kinh điển:</strong> Interface <span class="code">java.util.Map</span> rất phức tạp.
                    Lớp <span class="code">java.util.AbstractMap</span> cung cấp một bộ khung. Nếu bạn kế thừa <span
                        class="code">AbstractMap</span>, bạn <strong>chỉ cần triển khai một phương thức duy nhất là
                        <span class="code">entrySet()</span></strong>. Tất cả các phương thức khác sẽ được triển khai
                    sẵn dựa trên phương thức đó.
                </p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Tóm tắt và Best Practices" />
        <p>Hãy cân nhắc sự đánh đổi giữa hai lựa chọn:</p>
        <ul class="list-disc pl-5 mt-3 space-y-1.5">
            <li><strong>Bắt đầu với Interface:</strong> Luôn ưu tiên định nghĩa các kiểu bằng interface. Nó định nghĩa
                một hợp đồng rõ ràng mà không ràng buộc chi tiết triển khai.</li>
            <li><strong>Sử dụng Abstract Class cho bộ khung:</strong> Đối với bất kỳ interface quan trọng nào mà bạn tạo
                ra, hãy cân nhắc cung cấp một lớp <span class="code">Abstract...</span> đồng hành để giúp người dùng dễ
                dàng triển khai nó hơn.</li>
        </ul><br />
        <p>
            <strong>Kết luận:</strong> Interfaces là công cụ tốt nhất để <strong>định nghĩa các kiểu (types)</strong>.
            Abstract classes là công cụ tốt nhất để <strong>chia sẻ mã nguồn triển khai</strong>. Bằng cách kết hợp cả
            hai thông qua mẫu thiết kế Skeletal Implementation, bạn có thể tận dụng được lợi thế của cả hai thế giới,
            tạo ra một API vừa linh hoạt vừa dễ sử dụng.
        </p><br />
    </div>
</template>
<style scoped></style>