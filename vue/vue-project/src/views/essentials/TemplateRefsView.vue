<script setup lang="ts">
import { onMounted, reactive, ref, useTemplateRef } from 'vue';
import TestComponent from '@/components/TestComponent.vue';

const input = useTemplateRef('input');
const listItemsRefs = useTemplateRef('list-items');
const items = reactive([1, 2, 3, 4, 5]);
onMounted(() => {
  console.log(listItemsRefs.value);
});
const anotherInput = ref();

const testComponentRef = useTemplateRef('test-component');
onMounted(() => {
  console.log(testComponentRef.value);
});

</script>

<template>
  <h1>TemplateRefsView</h1>
  <input type="text" ref="input">
  <button @click="input?.focus()">Focus</button>
  <div>
    <ul>
      <li v-for="item in items" :key="item" ref="list-items">{{ item }}</li>
    </ul>
  </div>
  <div>
    <input type="text" :ref="(el) => anotherInput = el" />
    <button @click="anotherInput?.focus()">Focus</button>
  </div>
  <TestComponent ref="test-component" />
</template>

<style></style>
