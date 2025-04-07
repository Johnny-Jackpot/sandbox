<script setup lang="ts">
import type { CountType, MessageType } from '@/views/components-in-depth/ProvideInject.vue';
import { inject, ref } from 'vue';

const message = inject<MessageType>('message')
const countInject = inject<CountType>('count');
const appMessage = inject('app:message');

const anotherMessage = inject('anotherMessage', 'Default another message')

const showExpensiveComputedVal = ref(false)

const runExpansiveCalculation = () => {
  alert('run expensive calculation');

  return 500;
}

const expensiveCount = inject('expensiveCount', () => runExpansiveCalculation(), true)


</script>

<template>
  <div>
    <h3>The deepest nested child</h3>
    <p>Message: {{ message }}</p>
    <p>
      Count: {{ countInject?.count }}
      <button @click="countInject?.increment">Increment</button>
    </p>
    <p>App message: {{ appMessage }}</p>
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
