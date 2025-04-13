<script setup lang="ts">
import { ref } from 'vue';

import Modal from '@/components/build-in-components/teleport/Modal.vue';
import ModalWithTransition from '@/components/build-in-components/teleport/ModalWithTransition.vue';

const show = ref(true)

</script>

<template>
  <h1>Teleport</h1>
  <div class="outer">
    <Modal />
    <Modal />
    <Modal />
    <button @click="show = true">Open modal with transition</button>
    <Teleport to="body">
      <ModalWithTransition :show="show" @close="show = false">
        <template #header>
          <h2>Modal heading</h2>
        </template>
        <template #body>
          Modal body
        </template>
      </ModalWithTransition>
    </Teleport>
  </div>
</template>

<style scoped></style>
