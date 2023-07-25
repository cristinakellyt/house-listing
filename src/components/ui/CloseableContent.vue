<template>
  <div class="content">
    <img
      src="/icons/ic_clear_white@3x.png"
      class="clear-content__icon"
      :class="`${size}`"
      @click="onClickHandler"
      alt="close image"
    />
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'large'
  }
})

const emit = defineEmits(['onClose'])

const onClickHandler = () => {
  emit('onClose')
}
</script>

<style lang="scss">
@import '@/assets/main.scss';
.content {
  position: relative;
  width: 100%;
  height: 100%;
}
.clear-content__icon {
  @include position-absolute(0, 0);
  transform: translate(40%, -20%);
  cursor: pointer;

  &.small {
    width: pxToRem(30);
    height: pxToRem(30);
  }

  &.large {
    width: pxToRem(60);
    height: pxToRem(60);
  }
}
</style>
