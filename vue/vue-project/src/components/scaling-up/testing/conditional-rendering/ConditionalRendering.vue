<script setup lang="ts">
import { ref } from 'vue';

const admin = ref(false)
</script>

<template>
  <button @click="admin = !admin">Toggle admin</button>
  <nav>
    <a id="profile" href="/profile">My profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
  </nav>
</template>

<style scoped></style>
