<template>
  <div class="page-not-found">
    <img src="/icons/img_empty_houses@3x.png" alt="" class="page-not-found__image" />
    <h1>PAGE NOT FOUND :/</h1>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';
.page-not-found {
  @extend %flex-column-centralize;
  height: 40vh;

  &__image {
    width: 40%;
  }
}
</style>
