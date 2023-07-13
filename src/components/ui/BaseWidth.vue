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
  border: 4px solid red;
  padding-top: calc((80 / 16) * 1rem);
}
</style>
