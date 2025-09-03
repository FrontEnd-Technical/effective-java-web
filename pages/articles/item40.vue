<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 40: Consistently use the Override annotation'
})

import { code_block } from '~/data/item40'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Consistently use the Override annotation" (Sử dụng annotation Override một cách nhất quán) có
            nghĩa là bạn nên <strong>luôn sử dụng annotation <span class="code">@Override</span></strong> cho mọi phương
            thức mà bạn tin rằng nó đang ghi đè (override) một phương thức từ lớp cha hoặc triển khai (implement) một
            phương thức từ interface.
        </p><br />
        <p>
            Việc tuân thủ quy tắc đơn giản này là một trong những cách <strong>dễ dàng và hiệu quả nhất</strong> để ngăn
            chặn các lỗi nghiêm trọng, bằng cách để trình biên dịch kiểm tra giúp bạn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Annotation <span class="code">@Override</span> có một mục đích duy nhất: báo cho trình biên dịch rằng bạn dự
            định phương thức được đánh dấu này sẽ ghi đè một khai báo từ một kiểu cha (superclass hoặc interface).
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Lỗi 'Ghi đè' ngoài ý muốn 👎">
                <p>
                    Một trong những lỗi phổ biến và khó tìm nhất trong Java là khi bạn cố gắng ghi đè một phương thức
                    nhưng lại mắc một lỗi nhỏ, ví dụ như lỗi chính tả trong tên phương thức hoặc sai kiểu tham số.
                </p><br />
                <p>
                    Khi đó, thay vì ghi đè, bạn lại vô tình <strong>nạp chồng (overload)</strong> phương thức đó hoặc
                    tạo ra một phương thức hoàn toàn mới. Trình biên dịch sẽ không báo lỗi, và chương trình của bạn sẽ
                    âm thầm gọi phiên bản của lớp cha thay vì phiên bản của bạn.
                </p><br />
                <p><strong>Ví dụ kinh điển về lỗi khó tìm:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Vấn đề ở đây là phương thức <span class="code">equals</span> đúng phải có tham số là <span
                        class="code">Object</span>, không phải <span class="code">Bigram</span>. Vì vậy, <span
                        class="code">HashSet</span> không bao giờ gọi phương thức <span class="code">equals</span> mà
                    chúng ta đã viết.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Giải pháp: Luôn dùng @Override ✅" />
        <p>Nếu bạn thêm <span class="code">@Override</span> vào phương thức bị lỗi ở trên, điều kỳ diệu sẽ xảy ra.</p>
        <br />

        <p><strong>Cách làm tốt nhất:</strong></p>
        <CodeBlock :code="code_block.method2"></CodeBlock>
        <p>
            Annotation <span class="code">@Override</span> đã biến một <strong>lỗi logic âm thầm lúc chạy</strong> thành
            một <strong>lỗi rõ ràng lúc biên dịch</strong>. Bạn sẽ sửa nó ngay lập tức:
        </p>
        <CodeBlock :code="code_block.method3"></CodeBlock>
        <div class="pl-3">
            <BlockOpinion opinion="Quy tắc áp dụng">
                <p>Bạn nên sử dụng <span class="code">@Override</span> cho mọi phương thức mà bạn định ghi đè, bao gồm:
                </p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Các phương thức ghi đè từ một <strong>lớp cha cụ thể</strong>.</li>
                    <li>Các phương thức ghi đè hoặc triển khai từ một <strong>lớp trừu tượng</strong>.</li>
                    <li>Các phương thức triển khai từ một <strong>interface</strong>. (Kể từ Java 6, <span
                            class="code">@Override</span> cũng được dùng cho các phương thức của interface).</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy coi việc thêm <span class="code">@Override</span> là một thói quen bắt
            buộc. Nó không tốn chi phí gì nhưng lại là một mạng lưới an toàn cực kỳ hiệu quả, giúp trình biên dịch bảo
            vệ bạn khỏi một loạt các lỗi phổ biến và khó chịu.
        </p><br />
    </div>
</template>
<style scoped></style>