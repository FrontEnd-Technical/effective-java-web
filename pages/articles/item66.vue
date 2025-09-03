<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 66: Use native methods judiciously'
})
</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Use native methods judiciously" (Sử dụng native methods một cách thận trọng) có nghĩa là bạn nên
            <strong>hầu như không bao giờ</strong> cần đến việc sử dụng các phương thức <span
                class="code">native</span>. Hãy <strong>tránh xa chúng</strong> trừ khi bạn có một lý do thực sự bắt
            buộc.
        </p><br />
        <p>
            Việc sử dụng native methods mang lại rất ít lợi ích nhưng lại đi kèm với những <strong>nhược điểm nghiêm
                trọng</strong> về tính an toàn và tính di động của ứng dụng.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Một phương thức <span class="code">native</span> là một phương thức được viết bằng một ngôn ngữ lập trình
            khác ngoài Java (thường là C hoặc C++). Nó hoạt động như một "cầu nối" (thông qua Java Native Interface -
            JNI) để mã Java có thể gọi đến các thư viện hoặc chức năng của hệ điều hành.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Cái giá phải trả của Native Methods 👎">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Không an toàn:</strong> Các ngôn ngữ native như C/C++ không an toàn về bộ nhớ. Một lỗi
                        trong mã native có thể làm hỏng bộ nhớ và gây sập toàn bộ ứng dụng Java.</li>
                    <li><strong>Mất tính di động:</strong> Mã native phụ thuộc vào nền tảng. Một ứng dụng Java sử dụng
                        native methods sẽ không còn có thể chạy trên mọi nền tảng ("write once, run anywhere") nữa.</li>
                    <li><strong>Khó debug:</strong> Việc gỡ lỗi mã JNI rất phức tạp và khó khăn.</li>
                    <li><strong>Hiệu năng không chắc chắn:</strong> Chi phí giao tiếp giữa Java và mã native không hề
                        nhỏ. Trong nhiều trường hợp, JVM hiện đại đã được tối ưu hóa tốt đến mức mã Java thuần túy có
                        thể chạy nhanh hơn.</li>
                    <li><strong>Mã nguồn khó đọc và phức tạp:</strong> Cần rất nhiều "code keo" (glue code) để kết nối
                        hai thế giới Java và native.</li>
                </ol>

            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Ứng dụng và Best Practices" />
        <p>Quy tắc vàng là: <strong>Đừng dùng native methods nếu có một giải pháp thay thế bằng Java thuần túy.</strong>
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Khi nào thì Native Methods là BẮT BUỘC?">
                <p>Chỉ có ba trường hợp hiếm hoi mà việc sử dụng native methods được xem là hợp lệ:</p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Truy cập các tính năng đặc thù của nền tảng:</strong> Khi bạn cần truy cập vào các tài
                        nguyên của hệ điều hành mà Java không cung cấp API, ví dụ như truy cập vào Windows Registry.
                    </li>
                    <li><strong>Tương tác với các thư viện native cũ (legacy):</strong> Khi bạn phải làm việc với một
                        thư viện đã có sẵn được viết bằng C/C++.</li>
                    <li><strong>Tối ưu hóa hiệu năng cho các thành phần cốt lõi:</strong> Trong những trường hợp cực kỳ
                        hiếm hoi, khi một phần của hệ thống đòi hỏi hiệu năng cực cao và bạn đã chứng minh được rằng JVM
                        không đáp ứng được.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> Hãy tránh xa JNI và native methods. JVM ngày nay đã trở nên cực kỳ nhanh và
            mạnh mẽ. Việc cố gắng tối ưu hóa bằng mã native thường không mang lại lợi ích đáng kể mà còn làm cho ứng
            dụng của bạn trở nên không an toàn, không di động và khó bảo trì. <strong>Hãy luôn tìm kiếm một giải pháp
                bằng Java thuần túy trước tiên.</strong>
        </p><br />
    </div>
</template>
<style scoped></style>