<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import ErrorComponent from '@/components/components-in-depth/async-components/ErrorComponent.vue';
import Loading from '@/components/components-in-depth/async-components/Loading.vue';

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

const Component1 = defineAsyncComponent({
  loader: () => import('@/components/components-in-depth/async-components/AsyncComponentWithSlot.vue'),
  loadingComponent: Loading,
  delay: 1000,
  errorComponent: ErrorComponent,
  timeout: 5000
})

const Component2 = defineAsyncComponent({
  loader: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      import('@/components/components-in-depth/async-components/AsyncComponentWithSlot.vue')
        .then(c => resolve(c as any))
    }, 4000);
  }),
  loadingComponent: Loading,
  delay: 1000,
  errorComponent: ErrorComponent,
  timeout: 5000
})

const Component3 = defineAsyncComponent({
  loader: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      import('@/components/components-in-depth/async-components/AsyncComponentWithSlot.vue')
        .then(c => resolve(c as any))
    }, 7000);
  }),
  loadingComponent: Loading,
  delay: 1000,
  errorComponent: ErrorComponent,
  timeout: 5000
})

const Component4 = defineAsyncComponent({
  loader: () => new Promise((resolve, reject) => {
    reject('Error...')
  }),
  loadingComponent: Loading,
  delay: 200,
  errorComponent: ErrorComponent,
  timeout: 5000
})

const Component5 = defineAsyncComponent({
  loader: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error...')
    }, 3500);
  }),
  loadingComponent: Loading,
  delay: 200,
  errorComponent: ErrorComponent,
  timeout: 5000
})
</script>

<template>
  <h1>Async components</h1>
  <MyAsyncComponent />
  <AnotherAsyncComponent />
  <GlobalAsyncComponent />
  <Component1>
    <p>Component1</p>
  </Component1>
  <Component2>
    <p>Component2</p>
  </Component2>
  <Component3>
    <p>Component3</p>
  </Component3>
  <Component4>
    <p>Component4</p>
  </Component4>
</template>
