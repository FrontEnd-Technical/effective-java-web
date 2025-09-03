<template>
    <div class="min-h-screen flex justify-center items-start">
        <div class="w-full max-w-3xl">
            <h1 class="text-3xl font-bold text-center mb-8">Table of Contents</h1>

            <div v-for="(section, idx) in index_menu" :key="idx" class="mb-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ section.title }}</h2>
                <ul v-if="section.items.length" class="list-disc list-inside space-y-1">
                    <li v-for="item in section.items" :key="item.path">
                        <NuxtLink :to="item.path" class="text-blue-600 hover:underline">
                            {{ item.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { index_menu } from '~/data/table_of_content'
</script>
