<script setup lang="ts">
import { ref } from 'vue';

const a = ref(1);

defineExpose({
  a
})
</script>

<template>
  <h2>Test</h2>
</template>
