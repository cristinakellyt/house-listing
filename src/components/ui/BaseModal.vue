<template>
  <div class="backdrop" @click="cancel"></div>

  <base-card class="modal">
    <div class="modal__content">
      <h2><slot name="title">title</slot></h2>
      <p><slot name="text">Are you sure?</slot></p>

      <base-button btnColor="primary" @click="confirm"
        ><slot name="firstBtn">Yes</slot></base-button
      >
      <base-button btnColor="secondary" @click="cancel"
        ><slot name="secondBtn">No</slot></base-button
      >
    </div>
  </base-card>
</template>

<script setup>
const emit = defineEmits(['confirm', 'cancel'])

const confirm = () => {
  emit('confirm')
}

const cancel = () => {
  emit('cancel')
}
</script>

<style scoped>
.backdrop {
  background-color: rgba(195, 195, 195, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  z-index: 10;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc((688 / 16) * 1rem);
  z-index: 100;
  transition: all 0.2s ease-out;
}

.modal__content {
  text-align: center;
  gap: 2rem;
  padding: 2rem;
  width: calc((480 / 16) * 1rem);
}

.modal__content h2 {
  color: var(--text-color-primary);
  margin-bottom: var(--r30);
}

.modal__content p {
  margin-bottom: calc((60 / 16) * 1rem);
}

button:last-child {
  margin-top: var(--r30);
}

button {
  display: inline-block;
  background-color: var(--element-color-primary);
  border: none;
  padding: var(--r15) var(--r20);
  border-radius: var(--r10);
  color: var(--element-color-background2);
  font-weight: 700;
  font-size: var(--r18);
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
}
</style>
