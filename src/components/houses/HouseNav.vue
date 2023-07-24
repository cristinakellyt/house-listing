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
          <img
            class="house-nav--icon position-absolute-right-top"
            src="/icons/ic_plus_grey@3x.png"
          />
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

<style scoped>
.house-nav {
  position: relative;
  margin-top: calc((30 / 16) * 1rem);
}

.house-nav__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.position-absolute-right-top {
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-10%);
}

.house-nav--icon {
  width: var(--r20);
}

@media only screen and (max-width: 34.375em) {
  h1 {
    text-align: center;
  }
  .position-absolute-right-top {
    transform: translateY(0);
  }

  .house-nav__header {
    display: block;
  }
}
</style>
