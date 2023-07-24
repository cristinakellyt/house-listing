<template>
  <base-card>
    <div class="house-card">
      <slot></slot>
    </div>
  </base-card>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';
.house-card {
  display: grid;
  grid-template-columns: pxToRem(175) 1fr;
  grid-template-rows: pxToRem(180);
  grid-gap: pxToRem(30);
  cursor: pointer;
}

/*Mobile view starts at 550px */
@media only screen and (max-width: 34.375em) {
  .house-card {
    grid-template-columns: pxToRem(93) 1fr;
    grid-template-rows: pxToRem(100);
    grid-gap: pxToRem(15);
  }
}
</style>
