<template>
  <div class="backdrop" @click="cancel"></div>
  <base-card class="modal">
    <div class="modal__content">
      <slot name="title">title</slot>
      <div>
        <slot name="text">Are you sure?</slot>
      </div>

      <div class="modal__content--buttons">
        <base-button :btnColor="firstBnTheme" :size="btnsSize" @click="confirm"
          ><slot name="firstBtn">Yes</slot></base-button
        >
        <base-button :btnColor="secondBtnTheme" :size="btnsSize" @click="cancel">
          <slot name="secondBtn">No</slot></base-button
        >
      </div>
    </div>
  </base-card>
</template>

<script setup>
const emit = defineEmits(['confirm', 'cancel'])
const props = defineProps({
  firstBnTheme: String,
  secondBtnTheme: String,
  btnsSize: String
})

console.log(props.firstBnTheme)

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
  width: pxToRem(640);
  z-index: 100;
  transition: all 0.2s ease-out;

  &__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: pxToRem(20);
    padding: pxToRem(30) 0;

    &--buttons {
      @include flex-gap(column, pxToRem(20));
      margin-top: pxToRem(32);
    }
  }
}

@media only screen and (max-width: 34.375em) {
  .modal {
    width: pxToRem(320);

    &__content {
      gap: pxToRem(10);
      padding: pxToRem(10) 0;

      &--buttons {
        margin-top: pxToRem(10);
      }
    }
  }
}
</style>
