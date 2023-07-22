<template>
  <base-card>
    <div class="house-card">
      <slot></slot>
    </div>
  </base-card>
</template>

<style scoped>
.house-card {
  display: grid;
  grid-template-columns: calc((175 / 16) * 1rem) 1fr;
  grid-template-rows: calc((180 / 16) * 1rem);
  grid-gap: calc((30 / 16) * 1rem);
  cursor: pointer;
}

/*Mobile view starts at 550px */
@media only screen and (max-width: 34.375em) {
  .house-card {
    grid-template-columns: calc((93 / 16) * 1rem) 1fr;
    grid-template-rows: calc((100 / 16) * 1rem);
    grid-gap: calc((15 / 16) * 1rem);
  }
}
</style>
