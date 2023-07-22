<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-card {
  background-color: var(--element-color-backgroun2);
  border-radius: calc((10 / 16) * 1rem);
  box-shadow: 0px 0px 20px -4px var(--element-color-tertiary);
  padding: calc((20 / 16) * 1rem);
  margin: calc((20 / 16) * 1rem) 0;
}

@media only screen and (max-width: 34.375em) {
  .base-card {
    padding: calc((15 / 16) * 1rem) calc((10 / 16) * 1rem);
    margin: calc((15 / 16) * 1rem) 0;
  }
}
</style>
