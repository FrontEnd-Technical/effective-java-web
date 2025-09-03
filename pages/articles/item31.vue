<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 31: Use bounded wildcards to increase API flexibility'
})

import { code_block } from '~/data/item31'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use bounded wildcards to increase API flexibility" (Sử dụng wildcard có giới hạn để tăng tính
            linh hoạt cho API) có nghĩa là bạn nên <strong>sử dụng các wildcard như <span class="code">? extends
                    T</span> và <span class="code">? super T</span></strong> trong các tham số của phương thức để làm
            cho API của bạn chấp nhận được nhiều kiểu dữ liệu hơn.
        </p><br />
        <p>
            Việc này giúp tạo ra các API <strong>linh hoạt và mạnh mẽ hơn</strong> mà không làm mất đi sự an toàn về
            kiểu.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Generics trong Java là <em>invariant</em> (bất biến), nghĩa là <span class="code">List&lt;Dog&gt;</span>
            <strong>không phải</strong> là một kiểu con của <span class="code">List&lt;Animal&gt;</span>, mặc dù <span
                class="code">Dog</span> là một kiểu con của <span class="code">Animal</span>. Điều này đôi khi làm cho
            các API trở nên quá cứng nhắc.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: API quá cứng nhắc">
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Phương thức <span class="code">pushAll</span> ở trên sẽ không hoạt động vì <span
                        class="code">Iterable&lt;Integer&gt;</span> không phải là một <span
                        class="code">Iterable&lt;Number&gt;</span>. Đây là lúc wildcard có giới hạn phát huy tác dụng.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="Nguyên tắc PECS: Producer extends, Consumer super">
                <p>Đây là quy tắc vàng để quyết định khi nào nên dùng <span class="code">extends</span> và khi nào nên
                    dùng <span class="code">super</span>:</p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Producer <span class="code">extends</span></strong>: Nếu một tham số generic chỉ
                        <strong>sản xuất (produce)</strong> các giá trị cho mã nguồn của bạn (bạn chỉ đọc từ nó), hãy sử
                        dụng <span class="code">? extends T</span>.
                    </li>
                    <li><strong>Consumer <span class="code">super</span></strong>: Nếu một tham số generic chỉ
                        <strong>tiêu thụ (consume)</strong> các giá trị từ mã nguồn của bạn (bạn chỉ ghi vào nó), hãy sử
                        dụng <span class="code">? super T</span>.
                    </li>
                </ol>

            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <div class="pl-3">
            <BlockOpinion opinion="1. Sử dụng ? extends T cho các 'Nhà sản xuất'">
                <p>
                    Quay lại ví dụ <span class="code">pushAll</span>, tham số <span class="code">src</span> là một "nhà
                    sản xuất" vì <span class="code">Stack</span> chỉ đọc các phần tử từ đó. Áp dụng PECS, chúng ta dùng
                    <span class="code">extends</span>.
                </p><br />
                <p><strong>✅ API linh hoạt hơn:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p>
                    Bây giờ, <span class="code">pushAll</span> có thể chấp nhận một <span class="code">Iterable</span>
                    của <span class="code">Number</span>, hoặc <span class="code">Integer</span>, hoặc <span
                        class="code">Double</span>, v.v.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="2. Sử dụng ? super T cho các 'Người tiêu thụ'">
                <p>
                    Ngược lại, hãy xem xét một phương thức <span class="code">popAll</span> để lấy các phần tử từ <span
                        class="code">Stack</span> ra và đặt chúng vào một collection khác. Ở đây, collection đích (<span
                        class="code">dst</span>) là một "người tiêu thụ".
                </p><br />
                <p><strong>✅ API linh hoạt hơn:</strong></p>
                <CodeBlock :code="code_block.method3"></CodeBlock>
                <p>
                    Phương thức này cho phép bạn pop các <span class="code">Number</span> từ stack vào một <span
                        class="code">Collection</span> của <span class="code">Number</span>, hoặc <span
                        class="code">Object</span>, hoặc bất kỳ kiểu cha nào khác của <span class="code">Number</span>.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="3. Tóm tắt và Quy tắc">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Tham số đầu vào:</strong> Áp dụng PECS. Nếu nó là producer, dùng <span
                            class="code">extends</span>. Nếu là consumer, dùng <span class="code">super</span>.</li>
                    <li><strong>Kiểu trả về:</strong> <strong>Không bao giờ</strong> sử dụng wildcard trong kiểu trả về.
                        Nó sẽ buộc người dùng phải xử lý wildcard ở phía client.</li>
                    <li><strong>Nếu một tham số vừa là producer vừa là consumer:</strong> Đừng dùng wildcard, hãy sử
                        dụng kiểu chính xác (ví dụ: <span class="code">List&lt;E&gt;</span>).</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy ghi nhớ quy tắc <strong>PECS (Producer <span class="code">extends</span>,
                Consumer <span class="code">super</span>)</strong>. Khi thiết kế các API generic, hãy kiểm tra từng tham
            số. Việc áp dụng wildcard có giới hạn một cách chính xác sẽ làm cho thư viện hoặc API của bạn trở nên linh
            hoạt và dễ sử dụng hơn rất nhiều đối với người dùng.
        </p><br />
    </div>
</template>
<style scoped></style>