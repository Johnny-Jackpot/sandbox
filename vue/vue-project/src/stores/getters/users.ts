import { defineStore } from 'pinia'
import { useCounterStore } from './counter'

interface State {
  users: User[]
  message: string
}

type User = {
  id: number
  name: string
}

export const useUsersStore = defineStore('users', {
  state: (): State => ({
    users: [],
    message: 'Hello world!',
  }),
  getters: {
    getUserById: (state) => (userId: number) => state.users.find((user) => user.id === userId),
    messageWithOtherStoreCount(state) {
      const counterStore = useCounterStore()
      return `${state.message} ${counterStore.doubleCount}`
    },
  },
})
