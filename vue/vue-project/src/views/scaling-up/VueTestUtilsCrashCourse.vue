<script setup lang="ts">
import ConditionalRendering from '@/components/scaling-up/testing/conditional-rendering/ConditionalRendering.vue';
import TodoList from '@/components/scaling-up/testing/todo-list/TodoList.vue';
import TestingEmittedEvents from '@/components/scaling-up/testing/testing-emitted-events/TestingEmittedEvents.vue';
import InteractingWithFormElements from '@/components/scaling-up/testing/testing-forms/InteractingWithFormElements.vue';
import ComplexForm from '@/components/scaling-up/testing/testing-forms/ComplexForm.vue';


</script>

<template>
  <h1>Vue test utils crash course</h1>
  <TodoList />
  <ConditionalRendering />
  <TestingEmittedEvents />
  <InteractingWithFormElements />
  <ComplexForm />
</template>

<style scoped></style>
