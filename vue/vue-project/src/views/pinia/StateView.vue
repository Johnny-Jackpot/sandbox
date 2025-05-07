<script setup lang="ts">
import { useStore } from '@/stores/state/store';
import { useUserStore } from '@/stores/state/user-store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useStore()
const userStore = useUserStore()
const { user, userList } = storeToRefs(userStore)

const name = ref('')
const age = ref(0)
const idCount = ref(0)

function addUser() {
  userList.value.push({
    name: name.value,
    age: age.value,
    id: `${name.value}${age.value}${++idCount.value}`
  })

  name.value = ''
  age.value = 0
}

function patchObj() {
  store.$patch({
    isAdmin: false,
    hasChanged: false,
  })
}

function patchFunc() {
  userStore.$patch((state) => {
    state.userList.push({ name: 'Name', age: 45, id: `${++idCount.value}adfasd` })
  })
}

userStore.$subscribe((mutation, state) => {
  console.log(mutation)
  console.log(state)
})

</script>

<template>
  <h1>State</h1>
  <div>{{ store.count }} {{ store.name }} {{ store.hasChanged }} {{ store.isAdmin }}</div>
  <div>
    User: {{ user?.name }} {{ user?.age }}
  </div>
  <div>
    <input type="text" v-model="name" placeholder="Name">
    <input type="text" v-model="age" placeholder="Age">
    <button @click="addUser">Add user</button>
    <button @click="userStore.$reset(); store.$reset();">Reset</button>
    <button @click="patchObj">Patch obj</button>
    <button @click="patchFunc">Patch func</button>
  </div>
  <ul>
    <li v-for="u in userList" :key="u.id">
      {{ u.name }} {{ u.age }}
    </li>
  </ul>

</template>
