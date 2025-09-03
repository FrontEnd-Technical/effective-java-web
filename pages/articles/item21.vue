<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 21: Design interfaces for posterity'
})

import { code_block } from '~/data/item21'

</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Design interfaces for posterity" (Thiết kế interface cho hậu thế) có nghĩa là bạn phải
            <strong>thiết kế các interface một cách cực kỳ cẩn thận và kỹ lưỡng</strong>, vì một khi đã được công khai
            và sử dụng rộng rãi, việc thay đổi chúng là gần như không thể mà không phá vỡ code của các client.
        </p><br />
        <p>
            Tuy nhiên, kể từ Java 8, <strong><span class="code">default</span> methods</strong> đã cung cấp một công cụ
            mạnh mẽ để thêm các phương thức mới vào interface một cách an toàn hơn.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Interface là một Cam kết Vĩnh viễn">
                <p>
                    Khi bạn công khai một interface, bạn đang tạo ra một cam kết mạnh mẽ với người dùng. Bất kỳ lớp nào
                    implement interface của bạn đều phải cung cấp triển khai cho tất cả các phương thức trong đó.
                </p><br />
                <p>
                    Nếu sau này bạn thêm một phương thức mới vào interface, tất cả các lớp đang implement nó sẽ ngay lập
                    tức bị lỗi biên dịch. Điều này buộc tất cả người dùng phải sửa đổi code của họ, một hành động "phá
                    vỡ" không thể chấp nhận được đối với một thư viện hoặc API công khai.
                </p>
            </BlockOpinion>
            <BlockOpinion opinion="Giải pháp (Java 8+): Default Methods">
                <p>
                    Java 8 đã giới thiệu <span class="code">default</span> methods để giải quyết vấn đề này. Một <span
                        class="code">default</span> method là một phương thức trong interface có sẵn một triển khai mặc
                    định.
                </p><br />
                <p><strong>Cách hoạt động:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Nếu một lớp implement interface nhưng không cung cấp triển khai cho một <span
                            class="code">default</span> method, nó sẽ tự động kế thừa phiên bản mặc định.</li>
                    <li>Điều này cho phép bạn <strong>thêm các phương thức mới vào một interface hiện có</strong> mà
                        không làm hỏng các lớp đã implement nó từ trước.</li>
                </ul>
                <br>
            </BlockOpinion>
        </div>
        <hr><br>
        <Heading1 title="Các Ứng dụng và Best Practices" />
        <p>Mặc dù <span class="code">default</span> methods rất mạnh mẽ, chúng không phải là lý do để thiết kế interface
            một cách cẩu thả.</p><br />
        <div class="pl-3">
            <BlockOpinion opinion="1. Thiết kế Kỹ lưỡng ngay từ đầu">
                <ul class="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Suy nghĩ thấu đáo:</strong> Hãy cố gắng dự đoán các nhu cầu trong tương lai và thiết kế
                        một interface nhỏ gọn nhưng đầy đủ ngay từ đầu.</li>
                    <li><strong>Kiểm thử rộng rãi:</strong> Trước khi công khai interface, hãy viết nhiều lớp triển khai
                        thử nghiệm để đảm bảo rằng thiết kế của bạn hợp lý và không thiếu sót các chức năng cơ bản.</li>
                </ul>
            </BlockOpinion>
            <BlockOpinion opinion="2. Sử dụng default methods một cách Thận trọng">
                <p>
                    <span class="code">Default</span> methods là một công cụ tuyệt vời để <strong>tiến hóa
                        (evolve)</strong> một interface, nhưng không phải là một giải pháp hoàn hảo cho mọi trường hợp.
                </p><br />
                <p><strong>Ví dụ: Thêm chức năng <span class="code">sort</span> vào <span
                            class="code">List</span></strong></p><br />
                <p>
                    Interface <span class="code">java.util.List</span> đã tồn tại từ rất lâu. Trong Java 8, các nhà phát
                    triển muốn thêm một phương thức <span class="code">sort</span> trực tiếp vào <span
                        class="code">List</span>. Việc thêm một phương thức trừu tượng <span
                        class="code">sort(Comparator)</span> sẽ phá vỡ hàng triệu lớp <span class="code">List</span>
                    hiện có.
                </p><br />
                <p><strong>Giải pháp dùng <span class="code">default</span> method:</strong></p><br />
                <CodeBlock :code="code_block.method1"></CodeBlock>
                <p>
                    Nhờ có <span class="code">default</span> method này, mọi lớp <span class="code">List</span> hiện có
                    (như <span class="code">ArrayList</span>) ngay lập tức có thêm phương thức <span
                        class="code">sort()</span> mà không cần thay đổi bất kỳ dòng code nào.
                </p><br>
            </BlockOpinion>
            <p><strong>Chú ý Best Practices: </strong></p>
            <ul class="list-disc pl-5 mt-3 space-y-1.5">
                <li><strong>Thiết kế tối giản:</strong> Khi tạo một interface mới, hãy cố gắng giữ cho nó nhỏ gọn
                    nhất có thể. Dễ dàng thêm phương thức sau này (với <span class="code">default</span> methods)
                    hơn là loại bỏ chúng.</li>
                <li><strong>Default methods cho sự tiến hóa:</strong> Chỉ sử dụng <span class="code">default</span>
                    methods để thêm các chức năng mới vào các interface đã được công khai.</li>
                <li><strong>Không lạm dụng:</strong> Tránh cung cấp triển khai mặc định cho tất cả các phương thức.
                    Mục đích chính của interface vẫn là định nghĩa một hợp đồng.</li>
            </ul>
        </div>
        <p><br>
            <strong>Kết luận:</strong> Việc thiết kế interface đòi hỏi sự nhìn xa trông rộng. Hãy đầu tư thời gian
            để thiết kế một API công khai tốt ngay từ đầu. Khi cần mở rộng các interface hiện có, hãy sử dụng <span
                class="code">default</span> methods như một công cụ mạnh mẽ nhưng cần được dùng một cách có trách nhiệm
            để đảm bảo sự tương thích ngược.
        </p><br />
    </div>
</template>
<style scoped></style>