<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCounterStore } from '@/stores/getters/counter';
import { useUsersStore } from '@/stores/getters/users';

const counterStore = useCounterStore()
const usersStore = useUsersStore()

const userName = ref('')
const id = ref(0)

function addUser() {
  usersStore.users.push({
    id: ++id.value,
    name: userName.value
  })

  userName.value = ''
}

const filterId = ref<number | null>(null)

const filteredUsers = computed(() => {
  if (filterId.value === null) {
    return usersStore.users
  }

  const user = usersStore.getUserById(filterId.value)
  return user ? [user] : []
})

</script>

<template>
  <h1>Getters</h1>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double count: {{ counterStore.doubleCount }}</p>
    <p>Double count plus one: {{ counterStore.doublePlusOne }}</p>
    <button @click="counterStore.count++">Increment</button>
    <button @click="counterStore.$reset()">Reset</button>
  </div>
  <div>
    <h2>Other store access:</h2>
    <p>{{ usersStore.messageWithOtherStoreCount }}</p>
  </div>
  <div>
    <h2>Users:</h2>
    <form @submit.prevent>
      <input type="text" name="name" id="name" v-model="userName">
      <button @click="addUser">Add user</button>
    </form>
    <div>
      <input type="number" v-model="filterId" placeholder="Filter users by id">
      <button @click="filterId = null;">Reset</button>
    </div>
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
