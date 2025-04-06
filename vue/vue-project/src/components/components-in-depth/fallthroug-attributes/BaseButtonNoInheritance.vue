<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

</script>

<template>
  <p>
    <button v-bind="$attrs">Base button</button>
    <span>Fallthrough attributes: {{ $attrs }}</span>
    <span>{{ $attrs.onClick }}</span>
  </p>

</template>

<style scoped>
.large {
  padding: 5px 10px;
  font-size: 20px;
}
</style>
