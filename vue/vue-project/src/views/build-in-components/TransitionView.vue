<script setup lang="ts">
import { ref } from 'vue';

import CssBasedTransitions from '@/components/build-in-components/transition/CssBasedTransitions.vue';
import JavascriptHooks from '@/components/build-in-components/transition/JavascriptHooks.vue';
import NestedTransitions from '@/components/build-in-components/transition/NestedTransitions.vue';
import TransitionBasicUsage from '@/components/build-in-components/transition/TransitionBasicUsage.vue';

const show = ref(true)

</script>

<template>
  <h1>Transition</h1>
  <TransitionBasicUsage />
  <CssBasedTransitions />
  <NestedTransitions />
  <button @click="show = !show">Toggle</button>
  <JavascriptHooks>
    <div v-if="show" class="gsap-box"></div>
  </JavascriptHooks>
</template>

<style scoped>
.gsap-box {
  background: red;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 20px;
}
</style>
