<script setup lang="ts">
interface BlogPostProps {
  post: {
    title: string;
    id: number;
  },
  addToFavProp?: (id: number) => void;
}
interface BlogPostEmits {
  'add-to-fav': [id: number];
}
const { post, addToFavProp } = defineProps<BlogPostProps>()
const emit = defineEmits<BlogPostEmits>()

function handleClick() {
  if (addToFavProp) {
    addToFavProp(post.id);
  } else {
    emit('add-to-fav', post.id);
  }
}

</script>

<template>
  <h1>{{ post.title }}</h1>
  <article>Blog post</article>
  <button @click="handleClick">Add to Fav</button>
  <slot></slot>
</template>
