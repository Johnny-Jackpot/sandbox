<script setup lang="ts">
import { ref } from 'vue';

interface FormFields {
  email: string;
  description: string;
  city: string;
  subscribe: boolean;
  interval: string;
}

const emit = defineEmits<{
  sumbit: [FormFields]
}>()

const form = ref<FormFields>({
  email: '',
  description: '',
  city: '',
  subscribe: false,
  interval: ''
})

const sumbit = () => {
  emit('sumbit', form.value)
}
</script>

<template>
  <form @submit.prevent="sumbit">
    <input type="text" v-model="form.email">

    <textarea v-model="form.description"></textarea>

    <select v-model="form.city">
      <option value="new-york">New York</option>
      <option value="los-angeles">Los Angeles</option>
    </select>

    <input type="checkbox" v-model="form.subscribe">

    <input type="radio" v-model="form.interval" value="weekly">
    <input type="radio" v-model="form.interval" value="monthly">

    <button type="submit">Submit</button>
  </form>
</template>

<style scoped></style>
