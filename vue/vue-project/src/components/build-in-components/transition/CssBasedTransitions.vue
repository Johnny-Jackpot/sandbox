<script setup lang="ts">
import { ref } from 'vue';

const show = ref(true)
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition name="bounce">
    <p v-show="show" style="text-align: center;">Hello here is some bouncy text!</p>
  </Transition>
  <Transition enter-active-class="enter" leave-active-class="leave" type="animation">
    <p v-show="show" style="text-align: center;">Hello here is some bouncy text!</p>
  </Transition>
</template>

<style scoped>
.bounce-enter-active,
.enter {
  animation: bounce-in 0.5s;
}

.bounce-leave-active,
.leave {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

p:hover {
  cursor: pointer;
  transform: scale(1.2);
}
</style>
