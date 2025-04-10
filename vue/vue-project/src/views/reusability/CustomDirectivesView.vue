<script setup lang="ts">
const vHighlight = {
  mounted: (el: HTMLElement) => {
    el.classList.add('is-highlight');
  }
}
</script>

<template>
  <h1>Custom directives</h1>
  <p v-highlight>Hello world</p>
</template>


<style scoped>
.is-highlight {
  background-color: yellow;
}
</style>
