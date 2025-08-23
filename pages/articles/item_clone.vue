<script setup="ts">
definePageMeta({
    layout: 'item-default',
    title: 'Item default: Consider a builder when faced with many constructor parameters'
})

import { code_block } from '~/data/item2'

</script>

<template>
    <div class="main">
        <Heading1 title="Tổng quan về Nguyên tắc" />

        <BlockOpinion :opinion="issues[0]">
            <p>Bạn phải tạo nhiều constructor với các bộ tham số khác nhau, dẫn đến mã nguồn rất khó đọc và khó bảo trì.
            </p>
            <CodeBlock :code="code_block.issue1"></CodeBlock>
        </BlockOpinion>

        <ListItem :items="applies" list-style-class="list-decimal"></ListItem>
    </div>
</template>
<style scoped></style>