<template>
  <div class="house-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.house-card {
  display: grid;
  grid-template-columns: minmax(100px, 175px) 1fr;
  grid-template-rows: minmax(170px, 180px);
  grid-gap: calc((30 / 16) * 1rem);
  background-color: var(--element-color-backgroun2);
  border-radius: 10px;
  box-shadow: 0px 0px 20px -4px var(--element-color-tertiary);
  padding: calc((20 / 16) * 1rem);
  margin: calc((20 / 16) * 1rem) 0;
}
</style>
