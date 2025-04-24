<script setup lang="ts">
import ConditionalRendering from '@/components/scaling-up/testing/conditional-rendering/ConditionalRendering.vue';
import TodoList from '@/components/scaling-up/testing/todo-list/TodoList.vue';
import TestingEmittedEvents from '@/components/scaling-up/testing/testing-emitted-events/TestingEmittedEvents.vue';
import InteractingWithFormElements from '@/components/scaling-up/testing/testing-forms/InteractingWithFormElements.vue';
import ComplexForm from '@/components/scaling-up/testing/testing-forms/ComplexForm.vue';
import Password from '@/components/scaling-up/testing/passing-data-to-components/Password.vue';
import { onMounted, ref, useTemplateRef } from 'vue';

const pass = useTemplateRef('pass')

onMounted(() => {
  console.log(pass.value?.$props)
})

</script>

<template>
  <h1>Vue test utils crash course</h1>
  <TodoList />
  <ConditionalRendering />
  <TestingEmittedEvents />
  <InteractingWithFormElements />
  <ComplexForm />
  <Password :min-length="10" ref="pass" />
</template>

<style scoped></style>
