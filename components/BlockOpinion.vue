<template>
    <div class="article">
        <p class="font-bold border-l-2 pl-2 my-5 bg-orange-300" v-html="opinion"></p>
        <div class="pl-5">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    opinion: { type: String, required: true },
});
</script>

<style scoped></style>
