<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

.base-card {
  background-color: $element-color-background2;
  border-radius: pxToRem(10);
  box-shadow: 0 0 pxToRem(20) pxToRem(-4) $element-color-tertiary;
  padding: pxToRem(20);
  margin: pxToRem(20) 0;
}

@media only screen and (max-width: 34.375em) {
  .base-card {
    padding: pxToRem(15) pxToRem(10);
    margin: pxToRem(15) 0;
  }
}
</style>
