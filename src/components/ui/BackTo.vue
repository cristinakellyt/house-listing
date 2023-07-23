<template>
  <div v-if="desktopView" class="component--back-to">
    <base-button goTo="/houses">
      <template v-slot:icon>
        <img src="/icons/ic_back_grey@3x.png" alt="back button" height="20" width="20" />
      </template>
      <p class="back-to--component__color">Back to overview</p>
    </base-button>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)
</script>

<style scoped>
.component--back-to {
  margin: calc((30 / 16) * 1rem) 0;
}

.back-to--component__color {
  color: var(--text-color-primary);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: var(--r16);
}
</style>
