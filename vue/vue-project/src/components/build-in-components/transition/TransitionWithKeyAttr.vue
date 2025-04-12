<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';

const count = ref(0)

const intervalId = setInterval(() => {
  count.value++
}, 1000);

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="wrapper">
    <Transition mode="out-in">
      <span :key="count">{{ count }}</span>
    </Transition>
  </div>
</template>

<style scoped>
span {
  font-size: 4rem;
}

.wrapper {
  position: relative;
}

.v-enter-active,
.v-leave-active {
  position: absolute;
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
