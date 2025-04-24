<script setup lang="ts">
import { computed, ref } from 'vue';

const { minLength } = defineProps<{
  minLength: number
}>()

const password = ref('')

const error = computed(() => password.value.length < minLength)

</script>

<template>
  <div>
    <input type="text" v-model="password">
    <div v-if="error">Password must be at least {{ minLength }} characters</div>
  </div>
</template>

<style scoped></style>
