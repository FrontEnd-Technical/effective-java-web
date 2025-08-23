<script setup="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 9: Prefer try-with-resources to try-finally'
})

import { code_block } from '~/data/item9'

</script>

<template>
    <div class="main">
        <p>Nguyên tắc "Prefer try-with-resources to try-finally" (Ưu tiên try-with-resources thay vì try-finally) có
            nghĩa là khi làm việc với các tài nguyên cần được đóng lại (như file streams, database connections), bạn nên
            <strong>luôn sử dụng cú pháp</strong> <span class="code">try-with-resources</span> thay vì khối <span
                class="code">try-finally</span> truyền thống.
        </p><br>
        <p>Đây là một best practice quan trọng trong Java hiện đại vì nó giúp mã nguồn của bạn <strong>ngắn gọn hơn, dễ
                đọc hơn và xử lý lỗi tốt hơn</strong>.</p><br>
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>Trước Java 7, cách duy nhất để đảm bảo một tài nguyên được đóng lại là sử dụng khối <span
                class="code">try-finally</span>.</p>
        <div class="pl-3">
            <BlockOpinion opinion='1. Vấn đề của <span class="code">try-finally</span>'>
                <p>Sử dụng <span class="code">try-finally</span> có hai nhược điểm lớn:
                </p>
                <ul class="list-disc pl-5 mt-3 space-y-1">
                    <li><strong>Dài dòng và dễ lỗi: </strong>Bạn phải viết mã lặp đi lặp lại để khai báo tài nguyên, sử
                        dụng nó trong khối <span class="code">try</span>, và đóng nó trong khối <span
                            class="code">finally</span>. Khối <span class="code">finally</span>
                        cũng cần có một khối
                        <span class="code">try-catch</span> riêng để xử lý lỗi có thể xảy ra khi đóng tài nguyên, làm mã
                        nguồn trở nên rất phức
                        tạp.
                    </li>
                    <li><strong>Che giấu lỗi gốc (Suppressed Exceptions): </strong>Đây là vấn đề nghiêm trọng nhất. Nếu
                        một ngoại lệ xảy ra trong cả khối <span class="code">try</span> và khối <span
                            class="code">finally</span>, ngoại lệ từ khối <span class="code">finally</span> sẽ được ném
                        ra,
                        và <strong>ngoại lệ gốc từ khối</strong> <span class="code">try</span> <strong>sẽ bị mất hoàn
                            toàn</strong>. Điều
                        này làm cho việc
                        gỡ lỗi (debug) trở nên
                        cực kỳ khó khăn.</li>
                </ul><br>
                <p><strong>Ví dụ về <span class="code">try-finally</span> phức tạp:</strong></p>
                <CodeBlock :code="code_block.method1"></CodeBlock>
            </BlockOpinion>
            <BlockOpinion opinion='2. Giải pháp: <span class="code">try-with-resources</span>'>
                <p>Được giới thiệu từ Java 7, <span class="code">try-with-resources</span> là một giải pháp thanh lịch
                    cho vấn đề này. Nó tự động quản lý vòng đời của các tài nguyên.</p><br>
                <p>Bất kỳ đối tượng nào implement interface <span class="code">java.lang.AutoCloseable</span> (hoặc
                    <span class="code">java.io.Closeable</span>) đều có thể được sử dụng trong <span
                        class="code">try-with-resources</span>.
                </p><br>
                <p><strong>Cách hoạt động:</strong></p>
                <ul class="list-disc pl-5 mt-3 space-y-1">
                    <li>Bạn khai báo tài nguyên trong dấu ngoặc đơn <span class="code">()</span> ngay sau từ khóa <span
                            class="code">try</span>.</li>
                    <li>Bạn sử dụng tài nguyên đó trong khối <span class="code">try</span>.</li>
                    <li><strong>Tự động: </strong>Java đảm bảo rằng phương thức <span class="code">close()</span> của
                        tài nguyên sẽ được gọi khi
                        khối <span class="code">try</span> kết thúc, bất kể nó kết thúc bình thường hay do có ngoại lệ.
                    </li>
                </ul><br>
                <p><strong>Ví dụ đã được cải tiến với <span class="code">try-with-resources</span>:</strong></p>
                <CodeBlock :code="code_block.method2"></CodeBlock>
                <p><strong>Ưu điểm:</strong></p>
                <ul class="list-disc pl-3 mt-3 space-y-1">
                    <li><strong>Ngắn gọn và dễ đọc: </strong>Loại bỏ hoàn toàn khối <span class="code">finally</span> và
                        mã boilerplate.</li>
                    <li><strong>Xử lý lỗi tốt hơn: </strong>Nếu một ngoại lệ xảy ra trong cả khối <span
                            class="code">try</span> và trong quá trình
                        <span class="code">close()</span> tự động, ngoại lệ gốc từ khối <span class="code">try</span> sẽ
                        được giữ lại, và ngoại lệ
                        từ <span class="code">close()</span> sẽ được "đính
                        kèm" vào nó dưới dạng "suppressed exception". Điều này cung cấp đầy đủ thông tin để gỡ lỗi.
                    </li>
                </ul>
            </BlockOpinion><br>
            <hr><br>
            <Heading1 title="Ứng dụng"></Heading1>
            <p>Nguyên tắc này nên được áp dụng cho <strong>bất kỳ tài nguyên nào bạn phải đóng lại sau khi sử
                    dụng</strong>. Hầu hết
                các lớp này trong thư viện chuẩn của Java đều đã implement <span class="code">AutoCloseable</span>.
            </p>
            <div class="pl-5">
                <BlockOpinion opinion="1. Thao tác với File và Stream (I/O)">
                    <p>Đây là ứng dụng phổ biến nhất.</p>
                    <ul class="list-disc pl-5 mt-3 space-y-1">
                        <li><span class="code">FileInputStream</span>, <span class="code">FileOutputStream</span>
                        </li>
                        <li><span class="code">BufferedReader</span>, <span class="code">BufferedWriter</span></li>
                        <li><span class="code">ObjectInputStream</span>, <span class="code">ObjectOutputStream</span>
                        </li>
                        <li><span class="code">Scanner</span></li>
                    </ul>
                </BlockOpinion>
                <BlockOpinion opinion="2. Thao tác với Cơ sở dữ liệu (JDBC)">
                    <p>Các đối tượng JDBC đều cần được đóng cẩn thận để tránh rò rỉ kết nối, một vấn đề nghiêm trọng
                        trong các ứng dụng máy chủ.</p>
                    <ul class="list-disc pl-5 mt-3 space-y-1.5">
                        <li><span class="code">java.sql.Connection</span></li>
                        <li><span class="code">java.sql.Statement</span></li>
                        <li><span class="code">java.sql.ResultSet</span></li>
                    </ul><br>
                    <p><strong>Ví dụ với JDBC:</strong></p>
                    <CodeBlock :code="code_block.method3"></CodeBlock>
                </BlockOpinion>
                <BlockOpinion opinion="3. Thao tác với Mạng (Networking)">
                    <ul class="list-disc pl-5 space-y-1.5">
                        <li><span class="code">java.net.Socket</span></li>
                        <li><span class="code">java.net.ServerSocket</span></li>
                    </ul>
                </BlockOpinion>
                <BlockOpinion opinion="4. Bất kỳ lớp tùy chỉnh nào quản lý tài nguyên">
                    <p>Nếu bạn tự viết một lớp quản lý một tài nguyên cần được giải phóng, hãy cho lớp đó implement
                        <span class="code">AutoCloseable</span> và khuyến khích người dùng sử dụng nó với
                        <span class="code">try-with-resources</span>.
                    </p><br>
                </BlockOpinion>
                <p><strong>Kết luận: </strong>Kể từ Java 7, không có lý do gì để sử dụng <span
                        class="code">try-finally</span> cho việc quản
                    lý tài nguyên. <span class="code">try-with-resources</span> <strong>là lựa chọn tốt hơn về mọi
                        mặt:</strong> an
                    toàn hơn, ngắn gọn hơn và
                    dễ đọc hơn.</p>
            </div>

        </div>
    </div>
</template>
<style scoped></style>