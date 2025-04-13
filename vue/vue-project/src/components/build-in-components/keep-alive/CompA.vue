<script setup lang="ts">
import { ref } from 'vue';

const count = ref(1)
</script>

<template>
  <p>Comp A count: {{ count }} <button @click="count++">Increment</button></p>
</template>

<style scoped></style>
