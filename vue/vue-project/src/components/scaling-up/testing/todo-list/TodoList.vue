<script setup lang="ts">
import { ref } from 'vue';

const todos = ref([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false,
  }
])
const newTodo = ref('')

function createTodo() {
  todos.value.push({
    id: 2,
    text: newTodo.value,
    completed: false
  })
}
</script>

<template>
  <form data-test="form" @submit.prevent="createTodo">
    <input type="text" data-test="new-todo" v-model="newTodo" />
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </li>
  </ul>
</template>

<style scoped></style>
