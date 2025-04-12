<script setup lang="ts">
import { computed, ref } from 'vue';

const docState = ref<'saved' | 'edited' | 'editing'>('saved')
const isEdited = computed(() => docState.value === 'edited')
const isSaved = computed(() => docState.value === 'saved')
const isEditing = computed(() => docState.value === 'editing')

</script>

<template>
  <div class="container">
    <span class="title">Click to cycle through states: </span>
    <div class="btn-container">
      <Transition name="slide-up" mode="out-in">
        <button @click="docState = 'edited'" v-if="isSaved">Edit</button>
        <button @click="docState = 'editing'" v-else-if="isEdited">Save</button>
        <button @click="docState = 'saved'" v-else-if="isEditing">Cancel</button>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px
}

.btn-container {
  position: relative;
  height: 1rem;
}

button {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
