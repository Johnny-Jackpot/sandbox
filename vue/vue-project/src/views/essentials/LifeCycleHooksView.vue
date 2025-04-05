<script setup lang="ts">
import {
  onMounted,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onScopeDispose,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

import CounterComponent from '@/components/essentials/lifecycle-hooks/CounterComponent.vue';

const count = ref(0);

onBeforeMount(() => {
  console.log('View onBeforeMount');
});

onMounted(() => {
  console.log('View onMounted');
});

onBeforeUpdate(() => {
  console.log('View onBeforeUpdate');
});

onUpdated(() => {
  console.log('View onUpdated');
});

onBeforeUnmount(() => {
  console.log('View onBeforeUnmount');
});

onUnmounted(() => {
  console.log('View onUnmounted');
});

onErrorCaptured((err, instance, info) => {
  console.log('View onErrorCaptured');
  console.dir(err);
  console.dir(instance);
  console.dir(info);
});

function throwAnError() {
  throw new Error('Error from view');
}

const counterKey = ref(0);

onRenderTracked((event) => {
  console.log('View onRenderTracked');
  console.dir(event);
});

onRenderTriggered((event) => {
  console.log('View onRenderTriggered');
  console.dir(event);
});

onActivated(() => {
  console.log('View onActivated');
});

onDeactivated(() => {
  console.log('View onDeactivated');
});

onServerPrefetch(() => {
  console.log('View onServerPrefetch');
});

onScopeDispose(() => {
  console.log('View onScopeDispose');
});

</script>

<template>
  <h1>lifecycle-hooks</h1>
  <p>Count: {{ count }}</p>
  <GlobalComponent />
  <button @click="count++">Increment</button>
  <div>
    <CounterComponent :key="counterKey" />
    <button @click="counterKey++">Change counter key</button>
  </div>
  <div>
    <button @click="throwAnError">Throw error</button>
  </div>
</template>

<style></style>
