<template>
    <h2 class="text-xl font-bold" v-html="title"></h2><br />
</template>

<script setup>

const props = defineProps({
    title: { type: String, required: true },
});
</script>