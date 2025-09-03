<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 49: Check parameters for validity'
})

import { code_block } from '~/data/item49'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Check parameters for validity" (Kiểm tra tính hợp lệ của các tham số) có nghĩa là bạn nên
            <strong>kiểm tra các tham số đầu vào của các phương thức <span class="code">public</span> và <span
                    class="code">protected</span></strong> ngay khi bắt đầu phương thức và ném ra một ngoại lệ
            (exception) phù hợp nếu chúng không hợp lệ.
        </p><br />
        <p>
            Đây là một quy tắc thiết kế phòng thủ cốt lõi, giúp bạn phát hiện lỗi sớm và ngăn chặn các vấn đề nghiêm
            trọng hơn có thể xảy ra sau này.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Việc kiểm tra các tham số đầu vào là một phần của "hợp đồng" mà phương thức của bạn cam kết với người gọi.
            Nếu người gọi vi phạm hợp đồng này bằng cách truyền vào các giá trị không hợp lệ, phương thức của bạn nên
            thất bại một cách nhanh chóng và rõ ràng.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: 'Fail-Fast' (Thất bại nhanh) 🚀">
                <p>
                    Nếu một phương thức không kiểm tra tham số của nó, nó có thể tiếp tục thực thi với dữ liệu xấu. Điều
                    này có thể dẫn đến hai kịch bản tồi:
                </p><br />
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li>Phương thức có thể ném ra một ngoại lệ khó hiểu ở một điểm nào đó sâu bên trong, làm cho việc
                        truy vết lỗi trở nên rất khó khăn.</li>
                    <li>Tệ hơn, phương thức có thể hoàn thành bình thường nhưng lại để lại một đối tượng ở trạng thái bị
                        hỏng (corrupted state), gây ra lỗi ở một nơi hoàn toàn không liên quan và ở một thời điểm rất xa
                        trong tương lai.</li>
                </ol><br />
                <p>
                    Bằng cách kiểm tra tham số ngay từ đầu, bạn tuân thủ nguyên tắc <strong>fail-fast</strong>. Lỗi sẽ
                    được phát hiện ngay tại nguồn, giúp việc gỡ lỗi trở nên dễ dàng hơn rất nhiều.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <div class="pl-3">
            <BlockOpinion opinion="1. Ném ra Ngoại lệ phù hợp">
                <p>
                    Đối với các phương thức <span class="code">public</span> và <span class="code">protected</span>, hãy
                    sử dụng Javadoc để tài liệu hóa các ràng buộc và các ngoại lệ sẽ được ném ra.
                </p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><span class="code">@throws IllegalArgumentException</span>: Nếu một tham số có giá trị không
                        được phép (ví dụ: <span class="code">age</span> là số âm).</li>
                    <li><span class="code">@throws NullPointerException</span>: Nếu một tham-số không được phép là <span
                            class="code">null</span>.</li>
                    <li><span class="code">@throws IndexOutOfBoundsException</span>: Nếu một chỉ mục (index) nằm ngoài
                        phạm vi hợp lệ.</li>
                </ul><br />
                <p>
                    Kể từ Java 7, lớp <span class="code">java.util.Objects</span> cung cấp các phương thức tiện ích rất
                    hữu ích:
                </p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Vị trí đặt các câu lệnh kiểm tra">
                <p>Luôn đặt các câu lệnh kiểm tra tính hợp lệ <strong>ở đầu phương thức</strong>, trước khi thực hiện
                    bất kỳ logic nào khác.</p><br />
            </BlockOpinion>
            <BlockOpinion opinion="3. Ví dụ hoàn chỉnh">

                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Việc kiểm tra tính hợp lệ của các tham số là một mạng lưới an toàn quan
            trọng. Hãy biến nó thành một thói quen: <strong>đối với mọi phương thức <span class="code">public</span>
                hoặc <span class="code">protected</span> bạn viết, hãy tài liệu hóa các ràng buộc của nó và thực thi
                chúng bằng các câu lệnh kiểm tra ở đầu phương-thức</strong>. Điều này sẽ giúp hệ thống của bạn mạnh mẽ
            và dễ bảo trì hơn rất nhiều.
        </p><br />
    </div>
</template>
<style scoped></style>