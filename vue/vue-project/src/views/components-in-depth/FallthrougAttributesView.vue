<script setup lang="ts">
import BaseButtonExtended from '@/components/components-in-depth/fallthroug-attributes/BaseButtonExtended.vue';
import BaseButtonNoInheritance from '@/components/components-in-depth/fallthroug-attributes/BaseButtonNoInheritance.vue';
import MultiRootButton from '@/components/components-in-depth/fallthroug-attributes/MultiRootButton.vue';
import MyButton from '@/components/components-in-depth/fallthroug-attributes/MyButton.vue';
import { ref } from 'vue';

function handleClick() {
  alert('Button clicked')
}

const className = ref('large');
function toggleClass() {
  className.value = className.value ? '' : 'large';
}

</script>

<template>
  <MyButton class="large" @click="handleClick" />
  <BaseButtonExtended :class="className" @click="handleClick" />
  <BaseButtonNoInheritance :class="className" @click="handleClick" />
  <MultiRootButton :class="className" @click="handleClick" />
  <div>
    <button @click="toggleClass">Toggle large</button>
  </div>
</template>

<style></style>
