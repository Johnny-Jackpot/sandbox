<script setup lang="ts">
import { inject, provide, readonly, ref } from 'vue';
import NestedChild from '@/components/provide-inject/NestedChild.vue';
import { countKey, messageKey } from '@/components/provide-inject/keys';
import { appMessage } from '@/main-inject-keys';

const message = ref('Hello world')
const count = ref(0)

const provideCount = {
  count: readonly(count),
  increment() {
    count.value++
  }
}

provide(messageKey, message)
provide(countKey, provideCount)

const appMessageVal = inject(appMessage)
</script>

<template>
  <h1>Provide / Inject</h1>
  <p>App message: {{ appMessageVal }}</p>
  <p>Parent message: {{ message }}</p>
  <p>Parent count: {{ count }}</p>
  <NestedChild />
</template>
