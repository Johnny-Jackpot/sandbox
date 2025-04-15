<script setup lang="ts">
import { ref } from 'vue';

const todos = ref([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false,
  }
])
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </li>
  </ul>
</template>

<style scoped></style>
