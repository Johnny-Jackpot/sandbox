<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open modal</button>
  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  font-size: 2rem;
  position: fixed;
  z-index: 9999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: lightyellow;
  padding: 20px 40px;
  border: 3px solid lightgray;
  border-radius: 10px;
}
</style>
