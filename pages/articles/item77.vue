<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 77: Don’t ignore exceptions'
})

import { code_block } from '~/data/item77'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Don’t ignore exceptions" (Đừng phớt lờ các exception) có nghĩa là bạn <strong>không bao giờ được
                để một khối <span class="code">catch</span> trống rỗng</strong>. Việc "nuốt" một exception một cách âm
            thầm sẽ khiến chương trình của bạn có thể thất bại ở một nơi nào đó rất xa mà không có bất kỳ dấu vết nào.
        </p><br />
        <p>
            Phớt lờ một exception cũng giống như việc bạn bỏ qua tín hiệu báo cháy; bạn có thể tránh được sự phiền toái
            ngay lúc đó, nhưng hậu quả có thể rất thảm khốc.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Khi một phương thức ném ra một exception, nó đang cố gắng báo cho bạn biết rằng một điều kiện lỗi không
            lường trước đã xảy ra. Một khối <span class="code">catch</span> trống rỗng sẽ bắt lấy exception này và không
            làm gì cả, khiến cho lỗi đó biến mất một cách vô hình.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Khối catch trống 👎">
                <p>Đây là một trong những thói quen lập trình tồi tệ nhất.</p><br />
                <p><strong>Ví dụ về cách làm sai:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Nếu <span class="code">someInput</span> không phải là một số, <span class="code">value</span> sẽ
                    không được gán, và phần còn lại của phương thức sẽ tiếp tục chạy với một trạng thái không hợp lệ, có
                    thể gây ra các lỗi khó hiểu ở một nơi khác.
                </p><br />
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Best Practices" />
        <p>
            Ít nhất, nếu bạn chọn phớt lờ một exception, khối <span class="code">catch</span> nên chứa một bình luận
            giải thích tại sao làm vậy là an toàn, và nên ghi log lại exception đó.
        </p><br />

        <div class="pl-3">
            <BlockOpinion opinion="1. Ghi Log Exception">
                <p>
                    Đây là hành động tối thiểu bạn nên làm. Việc ghi log lại exception sẽ tạo ra một bản ghi về lỗi đã
                    xảy ra, cực kỳ hữu ích cho việc debug sau này.
                </p><br />
                <p><strong>✅ Cách làm tốt hơn:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Lan truyền Exception (Propagate)">
                <p>
                    Nếu phương thức của bạn không biết cách xử lý exception, cách tốt nhất là để cho người gọi nó xử lý
                    bằng cách ném exception đó lên tầng cao hơn.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="3. Dịch và Ném lại (Translate and Rethrow)">
                <p>
                    Bắt một exception ở tầng thấp và ném lại một exception khác phù hợp với tầng trừu tượng cao hơn
                    (Item 73).
                </p><br />
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Một khối <span class="code">catch</span> trống rỗng là một công thức cho thảm
            họa. Nó tạo ra các lỗi âm thầm và làm cho việc gỡ lỗi trở nên gần như không thể. <strong>Hãy luôn xử lý các
                exception một cách có chủ đích</strong>. Ít nhất, hãy ghi lại chúng. Việc đối mặt với các lỗi một cách
            trực tiếp sẽ giúp bạn xây dựng các ứng dụng mạnh mẽ và đáng tin cậy hơn.
        </p><br />
    </div>
</template>
<style scoped></style>