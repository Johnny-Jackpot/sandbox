<script setup lang="ts">
import { shallowRef } from 'vue';

import CompA from '@/components/build-in-components/keep-alive/CompA.vue';
import CompB from '@/components/build-in-components/keep-alive/CompB.vue';
import CompC from '@/components/build-in-components/keep-alive/CompC.vue';
import CompD from '@/components/build-in-components/keep-alive/CompD.vue';
import CompE from '@/components/build-in-components/keep-alive/CompE.vue';
import CompF from '@/components/build-in-components/keep-alive/CompF.vue';
import CompG from '@/components/build-in-components/keep-alive/CompG.vue';

const activeComp = shallowRef(CompA)
</script>

<template>
  <h1>Keep alive</h1>
  <label><input type="radio" v-model="activeComp" :value="CompA"> A</label><br />
  <label><input type="radio" v-model="activeComp" :value="CompB"> B</label><br />
  <label><input type="radio" v-model="activeComp" :value="CompC"> C</label><br />
  <label><input type="radio" v-model="activeComp" :value="CompD"> D</label><br />
  <label><input type="radio" v-model="activeComp" :value="CompE"> E</label><br />
  <label><input type="radio" v-model="activeComp" :value="CompF"> F</label><br />
  <label><input type="radio" v-model="activeComp" :value="CompG"> G</label>
  <KeepAlive>
    <component :is="activeComp" />
  </KeepAlive>
</template>

<style scoped></style>
