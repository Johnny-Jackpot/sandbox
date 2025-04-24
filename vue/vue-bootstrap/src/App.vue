<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <ul class="nav nav-pills">
      <li class="nav-item" v-for="route in $router.getRoutes()" :key="route.path">
        <RouterLink :to="route.path" class="nav-link" activeClass="active">
          {{ route.meta?.title || route.name }}
        </RouterLink>
      </li>
    </ul>
  </header>
  <RouterView />
</template>

<style scoped></style>
