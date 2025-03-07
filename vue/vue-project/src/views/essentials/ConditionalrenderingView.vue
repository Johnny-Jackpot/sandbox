<script setup lang="ts">
import { ref } from 'vue'

const vueIsAwesome = ref(true)
</script>

<template>
  <div>
    <h1>conditional-rendering</h1>
    <div v-show="vueIsAwesome">
      <p v-if="vueIsAwesome">Vue is awesome</p>
      <p v-else>Vue is still awesome</p>
    </div>
    <button @click="vueIsAwesome = !vueIsAwesome">Toggle awesome</button>
    <button @click="vueIsAwesome = !vueIsAwesome">Change message visibility</button>
  </div>
</template>

<style>
.active {
  color: green;
}

.uppercase {
  text-transform: uppercase;
}

.danger {
  color: red;
}
</style>
