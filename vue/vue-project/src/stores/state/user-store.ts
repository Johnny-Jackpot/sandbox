import { defineStore } from 'pinia'

interface UserInfo {
  id: string
  name: string
  age: number
}

interface State {
  userList: UserInfo[]
  user: UserInfo | null
}

export const useUserStore = defineStore('userStore', {
  state: (): State => {
    return {
      userList: [],
      user: null,
    }
  },
})
