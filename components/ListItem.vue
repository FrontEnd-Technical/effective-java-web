<script setup lang="ts">
interface ApplyItem {
    key: string
    description: string
}

const props = defineProps<{
    items: ApplyItem[]
    listStyleClass?: string   // chỉ nhận kiểu list (list-decimal, list-disc, ...)
}>()

// Default là list-decimal
const listStyleClass = computed(() => props.listStyleClass || "list-decimal")
</script>

<template>
    <!-- m-3 pl-5 là cố định, listStyleClass có thể đổi -->
    <ul :class="[listStyleClass, 'm-3 pl-5 space-y-1']">
        <li v-for="content in items" :key="content.key">
            <strong>{{ content.key }}</strong>: {{ content.description }}
        </li>
    </ul>
</template>
