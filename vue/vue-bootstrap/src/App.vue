<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink v-for="route in $router.getRoutes()" :to="route.path" :key="route.path">
        {{ route.meta?.title || route.name }}
      </RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
