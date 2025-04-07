<script setup lang="ts">
import FancyButton from '@/components/slots/FancyButton.vue';

const buttonTitle = 'Click me';

</script>

<template>
  <h1>Slots</h1>
  <div>Button title: {{ buttonTitle }}</div>
  <div>
    <FancyButton>{{ buttonTitle }}</FancyButton>
  </div>
  <div>
    <FancyButton />
  </div>
</template>
