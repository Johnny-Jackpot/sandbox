<script setup lang="ts">
import { ref } from 'vue'

const rawHtml = '<span style="color: red">This should be red.</span>'
const textInterpolationId = 'text-interpolation'
const rawHtmlId = 'raw-html'
const buttonDisabled = ref(false)

const attributes = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color: lime',
}
</script>

<template>
  <h1>Template syntax</h1>
  <p :id="textInterpolationId">Text interpolation: {{ rawHtml }}</p>
  <p :id="rawHtmlId">v-html directive <span v-html="rawHtml"></span></p>
  <button :disabled="buttonDisabled">Button</button>
  <button @click="buttonDisabled = !buttonDisabled">Toggle button availability</button>
  <p v-bind="attributes">Test</p>
</template>
