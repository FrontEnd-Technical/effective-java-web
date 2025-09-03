<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 85: Prefer alternatives to Java serialization'
})

import { code_block } from '~/data/item85'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Prefer alternatives to Java serialization" (Ưu tiên các giải pháp thay thế cho Java
            serialization) có nghĩa là bạn nên <strong>tránh sử dụng cơ chế serialization mặc định của Java</strong>
            (<span class="code">implements Serializable</span>) bất cứ khi nào có thể.
        </p><br />
        <p>
            Thay vào đó, hãy <strong>luôn ưu tiên sử dụng các định dạng dữ liệu có cấu trúc, đa nền tảng</strong> như
            <strong>JSON</strong> hoặc <strong>Protocol Buffers</strong>. Serialization mặc định của Java cực kỳ
            <strong>nguy hiểm, mong manh và không hiệu quả</strong>.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan: Tại sao Serialization lại Nguy hiểm? ☢️" />
        <p>
            Java serialization là cơ chế chuyển đổi một đối tượng thành một luồng byte để lưu trữ hoặc truyền đi. Mặc dù
            có vẻ tiện lợi, nó lại là một trong những tính năng bị chỉ trích nhiều nhất của Java vì những lý do sau:
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="">
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Lỗ hổng bảo mật khổng lồ:</strong> Đây là vấn đề nghiêm trọng nhất. Việc deserialization
                        một luồng byte không đáng tin cậy có thể dẫn đến các cuộc tấn công thực thi mã từ xa (Remote
                        Code Execution - RCE).</li>
                    <li><strong>Tính "mong manh":</strong> Cơ chế serialization bị ràng buộc chặt chẽ với cấu trúc của
                        lớp. Nếu bạn thay đổi một trường <span class="code">private</span>, bạn có thể không đọc lại
                        được các đối tượng đã được serialize trước đó.</li>
                    <li><strong>Hiệu năng kém và cồng kềnh:</strong> Quá trình serialization của Java khá chậm và tạo ra
                        một luồng byte rất lớn so với các định dạng khác.</li>
                    <li><strong>Cơ chế "ma thuật":</strong> Quá trình tạo ra đối tượng khi deserialize không thông qua
                        constructor thông thường, điều này có thể phá vỡ các quy tắc bất biến của lớp.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Các Giải pháp Thay thế Tốt nhất ✅" />
        <p>Cách tiếp cận hiện đại là sử dụng các định dạng dữ liệu mô tả cấu trúc một cách rõ ràng và không phụ thuộc
            vào ngôn ngữ lập trình.</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. JSON (với Jackson hoặc Gson)">
                <p>Đây là tiêu chuẩn thực tế cho việc truyền dữ liệu qua các API web và lưu trữ cấu hình.</p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Dễ đọc:</strong> Con người có thể đọc và hiểu được.</li>
                    <li><strong>Đa nền tảng:</strong> Mọi ngôn ngữ lập trình đều có thư viện để xử lý JSON.</li>
                    <li><strong>Linh hoạt:</strong> Các thư viện như Jackson và Gson cung cấp rất nhiều tùy chọn.</li>
                </ul><br />
                <p><strong>Ví dụ với Jackson:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion="2. Protocol Buffers (Protobuf)">
                <p>Được phát triển bởi Google, đây là một định dạng nhị phân hiệu năng cao, lý tưởng cho việc giao tiếp
                    giữa các microservice (ví dụ: qua gRPC).</p><br />
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Hiệu năng cao:</strong> Nhanh và tạo ra dữ liệu nhỏ gọn hơn JSON rất nhiều.</li>
                    <li><strong>Có schema rõ ràng:</strong> Bạn định nghĩa cấu trúc dữ liệu trong một file <span
                            class="code">.proto</span>, giúp đảm bảo tính tương thích.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="Bảng so sánh">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full border-collapse border border-gray-400">
                        <thead class="bg-gray-200">
                            <tr>
                                <th class="px-4 py-2 border border-gray-400">Tiêu chí</th>
                                <th class="px-4 py-2 border border-gray-400">Java Serialization</th>
                                <th class="px-4 py-2 border border-gray-400">JSON</th>
                                <th class="px-4 py-2 border border-gray-400">Protocol Buffers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2 border border-gray-400"><strong>Bảo mật</strong></td>
                                <td class="px-4 py-2 border border-gray-400">Rất kém</td>
                                <td class="px-4 py-2 border border-gray-400">Tốt</td>
                                <td class="px-4 py-2 border border-gray-400">Tốt</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 border border-gray-400"><strong>Hiệu năng</strong></td>
                                <td class="px-4 py-2 border border-gray-400">Kém</td>
                                <td class="px-4 py-2 border border-gray-400">Trung bình</td>
                                <td class="px-4 py-2 border border-gray-400">Rất cao</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 border border-gray-400"><strong>Khả năng đọc</strong></td>
                                <td class="px-4 py-2 border border-gray-400">Không</td>
                                <td class="px-4 py-2 border border-gray-400">Rất tốt</td>
                                <td class="px-4 py-2 border border-gray-400">Không</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 border border-gray-400"><strong>Đa nền tảng</strong></td>
                                <td class="px-4 py-2 border border-gray-400">Chỉ Java</td>
                                <td class="px-4 py-2 border border-gray-400">Rất tốt</td>
                                <td class="px-4 py-2 border border-gray-400">Rất tốt</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 border border-gray-400"><strong>Tính linh hoạt</strong></td>
                                <td class="px-4 py-2 border border-gray-400">Rất kém</td>
                                <td class="px-4 py-2 border border-gray-400">Tốt</td>
                                <td class="px-4 py-2 border border-gray-400">Rất tốt</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> <strong>Đừng bao giờ sử dụng Java serialization mặc định</strong> trong các
            ứng dụng mới. Nó là một di sản lỗi thời và nguy hiểm. Đối với việc trao đổi dữ liệu hoặc lưu trữ trạng thái,
            hãy <strong>luôn chọn một định dạng hiện đại, an toàn và đa nền tảng</strong> như JSON (cho API và cấu hình)
            hoặc Protocol Buffers (cho giao tiếp hiệu năng cao giữa các dịch vụ).
        </p><br />
    </div>
</template>
<style scoped></style>