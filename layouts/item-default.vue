<template>
    <div class="min-h-screen py-5 px-4">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-2xl font-bold text-center mb-8">{{ title }}</h1>

            <slot />
        </div>

        <BackHome></BackHome>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const route = useRoute()
const title = ref(route.meta.title || '')
watch(() => route.meta.title, (newTitle) => {
    title.value = newTitle || ''
})
</script>
