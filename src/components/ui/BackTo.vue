<template>
  <div class="back-to__container">
    <base-button :goTo="goTo" :class="{ 'position-absolute-right-top': !desktopView }">
      <template v-slot:icon>
        <img src="/icons/ic_back_grey@3x.png" width="20" height="20" />
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

<style scoped>
.back-to__container {
  margin: calc((30 / 16) * 1rem) 0;
}

.back-to__paragraph {
  color: var(--text-color-primary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: var(--r16);
}

.position-absolute-right-top {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
