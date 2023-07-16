<template>
  <div class="house-details">
    <div class="house-details__container">
      <div v-if="desktopView" class="back-to-house-list">
        <img
          src="./../components/icons/ic_back_grey@3x.png"
          alt="back button"
          height="20"
          width="20"
        />
        <p>Back to overview</p>
      </div>
      <DetailImage />
      <HouseDescription />
    </div>
  </div>
</template>
<script setup>
import DetailImage from './../components/houseDetail/DetailImage.vue'
import HouseDescription from './../components/houseDetail/HouseDescription.vue'

import { inject, computed } from 'vue'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)
</script>
<style scoped>
.house-details {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.house-details__container {
  position: relative;
}

.back-to-house-list {
  display: flex;
  align-items: center;
  gap: var(--r15);
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: var(--r16);
  margin: calc((30 / 16) * 1rem) 0;
  color: var(--text-color-primary);
}

@media only screen and (max-width: 34.375em) {
  .house-details {
    grid-template-columns: 1fr;
    margin: 0 calc((-1) * var(--margin-right-left-width));
  }
}
</style>
