<script setup lang="ts">
import EventsComponent from '@/components/components-in-depth/events/EventsComponent.vue';
import { ref } from 'vue';

const count = ref(0);

</script>

<template>
  <h1>Events</h1>
  <p>Count: {{ count }}</p>
  <EventsComponent :inc-num="4" :dec-num="3" @increment="(n) => count += n" @decrement="n => count -= n" />
</template>
