<script setup lang="ts">
const message = 'Hello world'
const count = 1;

</script>

<template>
  <div>
    <slot :message="message" :count="count"></slot>
  </div>
</template>
