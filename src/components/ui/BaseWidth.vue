<template>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

main {
  max-width: $max-width;
  margin: 0 auto;
  padding-top: pxToRem(80);
}

@media only screen and (max-width: 34.375em) {
  main {
    padding-bottom: pxToRem(80);
    padding-top: 0;
  }
}

@media only screen and (max-width: 87.5em) {
  main {
    margin: 0 pxToRem(20);
  }
}
</style>
