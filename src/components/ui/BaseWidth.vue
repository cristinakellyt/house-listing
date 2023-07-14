<template>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
main {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: calc((80 / 16) * 1rem) 0;
}

@media only screen and (max-width: 87.5em) {
  main {
    margin: 0 calc((20 / 16) * 1rem);
  }
}
</style>
