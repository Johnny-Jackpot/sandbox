<script setup lang="ts">
import ComponentWithProps from '@/components/components-in-depth/props/ComponentWithProps.vue'
import { ref } from 'vue';

const likes = ref(1);
</script>

<template>
  <h1>Props</h1>
  <button @click="likes++">Increment likes</button>
  <ComponentWithProps title="Title" :likes="likes" />
  <ComponentWithProps title="Another Title" :likes="3" />
  <ComponentWithProps title="Yet Another Title" :likes="8" />
</template>

<style></style>
