<script setup lang="ts">
import { ref } from 'vue';

const show = ref(true)


function onBeforeEnter(el: Element): void {
  console.log('onBeforeEnter', el);
}

function onEnter(el: Element, done: () => void): void {
  console.log('onEnter', el)
  done()
}

function onAfterEnter(el: Element) {
  console.log('onAfterEnter', el)
}
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter">
    <p v-if="show">Hello world</p>
  </Transition>
</template>

<style scoped></style>
