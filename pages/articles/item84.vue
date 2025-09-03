<script setup lang="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item 84: Don’t depend on the thread scheduler'
})
</script>

<template>
    <div class="main">
        <p>
            Nguyên tắc "Don’t depend on the thread scheduler" (Đừng phụ thuộc vào bộ lập lịch luồng) có nghĩa là bạn
            <strong>không nên viết các chương trình mà tính đúng đắn hoặc hiệu năng của chúng lại phụ thuộc vào cách bộ
                lập lịch luồng (thread scheduler) hoạt động</strong>.
        </p><br />
        <p>
            Bộ lập lịch luồng là một phần của hệ điều hành, có nhiệm vụ quyết định luồng nào sẽ được chạy và chạy trong
            bao lâu. Hành vi của nó <strong>không thể đoán trước và khác nhau</strong> trên các hệ điều hành và các
            phiên bản JVM khác nhau.
        </p><br />
        <hr><br>
        <Heading1 title="Tổng quan về Nguyên tắc" />
        <p>
            Một chương trình đa luồng mạnh mẽ và có tính di động phải hoạt động đúng đắn bất kể chính sách lập lịch nào
            được áp dụng.
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="Vấn đề: Sự không chắc chắn của Lập lịch 👎">
                <p>
                    Việc dựa vào các chi tiết của bộ lập lịch luồng là một công thức cho sự thất bại, vì bạn đang xây
                    dựng chương trình của mình trên một nền tảng không ổn định.
                </p><br />
                <p>Hai kỹ thuật phổ biến nhưng sai lầm là:</p>
                <ol class="list-decimal pl-5 mt-3 space-y-1.5">
                    <li><strong>Dựa vào <span class="code">Thread.yield()</span>:</strong> Một số lập trình viên có thể
                        dùng <span class="code">Thread.yield()</span> với hy vọng rằng nó sẽ "nhường" quyền thực thi cho
                        các luồng khác. Tuy nhiên, đặc tả của Java <strong>không đảm bảo</strong> rằng <span
                            class="code">yield()</span> sẽ làm bất cứ điều gì.</li>
                    <li><strong>Dựa vào độ ưu tiên của luồng (<span class="code">Thread.setPriority()</span>):</strong>
                        Mặc dù Java cho phép bạn đặt độ ưu tiên cho luồng, nhưng cách hệ điều hành xử lý chúng là rất
                        khác nhau. Một chương trình hoạt động tốt trên Windows có thể thất bại trên Linux.</li>
                </ol>
            </BlockOpinion>
        </div><br>
        <hr><br>
        <Heading1 title="Best Practices" />
        <p>
            Quy tắc vàng là: <strong>Số lượng luồng có thể chạy (runnable threads) không nên nhiều hơn đáng kể so với số
                lượng bộ xử lý (processor cores).</strong>
        </p>
        <div class="pl-3">
            <BlockOpinion opinion="1. Giữ cho các Luồng bận rộn">
                <p>
                    Cách tốt nhất để viết một chương trình đa luồng mạnh mẽ là đảm bảo rằng các luồng của bạn không bị
                    block một cách không cần thiết. Mỗi luồng nên thực hiện một công việc hữu ích.
                </p><br />
                <p>
                    Nếu bạn có nhiều luồng hơn số lõi CPU, hệ thống sẽ phải dành thời gian để chuyển đổi ngữ cảnh
                    (context switching) giữa các luồng, làm giảm hiệu năng.
                </p><br />
            </BlockOpinion>
            <BlockOpinion opinion="2. Sử dụng Executor Framework">
                <p>
                    Thay vì tự quản lý luồng, hãy sử dụng các công cụ cấp cao như <strong>Executor Framework</strong>
                    (Item 80). Một <span class="code">ThreadPoolExecutor</span> sẽ quản lý một nhóm các luồng và phân
                    phối các tác vụ cho chúng. Điều này giúp bạn kiểm soát số lượng luồng hoạt động.
                </p><br />

            </BlockOpinion>
        </div><br>
        <p>
            <strong>Kết luận:</strong> <strong>Đừng cố gắng "thông minh" hơn bộ lập lịch luồng</strong>. Thay vào đó,
            hãy viết các chương trình mà không phụ thuộc vào hành vi của nó. Hãy giữ cho số lượng luồng có thể chạy ở
            mức thấp (gần bằng số lõi CPU) và để mỗi luồng thực hiện một công việc hữu ích. Hãy để bộ lập lịch tự do
            thực hiện công việc của nó một cách tối ưu nhất trên từng nền tảng.
        </p><br />
    </div>
</template>
<style scoped></style>