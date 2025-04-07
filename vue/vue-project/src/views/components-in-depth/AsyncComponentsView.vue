<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const MyAsyncComponent = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const Component = await import('@/components/components-in-depth/async-components/MyAsyncComponent.vue')
      console.log(Component);
      resolve(Component as any)
    }, 5000)
  })
})

const AnotherAsyncComponent = defineAsyncComponent(() =>
  import('@/components/components-in-depth/async-components/AnotherAsyncComponent.vue'))
</script>

<template>
  <h1>Async components</h1>
  <MyAsyncComponent />
  <AnotherAsyncComponent />
  <GlobalAsyncComponent />
</template>
