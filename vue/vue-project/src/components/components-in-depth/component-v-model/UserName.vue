<script setup lang="ts">
const firstName = defineModel<string>('firstName')
const lastName = defineModel<string>('lastName')

</script>

<template>
  <input type="text" v-model="firstName">
  <input type="text" v-model="lastName">
</template>
