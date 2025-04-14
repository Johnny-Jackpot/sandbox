<script setup lang="ts">
import { store } from '@/stores/vue-counter-store'
</script>

<template>
  <div>
    <h1>Component B</h1>
    <p>Count: {{ store.count }}</p>
    <button @click="store.increment()">Increment</button>
  </div>
</template>

<style scoped></style>
