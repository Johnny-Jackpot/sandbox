<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const name = ref('Vue 3')
function greet(event: MouseEvent) {
  alert(`Hello, ${name.value}!`)
  alert((event.target as HTMLElement).tagName)
}
function say(message: string) {
  alert(message)
}

function warn(message: string, event: MouseEvent) {
  alert((event.target as HTMLElement).tagName)
  alert(message)
}

function logEvent(event: MouseEvent) {
  console.log(event)
}

function onSubmit(event: Event) {
  console.log(event, 'On submit')
}
</script>

<template>
  <div @click="logEvent">
    <p>Count: {{ count }}</p>
    <button @click="count++">Add 1</button>
    <button @click="greet">Greet</button>
    <button @click="say('Hi')">Say hi</button>
    <button @click="say('by')">Say by</button>
    <button @click="warn('Warn', $event)">warn</button>
    <button @click.stop="(event) => warn('Warn', event)">warn</button>
    <form @submit="onSubmit" action="">
      <button type="submit">Submit</button>
    </form>
    <form @submit.prevent="onSubmit" action="">
      <button type="submit">Submit (prevent)</button>
    </form>
    <form @submit.prevent="onSubmit" action="">
      <input @keyup.enter="onSubmit" @keyup.page-down="onSubmit" />
      <button @click.stop type="submit">Submit (prevent, stop)</button>
    </form>
    <button @click.once="console.log('once')">Once</button>
    <button @click.right="console.log('right click')">Click me</button>
  </div>
</template>

<style>
button {
  display: block;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
}
</style>
