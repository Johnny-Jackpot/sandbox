<script setup lang="ts">
import { capitalize, ref } from 'vue';
import ChildComponent from '@/components/components-in-depth/component-v-model/ChildComponent.vue';
import ChildComponentWithoutMacro from '@/components/components-in-depth/component-v-model/ChildComponentWithoutMacro.vue';
import UserName from '@/components/components-in-depth/component-v-model/UserName.vue';


const count = ref(0);
const firstName = ref<string>('');
const lastName = ref<string>('')

</script>

<template>
  <h1>Component v-model</h1>
  <ChildComponent v-model="count" />
  <ChildComponentWithoutMacro v-model="count" />
  <p>
    {{ firstName }} {{ lastName }}<br />
    <UserName v-model:first-name.capitalize="firstName" v-model:last-name.capitalize="lastName" />
  </p>
</template>
