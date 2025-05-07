<script setup lang="ts">
import { useCounterStore } from '@/stores/defining-store/counter';
import { storeToRefs } from 'pinia';


const counter = useCounterStore()
const { count, name, doubleCount, nameWithMessage } = storeToRefs(counter)
const { increment } = counter
</script>

<template>
  <h1>Defining Store</h1>
  <div>
    Count: {{ count }}, Double: {{ doubleCount }}, name: {{ name }}, with msg: {{ nameWithMessage }}
  </div>
  <button @click="increment">Inc</button>
</template>
