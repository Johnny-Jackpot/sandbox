<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0)
const emit = defineEmits<{
  increment: [number],
  complexIncrement: [{
    count: number,
    isEven: boolean
  }]
}>()

function onClick() {
  count.value++
  emit('increment', count.value)
  emit('complexIncrement', {
    count: count.value,
    isEven: count.value % 2 === 0,
  })
}
</script>

<template>
  <button @click="onClick">Increment</button>
</template>

<style scoped></style>
