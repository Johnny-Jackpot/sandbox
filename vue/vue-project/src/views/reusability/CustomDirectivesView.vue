<script setup lang="ts">
const vHighlight = {
  mounted: (el: HTMLElement) => {
    el.classList.add('is-highlight');
  }
}

const vFocus = {
  mounted: (el: HTMLInputElement) => {
    el.focus()
  }
}

const vMyDirective = {
  created: (el, binding, vnode) => {
    debugger
  },
  beforeMount(el, binding, vnode) {
    debugger
  },
  mounted(el, binding, vnode) {
    debugger
  },
  beforeUpdate(el, binding, vnode, prevVnode) {
    debugger
  },
  updated(el, binding, vnode, prevVnode) {
    debugger
  },
  beforeUnmount(el, binding, vnode) {
    debugger
  },
  unmounted(el, binding, vnode) {
    debugger
  }
}
</script>

<template>
  <h1>Custom directives</h1>
  <p v-highlight>Hello world</p>
  <p v-green v-my-directive>This is green paragraph</p>
  <input v-focus type="text">
</template>


<style scoped>
.is-highlight {
  background-color: yellow;
}
</style>
