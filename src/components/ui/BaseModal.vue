<template>
  <div class="backdrop" @click="cancel"></div>

  <base-card class="modal">
    <div class="modal__content">
      <h2><slot name="title">title</slot></h2>
      <p><slot name="text">Are you sure?</slot></p>
      <base-button btnColor="primary" size="large" @click="confirm"
        ><slot name="firstBtn">Yes</slot></base-button
      >
      <base-button btnColor="secondary" size="large" @click="cancel">
        <slot name="secondBtn">No</slot></base-button
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

<style scoped lang="scss">
@import '@/assets/main.scss';
.backdrop {
  @include position-top-left(fixed, 0, 0);
  background-color: rgba(195, 195, 195, 0.5);
  min-height: 100vh;
  width: 100%;
  z-index: 10;
}
.modal {
  @extend %flex-centralize;
  @include position-top-left(fixed, 50%, 50%);
  transform: translate(-50%, -50%);
  width: pxToRem(688);
  z-index: 100;
  transition: all 0.2s ease-out;

  &__content {
    text-align: center;
    gap: pxToRem(2);
    padding: pxToRem(2);
    width: pxToRem(480);

    & h2 {
      color: $text-color-primary;
      margin-bottom: pxToRem(30);
    }

    & p {
      margin-bottom: pxToRem(60);
    }
  }

  & button {
    width: 100%;
  }

  & button:last-child {
    margin-top: pxToRem(30);
  }
}
</style>
