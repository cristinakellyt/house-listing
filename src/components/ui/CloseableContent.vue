<template>
  <div class="content">
    <img
      src="/icons/ic_clear_white@3x.png"
      class="clear-content__icon"
      :class="`${size}`"
      @click="onClickHandler"
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

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 100%;
}
.clear-content__icon {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(40%, -20%);
  cursor: pointer;
}

.clear-content__icon.small {
  width: var(--r30);
  height: var(--r30);
}

.clear-content__icon.large {
  width: calc((60 / 16) * 1rem);
  height: calc((60 / 16) * 1rem);
}
</style>
