<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 88: Write readObject methods defensively'
})

import { code_block } from '~/data/item88'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Write <span class="code">readObject</span> methods defensively" (Viết các phương thức <span
                class="code">readObject</span> một cách phòng thủ) có nghĩa là khi bạn implement <span
                class="code">Serializable</span>, bạn phải coi phương thức <span class="code">readObject</span> của mình
            như một <strong>constructor công khai</strong> và <strong>không được tin tưởng vào luồng byte đầu
                vào</strong>.
        </p><br />
        <p>
            Bạn phải <strong>kiểm tra tính hợp lệ</strong> của dữ liệu và <strong>tạo các bản sao phòng thủ</strong> để
            bảo vệ các quy tắc bất biến (invariants) của đối tượng, vì luồng byte đó có thể đã được tạo ra một cách ác
            ý.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan: Coi readObject như một Constructor" />
        <p>
            Phương thức <span class="code">readObject</span> về cơ bản là một cách khác để tạo ra một thực thể của lớp
            bạn, nhưng nó không đến từ một lời gọi <span class="code">new</span> an toàn mà từ một luồng byte có thể đến
            từ bất cứ đâu. Do đó, nó phải tuân thủ các quy tắc phòng thủ giống như một constructor.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Luồng byte không đáng tin cậy 💣">
                <p>
                    Một kẻ tấn công có thể tạo ra một luồng byte được chế tạo đặc biệt để cố gắng tạo ra một đối tượng ở
                    trạng thái không hợp lệ, vi phạm các quy tắc của lớp bạn.
                </p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Vi phạm các quy tắc bất biến:</strong> Luồng byte có thể chứa các giá trị không hợp lệ
                        (ví dụ: một ngày kết thúc trước ngày bắt đầu) mà một constructor thông thường sẽ từ chối.</li>
                    <li><strong>Tấn công bằng các đối tượng khả biến:</strong> Luồng byte có thể chứa các tham chiếu đến
                        các đối tượng khả biến mà kẻ tấn công có thể giữ lại và thay đổi sau khi quá trình deserialize
                        hoàn tất.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Các Kỹ thuật Phòng thủ Tốt nhất ✅" />
        <p>Quy tắc vàng là: <strong>Đối với một lớp <span class="code">Serializable</span>, <span
                    class="code">readObject</span> phải đảm bảo tất cả các quy tắc bất biến và sự an toàn giống như một
                constructor.</strong></p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Kiểm tra tính hợp lệ của các trường">
                <p>
                    Sau khi <span class="code">readObject</span> đọc dữ liệu từ luồng (thường là bằng cách gọi <span
                        class="code">s.defaultReadObject()</span>), nó phải kiểm tra xem đối tượng được tạo ra có ở
                    trạng thái hợp lệ hay không. Nếu không, nó phải ném ra một <span
                        class="code">InvalidObjectException</span>.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="2. Tạo bản sao phòng thủ (Defensive Copying)">
                <p>
                    Đối với bất kỳ trường nào là một đối tượng khả biến (mutable), <span class="code">readObject</span>
                    <strong>bắt buộc phải tạo một bản sao phòng thủ</strong> của đối tượng đó trước khi lưu vào trường.
                    Không bao giờ lưu trực tiếp tham chiếu từ luồng byte.
                </p><br />

                <p><strong>Ví dụ kinh điển: Lớp <span class="code">Period</span> an toàn</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="Lưu ý quan trọng">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Phương thức <span class="code">readObject</span> nên luôn là <span class="code">private</span>.
                    </li>
                    <li>Không gọi bất kỳ phương thức nào có thể bị ghi đè (overridable) từ bên trong <span
                            class="code">readObject</span>.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> <span class="code">readObject</span> là tuyến phòng thủ cuối cùng của bạn
            chống lại các luồng byte không đáng tin cậy. <strong>Hãy viết nó một cách cẩn thận như thể bạn đang viết một
                constructor cho cả thế giới sử dụng</strong>. Luôn <strong>kiểm tra tính hợp lệ</strong> và <strong>tạo
                các bản sao phòng thủ</strong> cho mọi thành phần khả biến để đảm bảo rằng các đối tượng được
            deserialize luôn ở trạng thái nhất quán và an toàn.
        </p><br />
    </div>
</template>
<style scoped></style>