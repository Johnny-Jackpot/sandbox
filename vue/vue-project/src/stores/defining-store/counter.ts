import { computed, inject, ref } from 'vue'
import { defineStore } from 'pinia'
import { appMessage } from '@/main-inject-keys'

export const useCounterStore = defineStore('definign-store-counter', () => {
  const count = ref(0)
  const name = ref('Alex')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const message = inject(appMessage)

  const nameWithMessage = computed(() => `${name.value} ${message}`)

  return { count, name, doubleCount, increment, nameWithMessage }
})
