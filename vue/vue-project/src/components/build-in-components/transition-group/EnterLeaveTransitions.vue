<script setup lang="ts">
import { ref } from 'vue';

const getItems = () => [1, 2, 3, 4, 5]

const items = ref(getItems())

let id = items.value.length + 1;

const getRandomIndex = () => Math.round(Math.random() * items.value.length)

function insert() {
  items.value.splice(getRandomIndex(), 0, id++)
}

function remove() {
  items.value.splice(getRandomIndex(), 1)
}

function reset() {
  items.value = getItems()
  id = items.value.length + 1
}
</script>

<template>
  <button @click="insert">Insert at random index</button>
  <button @click="remove">Remove at random index</button>
  <button @click="reset">Reset</button>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item">{{ item }}</li>
  </TransitionGroup>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
