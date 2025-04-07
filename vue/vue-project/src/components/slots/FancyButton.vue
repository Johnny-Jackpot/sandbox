<script setup lang="ts">
</script>

<template>
  <button class="btn">
    <slot>Fallback content</slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
