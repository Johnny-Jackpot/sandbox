<script setup lang="ts">
import { ref } from 'vue';

const show = ref(true)
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition>
    <p v-if="show">Hello world</p>
  </Transition>
  <Transition name="fade">
    <p v-show="show">Hello world</p>
  </Transition>
  <Transition name="slide-fade">
    <p v-show="show">Hello world</p>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to,
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
