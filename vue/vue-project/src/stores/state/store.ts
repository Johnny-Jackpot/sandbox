import { defineStore } from 'pinia'

export const useStore = defineStore('myStore', {
  state: () => {
    return {
      count: 0,
      name: 'Alex',
      isAdmin: true,
      items: [],
      hasChanged: true,
    }
  },
})
