<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 67: Optimize judiciously'
})
</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Optimize judiciously" (Tối ưu hóa một cách thận trọng) có nghĩa là bạn <strong>không nên hy sinh
                một thiết kế tốt để đổi lấy hiệu năng không chắc chắn</strong>. Thay vào đó, hãy <strong>viết mã nguồn
                sạch sẽ, rõ ràng trước, và chỉ tối ưu hóa sau khi đã đo lường và xác định được các điểm nghẽn cổ chai
                thực sự</strong>.
        </p><br />
        <p>
            Câu nói nổi tiếng của các lập trình viên vĩ đại tóm tắt điều này: <em>"Tối ưu hóa vội vàng là nguồn gốc của
                mọi tội lỗi."</em>
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Nhiều lập trình viên có xu hướng tối ưu hóa mã nguồn ngay khi viết, thường dựa trên những phỏng đoán không
            chính xác về hiệu năng. Điều này thường dẫn đến mã nguồn phức tạp, khó hiểu và khó bảo trì hơn, nhưng lại
            không mang lại lợi ích đáng kể về tốc độ.
        </p><br />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Sự nguy hiểm của Tối ưu hóa vội vàng 👎">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Mã nguồn xấu hơn:</strong> Các "thủ thuật" tối ưu hóa thường làm cho mã nguồn trở nên
                        khó đọc và phá vỡ các nguyên tắc thiết kế tốt như đóng gói.</li>
                    <li><strong>Không hiệu quả:</strong> Lập trình viên thường đoán sai về nơi chương trình dành phần
                        lớn thời gian thực thi. Việc tối ưu hóa sai chỗ sẽ không mang lại kết quả gì.</li>
                    <li><strong>Tốn thời gian:</strong> Bạn sẽ lãng phí thời gian để làm cho một đoạn mã không quan
                        trọng chạy nhanh hơn một chút, thay vì tập trung vào các tính năng chính.</li>
                </ul>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Quy trình Tối ưu hóa Đúng đắn" />
        <p>Thay vì đoán mò, hãy tuân theo một quy trình có phương pháp.</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Thiết kế để có thể Tối ưu hóa (Design for Performance)">
                <p>Đây là bước quan trọng nhất. Đừng tối ưu hóa vội, nhưng hãy đưa ra các lựa chọn thiết kế có thể mang
                    lại hiệu năng tốt.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Chọn thuật toán phù hợp:</strong> Độ phức tạp của thuật toán (ví dụ: <span
                            class="code">O(n)</span> vs. <span class="code">O(n²)</span>) có ảnh hưởng lớn nhất đến hiệu
                        năng.</li>
                    <li><strong>Thiết kế API tốt:</strong> Một API được đóng gói tốt cho phép bạn thay đổi và tối ưu hóa
                        cách triển khai bên trong mà không ảnh hưởng đến client.</li>
                    <li><strong>Tránh các quyết định thiết kế hạn chế hiệu năng:</strong> Ví dụ, làm cho một lớp <span
                            class="code">public</span> trở nên khả biến (mutable) có thể hạn chế khả năng cache sau này.
                    </li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="2. Đo lường để Tìm Điểm nghẽn (Measure to Find Bottlenecks) ⏱️">
                <p><strong>Đừng đoán! Hãy đo lường!</strong></p><br />
                <p>
                    Sử dụng các công cụ đo lường hiệu năng (<strong>profilers</strong>) như Java Mission Control (JMC),
                    VisualVM, hoặc JProfiler. Các công cụ này sẽ cho bạn biết chính xác phương thức nào đang chiếm nhiều
                    thời gian CPU nhất hoặc cấp phát nhiều bộ nhớ nhất.
                </p><br />

            </BlockOpinion>
            <BlockOpinion opinion="3. Tối ưu hóa (Optimize)">
                <p>
                    Sau khi bạn đã xác định được các điểm nghẽn thực sự (thường chỉ chiếm một phần rất nhỏ trong mã
                    nguồn), hãy tập trung nỗ lực tối ưu hóa vào những nơi đó. Sau mỗi lần thay đổi, hãy <strong>đo lường
                        lại</strong> để chắc chắn rằng bạn đã thực sự cải thiện được hiệu năng.
                </p><br />
            </BlockOpinion>
        </div>
        <p><strong>Kết luận:</strong> Quy tắc vàng là: <strong>"Làm cho nó hoạt động, làm cho nó đúng, rồi mới làm
                cho nó nhanh."</strong></p><br />
        <ol class="list-decimal pl-5 mt-3 space-y-1.5">
            <li>Đầu tiên, hãy viết một chương trình <strong>sạch sẽ, rõ ràng, và hoạt động đúng</strong> với một thiết
                kế tốt.</li>
            <li>Tiếp theo, <strong>đo lường hiệu năng</strong> của nó để tìm ra các điểm nghẽn thực sự.</li>
            <li>Cuối cùng, <strong>chỉ tối ưu hóa</strong> các điểm nghẽn đó và đo lường lại.</li>
        </ol><br />
        <p>
            Việc tuân thủ quy trình này sẽ giúp bạn tạo ra các ứng dụng vừa nhanh vừa dễ bảo trì.
        </p><br />
    </div>
</template>
<style scoped></style>