<script setup lang="ts">
import { appMessage } from '@/main-inject-keys';
import { inject, ref } from 'vue';
import { countKey, expensiveCountKey, messageKey } from './keys';

const message = inject(messageKey)
const countInject = inject(countKey);
const appMessageVal = inject(appMessage);

const anotherMessage = inject('anotherMessage', 'Default another message')

const showExpensiveComputedVal = ref(false)

const runExpansiveCalculation = () => {
  alert('run expensive calculation');

  return 500;
}

const expensiveCount = inject(expensiveCountKey, () => runExpansiveCalculation(), true)


</script>

<template>
  <div>
    <h3>The deepest nested child</h3>
    <p>Message: {{ message }}</p>
    <p>
      Count: {{ countInject?.count }}
      <button @click="countInject?.increment">Increment</button>
    </p>
    <p>App message: {{ appMessageVal }}</p>
    <p>Another message: {{ anotherMessage }}</p>
    <p v-if="showExpensiveComputedVal">
      Expensive count: {{ expensiveCount }}
    </p>
    <div>
      <button @click="showExpensiveComputedVal = !showExpensiveComputedVal">
        Toggle expensive computed val
      </button>
    </div>
  </div>
</template>

<style scoped>
div {
  padding: 10px;
}
</style>
