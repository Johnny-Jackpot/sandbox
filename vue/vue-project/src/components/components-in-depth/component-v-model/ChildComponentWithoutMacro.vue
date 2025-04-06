<script setup lang="ts">
const props = defineProps<{ modelValue: number }>()
const emit = defineEmits<{
  'update:modelValue': [number]
}>()

</script>

<template>
  <div>Parent model: {{ props.modelValue }}</div>
  <button @click="emit('update:modelValue', props.modelValue + 1)">Inc</button>
</template>
