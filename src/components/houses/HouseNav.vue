<template>
  <div class="house-nav">
    <div class="house-nav__header">
      <h1>Houses</h1>
      <base-button v-if="desktopView" btnColor="primary" size="large" goTo="/houses/create">
        <template v-slot:icon>
          <img class="house-nav--icon" src="/icons/ic_plus_white@3x.png" />
        </template>
        <span>CREATE NEW</span>
      </base-button>
      <base-button v-else goTo="/houses/create" size="small">
        <template v-slot:icon>
          <img class="house-nav--icon__mobile" src="/icons/ic_plus_grey@3x.png" />
        </template>
      </base-button>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.house-nav {
  position: relative;
  margin-top: pxToRem(30);

  &__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &--icon {
    width: pxToRem(20);

    &__mobile {
      @include position-absolute(0, 0);
      width: pxToRem(20);
    }
  }
}

@media only screen and (max-width: 34.375em) {
  h1 {
    text-align: center;
  }
  .house-nav {
    &__header {
      display: block;
    }
  }
}
</style>
