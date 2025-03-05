<script setup lang="ts">
import { nextTick, reactive, ref } from 'vue';

const count = ref<number>(0);

function increment() {
  count.value++;
}

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar'],
})

const listRef = ref<HTMLUListElement | null>(null);

async function mutateDeeply() {
  obj.value.nested.count++;
  obj.value.arr.push('baz');
  if (listRef.value) {
    console.log(listRef.value.children.length);
  }
  await nextTick();
  if (listRef.value) {
    console.log(listRef.value.children.length);
  }
}

const state = reactive({
  count: 0,
});

</script>

<template>
  <h1>reactivity-fundamentals</h1>
  <button @click="increment">{{ count }}</button>
  <button @click="mutateDeeply">Mutate deeply</button>
  <p>Count: {{ obj.nested.count }}</p>
  <ul ref="listRef">
    <li v-for="item in obj.arr" :key="item">{{ item }}</li>
  </ul>
  <p>{{ state.count }}</p>
  <button @click="state.count++">Update reactive</button>
</template>
