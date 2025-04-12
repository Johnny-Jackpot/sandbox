<script setup lang="ts">
import { shallowRef } from 'vue';
import CompA from './CompA.vue';
import CompB from './CompB.vue';
import CompC from './CompC.vue';

const activeComp = shallowRef(CompA)

</script>

<template>
  <label>
    <input type="radio" v-model="activeComp" :value="CompA"> A
  </label>
  <label>
    <input type="radio" v-model="activeComp" :value="CompB"> B
  </label>
  <label>
    <input type="radio" v-model="activeComp" :value="CompC"> C
  </label>
  <Transition name="fade" mode="out-in">
    <component :is="activeComp" />
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
