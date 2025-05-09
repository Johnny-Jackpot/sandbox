import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state): number => state.count * 2,
    doublePlusOne(): number {
      return this.doubleCount + 1
    },
  },
})
