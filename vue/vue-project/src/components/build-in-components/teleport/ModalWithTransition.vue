<script setup lang="ts">
const { show } = defineProps<{
  show: boolean
}>()
const emit = defineEmits<{
  close: []
}>()

</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot name="body"></slot>
        </main>
        <footer>
          <slot name="footer">
            <button @click="emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transform: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  background-color: #fff;
  margin: auto;
  padding: 20px 30px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

header {
  margin-top: 0;
  color: #42b983;
}

main {
  margin: 20px 0;
}

button {
  float: right;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
</style>
