<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const count = ref(0);

onMounted(() => {
  console.log('Counter onMounted');
});

onUnmounted(() => {
  console.log('Counter onUnmounted');
});

function throwAnError() {
  throw new Error('Error from view');
}
</script>

<template>
  <p>Counter: {{ count }}</p>
  <button @click="count++">Increment</button>
  <button @click="throwAnError">Throw an error</button>
</template>
