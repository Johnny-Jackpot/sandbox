<script setup lang="ts">
import NestedChild from '@/components/provide-inject/NestedChild.vue';
import { inject, provide, readonly, ref } from 'vue';

const message = ref('Hello world')
const count = ref(0)

export type MessageType = typeof message;

const provideCount = {
  count: readonly(count),
  increment() {
    count.value++
  }
}

export type CountType = typeof provideCount;

provide('message', message)
provide('count', provideCount)

const appMessage = inject('app:message')
</script>

<template>
  <h1>Provide / Inject</h1>
  <p>App message: {{ appMessage }}</p>
  <p>Parent message: {{ message }}</p>
  <p>Parent count: {{ count }}</p>
  <NestedChild />
</template>
