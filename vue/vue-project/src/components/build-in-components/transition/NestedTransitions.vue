<script setup lang="ts">
import { ref } from 'vue';

const show = ref(true)
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition name="nested" :duration="550">
    <div v-if="show" class="outer">
      <div class="inner">
        Hello
      </div>
    </div>
  </Transition>
  <Transition name="nested" :duration="{ enter: 500, leave: 800 }">
    <div v-if="show" class="outer">
      <div class="inner">
        Hello
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.outer,
.inner {
  padding: 10px;
}

.outer {
  background: darkgrey;
}

.inner {
  background: lightgray;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

.nested-enter-active .inner {
  transition-delay: 0.25s;
}
</style>
