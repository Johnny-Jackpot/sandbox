<script setup lang="ts">
import { useCounterStore } from '@/stores/actions/counter';

const counterStore = useCounterStore()
function randomizeAsync() {
  counterStore.randomizeCounterAsync(2500)
    .then(count => {
      console.log(count)
    })
}

counterStore.$onAction(({ name, store, args, after, onError }) => {
  const startTime = Date.now()
  console.log(`Start "${name}"" with params [${args.join(', ')}]`)

  after((result) => {
    console.log(`Finished "${name}" after ${Date.now() - startTime} ms.\n Result: ${result}`)
  })

  onError((error) => {
    console.warn(`Failed after ${Date.now() - startTime}ms.\nError: ${error}`)
  })
})

</script>

<template>
  <h1>Actions</h1>
  <p>Count: {{ counterStore.count }}</p>
  <div>
    <button @click="counterStore.increment()">Increment</button>
    <button @click="counterStore.randomizeCounter()">Randomize</button>
    <button @click="randomizeAsync()">Randomize Async</button>
    <button @click="counterStore.randomizeFromOtherStoreAsync(4000)">Randomize Async From Other Store</button>
    <button @click="counterStore.errorAction()">Trigger error</button>
    <button @click="counterStore.$reset()">Reset</button>
  </div>
</template>
