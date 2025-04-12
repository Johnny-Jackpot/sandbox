<script setup lang="ts">
import { ref } from 'vue';
import gsap from 'gsap';

const show = ref(true)


function onBeforeEnter(el: Element): void {
  gsap.set(el, {
    scale: 0.25,
    opacity: 1,
  })
}

function onEnter(el: Element, done: () => void): void {
  gsap.to(el, {
    duration: 1,
    scale: 1,
    opacity: 1,
    ease: 'elastic.inOut(2.5, 1)',
    onComplete: done
  })
}

function onLeave(el: Element, done: () => void): void {
  gsap.to(el, {
    duration: 0.7,
    scale: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)',
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done,
  })
}


</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
    <div class="gsap-box" v-if="show"></div>
  </Transition>
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
