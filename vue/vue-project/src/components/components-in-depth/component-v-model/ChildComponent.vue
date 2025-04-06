<script setup lang="ts">
const model = defineModel<number>({ required: true })

function inc() {
  model.value++
}

</script>

<template>
  <div>Parent model: {{ model }}</div>
  <button @click="inc">Inc</button>
</template>
