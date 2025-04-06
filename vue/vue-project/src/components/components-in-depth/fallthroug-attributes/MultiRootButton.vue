<script setup lang="ts">
import { useAttrs } from 'vue';

const attr = useAttrs()


</script>

<template>
  <span>Multi root button component</span>
  <button v-bind="$attrs">Base button</button>
  <span>{{ attr }}</span>
</template>

<style scoped>
.large {
  padding: 5px 10px;
  font-size: 20px;
}
</style>
