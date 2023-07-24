<template>
  <router-link v-if="goTo" :to="goTo ? goTo : ''">
    <button :class="`${btnColor} ${size}`">
      <div class="button-div">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    </button>
  </router-link>
  <button v-else :class="`${btnColor} ${size}`">
    <div class="button-div">
      <slot name="icon"></slot>
      <slot></slot>
    </div>
  </button>
</template>

<script setup>
defineProps({
  goTo: {
    type: String,
    default: ''
  },
  btnColor: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'default'
  }
})
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.button-div {
  @extend %flex-centralize;
  gap: pxToRem(15);
}

button {
  display: inline-block;
  border: none;
  border-radius: pxToRem(10);
  background-color: transparent;
  color: $element-color-background2;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}
button.default {
  background-color: transparent;
}

button.primary {
  background-color: $element-color-primary;
}

button.secondary {
  background-color: $element-color-secondary;
}

button.tertiary {
  background-color: $element-color-tertiary;
}

button.large {
  padding: pxToRem(15) pxToRem(20);
  font-size: pxToRem(18);
}

button.small {
  padding: pxToRem(10) pxToRem(15);
  font-size: pxToRem(12);
}

a:link,
a:visited {
  color: inherit;
}
</style>
