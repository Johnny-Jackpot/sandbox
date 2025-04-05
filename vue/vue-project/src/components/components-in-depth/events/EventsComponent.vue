<script setup lang="ts">
const { incNum, decNum } = defineProps<{
  incNum: number,
  decNum: number,
}>()

const emit = defineEmits<{
  increment: [total: number]
  decrement: [total: number]
}>()
</script>

<template>
  <button @click="emit('increment', incNum)">Increment</button>
  <button @click="emit('decrement', decNum)">Decrement</button>
</template>
