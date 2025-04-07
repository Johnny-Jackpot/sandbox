<script setup lang="ts">
import { inject, provide } from 'vue';
import TheDeepestNestedChild from './TheDeepestNestedChild.vue';
import { appMessage } from '@/main-inject-keys';
import { expensiveCountKey } from './keys';

const appMessageVal = inject(appMessage)
provide(appMessage, 'Overrided app message in chain')
provide(expensiveCountKey, 24)
</script>

<template>
  <div>
    <h3>Deep nested child</h3>
    <p>App message: {{ appMessageVal }}</p>
    <TheDeepestNestedChild />
  </div>
</template>

<style scoped>
div {
  padding: 10px;
}
</style>
