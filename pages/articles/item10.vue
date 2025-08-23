<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 10: Obey the general contract when overriding equals'
})

import { code_block } from '~/data/item10'

</script>

<template>
    <div class="main">
        <p>
            Khi bạn ghi đè (override) phương thức <span class="code">equals()</span>, bạn <strong>bắt buộc phải tuân thủ
                hợp đồng chung</strong> của nó. Vi phạm hợp đồng này có thể dẫn đến hành vi không thể đoán trước và lỗi
            nghiêm trọng, đặc biệt khi các đối tượng của bạn được sử dụng trong các collection như <span
                class="code">HashMap</span> hay <span class="code">HashSet</span>.
        </p><br />
        <hr><br>
        <Heading1 title='Tổng quan về Hợp đồng <span class="code">equals</span>'></Heading1>
        <p>
            Hợp đồng <span class="code">equals()</span> được định nghĩa trong <span class="code">java.lang.Object</span>
            và yêu cầu phương thức của bạn phải tuân thủ năm thuộc tính sau đây đối với mọi tham chiếu <span
                class="code">x</span>, <span class="code">y</span>, <span class="code">z</span> khác <span
                class="code">null</span>.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="1. Tính phản xạ (Reflexive)">
                <p>Một đối tượng phải bằng chính nó.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Yêu cầu:</strong> <span class="code">x.equals(x)</span> phải trả về <span
                            class="code">true</span>.</li>
                    <li><strong>Tại sao?</strong> Đây là yêu cầu cơ bản nhất. Nếu một đối tượng không bằng chính nó,
                        logic của chương trình sẽ bị phá vỡ. Hầu như không thể vô tình vi phạm điều này.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="2. Tính đối xứng (Symmetric)">
                <p>Nếu <span class="code">x</span> bằng <span class="code">y</span>, thì <span class="code">y</span>
                    cũng phải bằng <span class="code">x</span>.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Yêu cầu:</strong> <span class="code">x.equals(y)</span> trả về <span
                            class="code">true</span> khi và chỉ khi <span class="code">y.equals(x)</span> trả về
                        <span class="code">true</span>.
                    </li>
                    <li><strong>Vi phạm phổ biến:</strong> Xảy ra khi bạn cố gắng so sánh một đối tượng của lớp cha
                        với
                        một đối tượng của lớp con.</li>
                </ul>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="3. Tính bắc cầu (Transitive)">
                <p>Nếu <span class="code">x</span> bằng <span class="code">y</span>, và <span class="code">y</span>
                    bằng
                    <span class="code">z</span>, thì <span class="code">x</span> phải bằng <span class="code">z</span>.
                </p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Yêu cầu:</strong> Nếu <span class="code">x.equals(y)</span> là <span
                            class="code">true</span> và <span class="code">y.equals(z)</span> là <span
                            class="code">true</span>, thì <span class="code">x.equals(z)</span> cũng phải là <span
                            class="code">true</span>.</li>
                    <li><strong>Vi phạm phổ biến:</strong> Xảy ra khi bạn kế thừa từ một lớp có thể khởi tạo
                        (instantiable) và thêm một "thành phần giá trị" (value component) mới vào lớp con.</li>
                </ul>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="4. Tính nhất quán (Consistent)">
                <p>Nếu <span class="code">x</span> và <span class="code">y</span> không thay đổi, thì nhiều lần gọi
                    <span class="code">x.equals(y)</span> phải trả về cùng một kết quả.
                </p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Yêu cầu:</strong> Các lời gọi lặp đi lặp lại đến <span class="code">x.equals(y)</span>
                        phải trả về <span class="code">true</span> hoặc <span class="code">false</span> một cách
                        nhất
                        quán.</li>
                    <li><strong>Lưu ý:</strong> Không nên để <span class="code">equals()</span> phụ thuộc vào các
                        tài
                        nguyên không đáng tin cậy hoặc có thể thay đổi, như địa chỉ IP của một host.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="5. Xử lý null">
                <p>Mọi đối tượng phải không bằng <span class="code">null</span>.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Yêu cầu:</strong> <span class="code">x.equals(null)</span> phải trả về <span
                            class="code">false</span>.</li>
                    <li><strong>Cách thực hiện:</strong> Phép kiểm tra <span class="code">instanceof</span> sẽ tự
                        động
                        xử lý việc này. Nếu <span class="code">o</span> là <span class="code">null</span>, <span
                            class="code">o instanceof MyType</span> sẽ trả về <span class="code">false</span>.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Các Ứng dụng và Best Practices" />
        <div class="pl-3">
            <BlockOpinion opinion='Khi nào nên override <span class="code">equals()</span>?'>
                <p>
                    Bạn nên override <span class="code">equals()</span> cho các <strong>lớp giá trị (value
                        classes)</strong>. Đây là những lớp biểu diễn một giá trị, ví dụ như <span
                        class="code">Integer</span>, <span class="code">String</span>, hoặc một lớp <span
                        class="code">ComplexNumber</span> tùy chỉnh. Đối với các lớp này, bạn quan tâm đến việc hai
                    đối
                    tượng có <strong>giá trị logic tương đương</strong> hay không, chứ không phải chúng có phải là
                    cùng
                    một đối tượng trong bộ nhớ hay không.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion='Khi nào không nên override <span class="code">equals()</span>?'>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Mỗi thực thể là duy nhất:</strong> Ví dụ, <span class="code">Thread</span>. Mỗi
                        thread
                        là duy nhất và khác biệt.</li>
                    <li><strong>Không cần kiểm tra sự tương đương logic:</strong> Đối với các lớp tiện ích (<span
                            class="code">java.util.Math</span>) thì không cần.</li>
                    <li><strong>Lớp cha đã override <span class="code">equals()</span> và hành vi đó phù hợp với lớp
                            con.</strong></li>
                    <li><strong>Lớp là <span class="code">private</span> hoặc package-private và bạn chắc chắn
                            phương
                            thức <span class="code">equals()</span> sẽ không bao giờ được gọi.</strong></li>
                    <li><strong>Đối với <span class="code">enum</span>:</strong> Bạn không cần làm gì cả, vì Java
                        đảm
                        bảo mỗi hằng số enum chỉ tồn tại một lần duy nhất.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion='Công thức để viết một phương thức <span class="code">equals()</span> hoàn hảo:'>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Sử dụng toán tử <span class="code">==</span> để kiểm tra tham chiếu:</strong> Nếu
                        hai
                        tham chiếu trỏ đến cùng một đối tượng, chúng chắc chắn bằng nhau. Đây là một bước tối ưu hóa
                        hiệu năng.</li>
                    <li><strong>Sử dụng <span class="code">instanceof</span> để kiểm tra kiểu:</strong> Kiểm tra xem
                        tham số đầu vào có đúng kiểu hay không. Bước này cũng xử lý luôn trường hợp <span
                            class="code">null</span>.</li>
                    <li><strong>Ép kiểu (cast) tham số:</strong> Ép kiểu tham số về đúng kiểu để có thể so sánh các
                        trường.</li>
                    <li>
                        <strong>So sánh các trường quan trọng:</strong> So sánh từng trường có ý nghĩa (significant
                        fields) của hai đối tượng.
                        <ul class="list-disc pl-5 mt-3 space-y-1.5">
                            <li>Đối với kiểu nguyên thủy (primitive), dùng <span class="code">==</span>.</li>
                            <li>Đối với kiểu đối tượng, gọi <span class="code">equals()</span> một cách đệ quy.</li>
                            <li>Đối với kiểu số thực <span class="code">float</span> và <span
                                    class="code">double</span>, dùng <span class="code">Float.compare()</span> và
                                <span class="code">Double.compare()</span>.
                            </li>
                            <li>Đối với mảng, dùng <span class="code">Arrays.equals()</span>.</li>
                        </ul>
                    </li>
                </ol>
            </BlockOpinion><br>
            <p><strong>Ví dụ hoàn chỉnh:</strong></p>
            <CodeBlock :code="code_block.method3"></CodeBlock>
        </div>
        <p>
            <strong>Lời khuyên cuối cùng:</strong> Sau khi viết xong phương thức <span class="code">equals()</span>,
            hãy
            tự hỏi: nó có đối xứng, bắc cầu, và nhất quán không? Và đừng bao giờ quên <strong>override <span
                    class="code">hashCode()</span></strong> mỗi khi bạn override <span class="code">equals()</span>.
        </p><br />
    </div>
</template>
<style scoped></style>