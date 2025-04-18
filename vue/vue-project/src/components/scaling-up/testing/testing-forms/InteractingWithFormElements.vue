<script setup lang="ts">
import { ref } from 'vue';

const email = ref('')
const emit = defineEmits<{
  submit: [string]
}>()

const submit = () => {
  emit('submit', email.value)
}
</script>

<template>
  <div>
    <input type="text" v-model="email">
    <button @click="submit">Submit</button>
  </div>
</template>

<style scoped></style>
