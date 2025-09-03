<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 33: Consider typesafe heterogeneous containers'
})

import { code_block } from '~/data/item33'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Consider typesafe heterogeneous containers" (Cân nhắc các container không đồng nhất an toàn về
            kiểu) mô tả một mẫu thiết kế nâng cao cho phép bạn tạo ra các <strong>container có thể lưu trữ các giá trị
                thuộc nhiều kiểu khác nhau một cách an toàn về kiểu</strong>.
        </p><br />
        <p>
            Thông thường, một collection như <span class="code">Map&lt;K, V&gt;</span> chỉ có một kiểu <span
                class="code">V</span> cho tất cả các giá-trị. Mẫu thiết kế này vượt qua giới hạn đó bằng cách sử dụng
            <strong>đối tượng <span class="code">Class</span> làm key được tham số hóa</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Ý tưởng cốt lõi là thay vì dùng một key thông thường, bạn dùng một <span class="code">Class&lt;T&gt;</span>
            làm key. Khi bạn thêm một giá trị vào container, bạn sẽ cặp nó với đối tượng <span class="code">Class</span>
            của chính kiểu đó. Ví dụ, bạn sẽ lưu <span class="code">String</span> với <span
                class="code">String.class</span>, <span class="code">Integer</span> với <span
                class="code">Integer.class</span>.
        </p><br />
        <p>
            Điều này cho phép phương thức <span class="code">get</span> có thể trả về một giá trị với kiểu chính xác mà
            trình biên dịch có thể kiểm tra, loại bỏ hoàn toàn nhu cầu ép kiểu và nguy cơ lỗi <span
                class="code">ClassCastException</span>.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Triển khai Mẫu thiết kế">
                <p>Hãy xem xét một ví dụ kinh điển từ sách: lớp <span class="code">Favorites</span> cho phép bạn lưu trữ
                    các "mục yêu thích" thuộc bất kỳ kiểu nào.</p><br />
                <p><strong>Lớp <span class="code">Favorites</span>:</strong></p><br />

                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="Cách hoạt động của phép màu:">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><span class="code">putFavorite(Class&lt;T&gt; type, T instance)</span>: Phương thức này đảm bảo
                        rằng key và value luôn có cùng kiểu <span class="code">T</span>.</li>
                    <li><span class="code">getFavorite(Class&lt;T&gt; type)</span>: Phương thức <span
                            class="code">type.cast()</span> thực hiện việc ép kiểu an toàn lúc chạy. Nó kiểm tra xem đối
                        tượng lấy ra từ map có thực sự là một thực thể của <span class="code">type</span> hay không. Vì
                        logic của <span class="code">putFavorite</span> đã đảm bảo điều này, việc ép kiểu sẽ luôn thành
                        công.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="Cách sử dụng:">
                <CodeBlock :code="code_block.method2"></CodeBlock>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Các Ứng dụng Tốt nhất" />
        <p>
            Mẫu thiết kế này cực kỳ hữu ích trong các tình huống mà bạn cần truyền một tập hợp dữ liệu với các kiểu khác
            nhau một cách linh hoạt.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Quản lý Dữ liệu theo Hàng (Row-level Data)">
                <p>
                    Các API như JDBC hoặc các ORM framework cần xử lý các hàng dữ liệu từ database, nơi mỗi cột có thể
                    có một kiểu khác nhau (String, Integer, Date, v.v.). Một đối tượng <span class="code">Row</span> có
                    thể được triển khai như một typesafe heterogeneous container.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="2. Quản lý Cài đặt hoặc Ngữ cảnh (Settings/Context)">
                <p>
                    Khi bạn có một tập hợp các cài đặt hoặc một đối tượng ngữ cảnh chứa nhiều loại thông tin khác nhau,
                    mẫu thiết kế này là một lựa chọn tuyệt vời.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="3. Annotation API">
                <p>
                    Annotation API của Java sử dụng mẫu thiết kế này một cách rộng rãi. Đối tượng <span
                        class="code">AnnotatedElement</span> có phương thức <span
                        class="code">getAnnotation(Class&lt;T&gt; annotationClass)</span> để lấy ra một annotation thuộc
                    một kiểu cụ thể.
                </p><br />
            </BlockOpinion>
        </div>
        <p>
            <strong>Kết luận:</strong> Mặc dù không phải là một công cụ bạn sẽ dùng hàng ngày, <strong>typesafe
                heterogeneous container</strong> là một mẫu thiết kế cực kỳ mạnh mẽ cần có trong bộ công cụ của bạn. Hãy
            cân nhắc sử dụng nó bất cứ khi nào bạn cần tạo ra một collection có thể chứa nhiều kiểu dữ liệu khác nhau mà
            vẫn đảm bảo được sự an toàn và tiện lợi của generics.
        </p><br />
    </div>
</template>
<style scoped></style>