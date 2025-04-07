<script setup lang="ts">
import { useFetch } from '@/composables/fetch';
import { useMouse } from '@/composables/mouse';

const { x, y } = useMouse()
const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1')
</script>

<template>
  <h1>Composables</h1>
  <p>Mouse position is at: {{ x }}, {{ y }}</p>
  <p v-if="loading">Loading...</p>
  <p v-if-else="data">{{ data }}</p>
  <p v-if="error">{{ error }}</p>
</template>
