<template>
  <div class="house-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.house-card {
  display: grid;
  grid-template-columns: calc((175 / 16) * 1rem) 1fr;
  grid-template-rows: calc((180 / 16) * 1rem);
  grid-gap: calc((30 / 16) * 1rem);
  background-color: var(--element-color-backgroun2);
  border-radius: calc((10 / 16) * 1rem);
  box-shadow: 0px 0px 20px -4px var(--element-color-tertiary);
  padding: calc((20 / 16) * 1rem);
  margin: calc((20 / 16) * 1rem) 0;
}

/*Mobile view starts at 550px */
@media only screen and (max-width: 34.375em) {
  .house-card {
    grid-template-columns: calc((93 / 16) * 1rem) 1fr;
    grid-template-rows: calc((100 / 16) * 1rem);
    grid-gap: calc((15 / 16) * 1rem);
    padding: calc((15 / 16) * 1rem) calc((10 / 16) * 1rem);
    margin: calc((15 / 16) * 1rem) 0;
  }
}
</style>
