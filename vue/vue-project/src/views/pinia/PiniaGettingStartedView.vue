<script setup lang="ts">
import { useCounterStore } from '@/stores/getting-started-counter-store';

const counter = useCounterStore()
</script>

<template>
  <h1>Pinia Getting Started</h1>
  <div>Count: {{ counter.count }}</div>
  <button @click="counter.count++">Increment</button>
  <button @click="counter.increment()">Increment action</button>
  <button @click="counter.$reset()">Reset</button>
  <button @click="counter.$patch({ count: 75 })">Patch</button>
</template>
