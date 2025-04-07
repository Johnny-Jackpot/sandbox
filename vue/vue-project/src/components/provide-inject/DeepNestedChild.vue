<script setup lang="ts">
import { inject, provide } from 'vue';
import TheDeepestNestedChild from './TheDeepestNestedChild.vue';

const appMessage = inject('app:message')
provide('app:message', 'Overrided app message in chain')
provide('expensiveCount', 24)
</script>

<template>
  <div>
    <h3>Deep nested child</h3>
    <p>App message: {{ appMessage }}</p>
    <TheDeepestNestedChild />
  </div>
</template>

<style scoped>
div {
  padding: 10px;
}
</style>
