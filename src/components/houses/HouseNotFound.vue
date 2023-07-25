<template>
  <div class="not-found-house">
    <img src="/icons/img_empty_houses@3x.png" alt="house not found" class="not-found-house__image" />
    <p>No results found.</p>
    <p>Please try another keyword</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';
.not-found-house {
  @extend %flex-column-centralize;
  font-family: 'Monteserrat', sans-serif;
  font-weight: 500;
  color: $text-color-secondary;
  height: 80vh;

  &__image {
    width: pxToRem(300);
    margin-bottom: pxToRem(30);
  }
}

@media only screen and (max-width: 34.375em) {
  .not-found-house {
    font-size: pxToRem(14);

    &__image {
      width: pxToRem(250);
    }
  }
}
</style>
