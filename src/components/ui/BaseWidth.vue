<template>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
main {
  max-width: var(--max-width);
  margin: 0 auto;
  padding-top: calc((80 / 16) * 1rem);
}

@media only screen and (max-width: 34.375em) {
  main {
    padding-bottom: calc((80 / 16) * 1rem);
    padding-top: 0;
  }
}

@media only screen and (max-width: 87.5em) {
  main {
    margin: 0 var(--margin-right-left-width);
  }
}
</style>
