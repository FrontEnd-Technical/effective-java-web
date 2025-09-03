<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

function getCurrentItemNumber() {
    const match = route.path.match(/item(\d+)/)
    return match ? parseInt(match[1], 10) : null
}

function goNextPage() {
    const current = getCurrentItemNumber()
    if (current !== null) {
        router.push(`/articles/item${current + 1}`)
    }
}

function goPreviousPage() {
    const current = getCurrentItemNumber()
    if (current !== null && current > 1) {
        router.push(`/articles/item${current - 1}`)
    }
}
</script>

<template>
    <div class="mt-4 text-center">
        <div class="inline-flex gap-10">
            <a href="javascript:void(0)" @click="goPreviousPage"
                class="text-blue-600 hover:underline flex items-center">
                <span aria-hidden="true">⬅️</span>
                <span class="ml-1">Previous</span>
            </a>
            <router-link to="/" class="text-blue-600 hover:underline flex items-center">
                <span aria-hidden="true">🏠</span>
                <span class="ml-1">Go back home</span>
            </router-link>
            <a href="javascript:void(0)" @click="goNextPage" class="text-blue-600 hover:underline flex items-center">
                <span class="mr-1">Next</span>
                <span aria-hidden="true">➡️</span>
            </a>
        </div>
    </div>
</template>