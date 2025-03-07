<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
})

const hasPublishedBooks = computed(() => {
  console.log('computed()')
  return author.books.length > 0 ? 'Yes' : 'No'
})

function computehasPublishedBooks() {
  console.log('computehasPublishedBooks()')
  return author.books.length > 0 ? 'Yes' : 'No'
}

function addBook() {
  author.books.push('Vue 5 - The Awesomeness')
}

const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
  get(previousValue) {
    console.log(previousValue)

    return firstName.value + ' ' + lastName.value
  },

  set(newFullName) {
    ;[firstName.value, lastName.value] = newFullName.split(' ')
  },
})
</script>

<template>
  <p>Has published books:</p>
  <span>{{ hasPublishedBooks }}</span>
  <span>{{ hasPublishedBooks }}</span>
  <span>{{ hasPublishedBooks }}</span>
  <span>{{ hasPublishedBooks }}</span>
  <span>{{ hasPublishedBooks }}</span>
  <span>{{ hasPublishedBooks }}</span>
  <span>{{ computehasPublishedBooks() }}</span>
  <span>{{ computehasPublishedBooks() }}</span>
  <span>{{ computehasPublishedBooks() }}</span>
  <span>{{ computehasPublishedBooks() }}</span>
  <span>{{ computehasPublishedBooks() }}</span>
  <button @click="addBook">Add book</button>
  <p>Full name: {{ fullName }}</p>
  <button @click="fullName = 'Joe Black'">Change full name to "Joe Black"</button>
</template>
