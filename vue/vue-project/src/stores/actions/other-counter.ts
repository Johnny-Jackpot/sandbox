import { defineStore } from 'pinia'

export const useOtherCounterStore = defineStore('other-counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
    randomizeCounterAsync(timeout = 1000): Promise<number> {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.randomizeCounter()
          resolve(this.count)
        }, timeout)
      })
    },
  },
})
