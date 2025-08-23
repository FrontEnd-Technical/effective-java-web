<template>
    <!-- Code -->
    <div v-highlight>
        <pre>
    <code :class="`language-${language}`">
{{ code }}
    </code>
  </pre>
    </div>
</template>

<script setup>
const props = defineProps({
    code: { type: String, required: true },
    language: { type: String, default: "java" }
});
</script>

<style scoped>
pre code {
    font-family: "Fira Code", "JetBrains Mono", monospace;
    font-size: 0.9rem;
    line-height: 1.4;
}
</style>
