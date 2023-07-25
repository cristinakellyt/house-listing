<template>
  <div class="back-to__container">
    <base-button :goTo="goTo" :class="{ 'back-to__icon-position': !desktopView }">
      <template v-slot:icon>
        <img src="/icons/ic_back_grey@3x.png" width="20" height="20" alt="back to button" />
      </template>
      <slot>
        <p v-if="desktopView" class="back-to__paragraph">Back to overview</p>
      </slot>
    </base-button>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

defineProps({
  goTo: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.back-to {
  &__container {
    margin: pxToRem(30) 0;
  }

  &__paragraph {
    color: $text-color-primary;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: pxToRem(16);
  }

  &__icon-position {
    @include position-top-left(absolute, 0, 0);
    color: red;
  }
}
</style>
