<template>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
main {
  max-width: var(--max-width);
  height: 100vh;
  margin: 0 auto;
  border: 1px solid red;
  padding-top: calc((80 / 16) * 1rem);
}

@media only screen and (max-width: 87.5em) {
  main {
    margin: 0 calc((20 / 16) * 1rem);
  }
}
</style>
