<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const textDanger = ref(false)

const classObj = reactive({
  danger: false,
  uppercase: false,
})

const isActive = ref(false)
const error = ref(false)
const computedClassObj = computed(() => ({
  active: isActive.value && !error.value,
  danger: error.value && !isActive.value,
}))

const activeClass = ref('active')
const uppercaseClass = ref('uppercase')

const styleObject = reactive({
  color: 'red',
  fontSize: '20px',
})
</script>

<template>
  <div>
    <h1>Class and style bindings</h1>
    <div>
      <div class="uppercase" :class="{ danger: textDanger }">Text</div>
      <button @click="textDanger = !textDanger">Toggle danger</button>
    </div>
    <div>
      <div :class="classObj">Text</div>
      <button @click="classObj.danger = !classObj.danger">Toggle danger</button>
      <button @click="classObj.uppercase = !classObj.uppercase">Toggle uppercase</button>
    </div>
    <div>
      <div :class="computedClassObj">Text</div>
      <button @click="isActive = !isActive">Toggle active</button>
      <button @click="error = !error">Toggle danger</button>
    </div>
    <div>
      <div :class="[activeClass, uppercaseClass]">Text</div>
      <div :style="styleObject">Text</div>
    </div>
  </div>
</template>

<style>
.active {
  color: green;
}

.uppercase {
  text-transform: uppercase;
}

.danger {
  color: red;
}
</style>
