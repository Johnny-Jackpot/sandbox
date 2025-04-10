<script setup lang="ts">
import { useFetch } from '@/composables/fetch';
import { useMouse } from '@/composables/mouse';
import { computed, ref } from 'vue';

const { x, y } = useMouse()
const todoId = ref(1);
const url = computed(() => `https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
const { data, isLoading, error } = useFetch(url)
</script>

<template>
  <h1>Composables</h1>
  <p>Mouse position is at: {{ x }}, {{ y }}</p>
  <p v-if="data">{{ data }}</p>
  <p v-else-if="isLoading">Loading...</p>
  <p v-if="error">{{ error }}</p>
  <div>
    <button @click="todoId++">Next todo</button>
  </div>
</template>
