<script setup lang="ts">
interface FancyListProps {
  apiUrl: string;
  perPage: number;
}

const { apiUrl, perPage } = defineProps<FancyListProps>()
const items = Array.from({ length: perPage }, (_, i) => ({
  id: i,
  body: `Body ${i}`,
  username: `username ${i}`,
  likes: i * 2,
}));

</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot name="item" v-bind="item"></slot>
    </li>
  </ul>
</template>
