<script setup lang="ts">
import { watch } from 'vue';

interface Props {
  title: string;
  likes: number;
}

const { title, likes } = defineProps<Props>()

watch(() => likes, (newLikes, oldLikes) => {
  console.log(newLikes, oldLikes);
})

</script>

<template>
  <h1>{{ title }}</h1>
  <p>Likes: {{ likes }}</p>
</template>
