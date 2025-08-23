<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 13: Override clone judiciously'
})

import { code_block } from '~/data/item13'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Override clone judiciously" (Ghi đè phương thức clone một cách thận trọng) trong "Effective
            Java" đưa ra một thông điệp rất mạnh mẽ: <strong><span class="code">Cloneable</span> và <span
                    class="code">clone()</span> có thiết kế rất tệ và nên tránh sử dụng</strong>.
        </p><br />
        <p>
            Thay vì <span class="code">clone()</span>, cách tốt nhất và hiện đại nhất để sao chép một đối tượng là cung
            cấp một <strong>constructor sao chép (copy constructor)</strong> hoặc một <strong>phương thức factory sao
                chép (copy factory)</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan: Tại sao clone() lại tệ?" />
        <p>
            Cơ chế <span class="code">clone()</span> mặc định của Java bị coi là một trong những sai lầm thiết kế lớn
            nhất.
        </p>
        <ol class="list-decimal pl-5 mt-3 space-y-1.5">
            <li><strong>Interface <span class="code">Cloneable</span> không có phương thức <span
                        class="code">clone()</span>:</strong> <span class="code">Cloneable</span> là một "marker
                interface" (interface đánh dấu), nó không định nghĩa bất kỳ phương thức nào. Điều này có nghĩa là nó
                không thực thi được việc lớp con phải có phương thức <span class="code">clone()</span>.</li>
            <li><strong>Hành vi phức tạp và khó đoán:</strong> <span class="code">Object.clone()</span> là <span
                    class="code">protected</span>, vì vậy bạn phải override nó và làm cho nó <span
                    class="code">public</span>. Bạn cũng phải xử lý <span class="code">CloneNotSupportedException</span>
                ngay cả khi bạn đã implement <span class="code">Cloneable</span>.</li>
            <li><strong>Sao chép nông (Shallow Copy) nguy hiểm:</strong> <span class="code">Object.clone()</span> mặc
                định thực hiện một bản sao nông. Nếu đối tượng của bạn chứa các trường là đối tượng khác (ví dụ: một
                mảng hoặc một <span class="code">List</span>), cả bản gốc và bản sao sẽ cùng trỏ đến các đối tượng con
                đó. Việc thay đổi đối tượng con từ bản sao sẽ ảnh hưởng đến bản gốc, gây ra các lỗi khó lường.</li>
            <li><strong>Constructor không được gọi:</strong> <span class="code">clone()</span> tạo ra đối tượng mà không
                gọi bất kỳ constructor nào, điều này có thể phá vỡ các quy tắc bất biến (invariants) mà constructor đã
                thiết lập.</li>
        </ol><br>
        <hr><br>
        <Heading1 title="Các Phương pháp Thay thế Tốt nhất" />
        <p>Đây là những cách tiếp cận được khuyến nghị mạnh mẽ trong phát triển Java hiện đại.</p>
        <div class="pl-3">
            <BlockOpinion opinion="1. Copy Constructor (Constructor Sao chép)">
                <p>Đây là phương pháp đơn giản và phổ biến nhất. Bạn cung cấp một constructor nhận một đối tượng cùng
                    kiểu làm tham số và sao chép các trường của nó.</p><br />
                <p><strong>Ví dụ:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p><strong>Lợi ích:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Đơn giản, dễ hiểu.</li>
                    <li>An toàn về kiểu: Bạn không cần phải ép kiểu.</li>
                    <li>Linh hoạt: Bạn có thể thay đổi kiểu của bản sao (ví dụ: <span class="code">new HashSet<>
                                (myTreeSet)</span>).</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="2. Copy Factory (Phương thức Factory Sao chép)">
                <p>Tương tự như copy constructor, nhưng được triển khai dưới dạng một phương thức static factory.</p>
                <br />
                <p><strong>Ví dụ:</strong></p><br />
                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p><strong>Lợi ích:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Có thể đặt tên cho phương thức để thể hiện rõ ý đồ.</li>
                    <li>Không bắt buộc phải trả về một đối tượng có cùng kiểu chính xác (có thể trả về một lớp con).
                    </li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title='Trường hợp Ngoại lệ: Khi nào phải dùng <span class="code">clone()</span>?' />
        <p>
            Trường hợp duy nhất bạn có thể cần phải implement <span class="code">clone()</span> là khi bạn <strong>kế
                thừa một lớp đã implement <span class="code">Cloneable</span></strong> và bạn cần duy trì hành vi sao
            chép đó.
        </p><br />
        <p>
            Ví dụ, nếu bạn kế thừa từ một lớp collection cũ nào đó yêu cầu <span class="code">clone()</span> phải hoạt
            động, bạn sẽ phải làm theo. Tuy nhiên, đây là trường hợp rất hiếm trong các ứng dụng hiện đại.
        </p><br />
        <p>
            <strong>Kết luận:</strong> Hãy quên đi <span class="code">Cloneable</span> và <span
                class="code">clone()</span>. Thay vào đó, hãy <strong>luôn ưu tiên sử dụng copy constructor hoặc copy
                factory</strong>. Chúng đơn giản hơn, an toàn hơn, linh hoạt hơn và là cách tiếp cận được cộng đồng Java
            hiện đại chấp nhận rộng rãi.
        </p><br />
    </div>
</template>
<style scoped></style>