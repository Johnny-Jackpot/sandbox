<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

const items = ref([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }])
const evenItems = computed(() => items.value.filter((item) => item.id % 2 === 0))

const parentMessage = ref('Hello from parent');
const article = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

function addItem() {
  items.value.push({ id: items.value.length + 1, name: `Item ${items.value.length + 1}` })
}

function leaveOnlyFirstItem() {
  items.value = [items.value[0]]
}
</script>

<template>
  <div>
    <ul>
      <li v-for="item, index in items" :key="item.id">{{ parentMessage }} - {{ item.name }} - {{ index }}</li>
    </ul>
    <div>.....</div>
    <h2>Even items</h2>
    <ul>
      <li v-for="item in evenItems" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="addItem">Add item</button>
    <button @click="leaveOnlyFirstItem">Leave only first item</button>
    <ul>
      <li v-for="(item, key, index) in article" :key="key">{{ key }}: {{ item }} - {{ index }}</li>
    </ul>
    <ul>
      <li v-for="n in 5">{{ n }} - {{ parentMessage }}</li>
    </ul>
    <ul>
      <template v-for="item in items" :key="item.id">
        <li>{{ item.name }}</li>
        <li>..............</li>
      </template>
    </ul>
  </div>
</template>

<style></style>
