import { defineStore } from 'pinia'
import { useOtherCounterStore } from './other-counter'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
    randomizeCounterAsync(timeout = 1000) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.randomizeCounter()
          resolve(this.count)
        }, timeout)
      })
    },
    randomizeFromOtherStoreAsync(timeout = 1000) {
      const otherCounterStore = useOtherCounterStore()
      otherCounterStore.randomizeCounterAsync(timeout).then((c) => (this.count = c))
    },
    errorAction() {
      throw new Error('Error action')
    },
  },
})
