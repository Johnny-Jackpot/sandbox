<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0)
const emit = defineEmits<{
  increment: [number]
}>()

function increment() {
  count.value++
  emit('increment', count.value)
}
</script>

<template>
  <button @click="increment">Increment</button>
</template>

<style scoped></style>
