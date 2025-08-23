<template>
    <div v-highlight>
        <pre><code class="language-java">
{{ code }}
    </code></pre>
    </div>
</template>

<script setup>
defineProps({
    code: {
        type: String,
        required: true
    }
});
</script>
