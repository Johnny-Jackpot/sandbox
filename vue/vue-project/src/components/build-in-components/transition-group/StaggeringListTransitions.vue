<script setup lang="ts">
import { computed, ref } from 'vue';
import gsap from 'gsap';

const list = [
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' }
]

const query = ref('')

const computedList = computed(
  () => list.filter(
    item => item.msg.toLowerCase().includes(query.value)
  )
)

function onBeforeEnter(el: Element) {
  const htmlEl = el as HTMLElement;
  htmlEl.style.opacity = '0px';
  htmlEl.style.height = '0px';
}

function onEnter(el: Element, done: () => void) {
  const htmlEl = el as HTMLElement
  gsap.to(htmlEl, {
    opacity: 1,
    height: '1.6em',
    delay: (parseFloat(htmlEl.dataset.index ?? '0') || 0) * 0.15,
    onComplete: done
  })
}

function onLeave(el: Element, done: () => void) {
  const htmlEl = el as HTMLElement
  gsap.to(htmlEl, {
    opacity: 0,
    height: 0,
    delay: (parseFloat(htmlEl.dataset.index ?? '0') || 0) * 0.15,
    onComplete: done
  })
}
</script>

<template>
  <input type="text" v-model="query">
  <TransitionGroup tag="ul" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
    <li v-for="(item, index) in computedList" :key="item.msg" :data-index="index">
      {{ item.msg }}
    </li>
  </TransitionGroup>
</template>

<style scoped></style>
