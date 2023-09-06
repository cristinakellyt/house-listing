<template>
  <header class="page-header">
    <nav class="page-header__nav">
      <router-link to="/houses" v-if="desktopView"
        ><img
          src="/icons/ic_mobile_navigarion_home_active@3x.png"
          alt="CK-logo"
          class="page-header__logo"
        />
      </router-link>
      <ul>
        <li>
          <router-link to="/houses">
            <span v-if="desktopView">Houses</span>
            <img
              v-else
              id="mobile-header-home-btn"
              src="/icons/ic_mobile_navigarion_home@3x.png"
              alt="home page"
              class="page-header__logo"
            />
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <span v-if="desktopView">About</span>
            <img
              v-else
              id="mobile-header-info-btn"
              src="/icons/ic_mobile_navigarion_info@3x.png"
              alt="about page"
              class="page-header__logo"
            />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { inject } from 'vue'

const desktopView = inject('desktopView')
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.page-header {
  width: 100%;
  background-color: $element-color-background2;
  padding: pxToRem(20);
  font-family: 'Montserrat', sans-serif;
  font-size: pxToRem(18);
  color: $element-color-tertiary;
  position: fixed;
  z-index: 1000;

  &__nav {
    display: flex;
    align-items: center;
    gap: pxToRem(50);
    max-width: $max-width;
    margin: 0 auto;
  }

  &__logo {
    height: pxToRem(40);
  }
}

ul {
  display: flex;
  align-items: center;
  gap: pxToRem(70);

  & li {
    width: pxToRem(70);
  }
}

a {
  display: inline-block;
  color: inherit;
  transition: all 0.3s;

  &:active,
  &:hover,
  &.router-link-active {
    font-weight: 700;
    color: $text-color-primary;
  }
}

/* Header mobile view starts at 550px */
@media only screen and (max-width: 34.375em) {
  .page-header {
    bottom: 0;

    &__nav {
      display: block;
      padding: 0 pxToRem(60);
    }

    &__logo {
      width: pxToRem(25);
      height: pxToRem(25);
    }
  }

  ul {
    justify-content: space-between;

    & li {
      width: fit-content;
    }
  }

  a.router-link-active #mobile-header-info-btn {
    content: url(/icons/ic_mobile_navigarion_info_active@3x.png);
  }

  a.router-link-active #mobile-header-home-btn {
    content: url(/icons/ic_mobile_navigarion_home_active@3x.png);
  }
}
</style>
