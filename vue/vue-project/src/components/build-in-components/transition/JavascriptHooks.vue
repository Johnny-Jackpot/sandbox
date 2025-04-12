<script setup lang="ts">
import gsap from 'gsap';


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
  <Transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
    <slot></slot>
  </Transition>
</template>
