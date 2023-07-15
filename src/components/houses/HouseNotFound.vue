<template>
  <div class="not-found-house">
    <img src="./../icons/img_empty_houses@3x.png" alt="" class="not-found-house__image" />
    <p>No results found.</p>
    <p>Please try another keyword</p>
  </div>
</template>

<style scoped>
.not-found-house {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Monteserrat', sans-serif;
  font-weight: 500;
  color: var(--text-color-secondary);
  height: 80vh;
}

.not-found-house__image {
  width: calc((300 / 16) * 1rem);
  margin-bottom: calc((30 / 16) * 1rem);
}

@media only screen and (max-width: 34.375em) {
  .not-found-house {
    font-size: var(--r14);
  }

  .not-found-house__image {
    width: calc((250 / 16) * 1rem);
  }
}
</style>
