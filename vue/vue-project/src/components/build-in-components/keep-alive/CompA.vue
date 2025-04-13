<script setup lang="ts">
import { onActivated, onDeactivated, ref } from 'vue';

const count = ref(1)

onActivated(() => {
  console.log('Activated')

})

onDeactivated(() => {
  console.log('Deactivated')
})
</script>

<template>
  <p>Comp A count: {{ count }} <button @click="count++">Increment</button></p>
</template>

<style scoped></style>
