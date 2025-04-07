<script setup lang="ts">
import { useMouse } from '@/composables/mouse';

const { x, y } = useMouse()
</script>

<template>
  <h1>Composables</h1>
  <p>Mouse position is at: {{ x }}, {{ y }}</p>
</template>
