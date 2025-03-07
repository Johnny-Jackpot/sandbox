<script setup lang="ts">
import { reactive, ref } from 'vue';

import BlogPost from '@/components/essentials/components-basics/BlogPost.vue';
import BlogPostRow from '@/components/essentials/components-basics/BlogPostRow.vue';

const posts = reactive([
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
])

const addToFavAsEvent = (id: number) => {
  console.log('Add to fav ev', id);
}

const addToFavProp = (id: number) => {
  console.log('Add to fav prop', id);
}

const component = ref<'p' | 'span'>('p')
function toggleComponent() {
  component.value = component.value === 'p' ? 'span' : 'p';
}

</script>

<template>
  <h1>Components basics vue</h1>
  <component :is="component" @click="toggleComponent">Component</component>
  <button @click="toggleComponent">Toggle component</button>
  <BlogPost v-for="post in posts" :key="post.id" :post="post" :add-to-fav-prop="addToFavProp"
    @add-to-fav="addToFavAsEvent">
    <p>Post id: {{ post.id }}</p>
  </BlogPost>
</template>

<style></style>
