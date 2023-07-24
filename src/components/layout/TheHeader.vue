<template>
  <header>
    <nav>
      <router-link to="/houses" v-if="desktopView"
        ><img src="/icons/img_logo_dtt@3x.png" alt="dtt-logo"
      /></router-link>
      <ul>
        <li>
          <router-link to="/houses">
            <span v-if="desktopView">Houses</span>
            <img
              v-else
              id="mobile-header-home-btn"
              src="/icons/ic_mobile_navigarion_home@3x.png"
              alt="home page"
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
            />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['windowWidth'])

const desktopView = computed(() => props.windowWidth > 550)
</script>

<style scoped>
header {
  width: 100%;
  background-color: var(--element-color-background2);
  padding: calc((20 / 16) * 1rem);
  font-family: 'Montserrat', sans-serif;
  font-size: var(--r18);
  color: var(--element-color-tertiary);
  position: fixed;
  z-index: 1000;
}

header nav {
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  gap: calc((50 / 16) * 1rem);
  margin: 0 auto;
}

img {
  width: calc((120 / 16) * 1rem);
  height: calc((40 / 16) * 1rem);
}

ul {
  display: flex;
  align-items: center;
  gap: calc((70 / 16) * 1rem);
}

ul li {
  width: calc((70 / 16) * 1rem);
}

a {
  display: inline-block;
  color: inherit;
  transition: all 0.3s;
}

a:active,
a:hover,
a.router-link-active {
  font-weight: 700;
  color: var(--text-color-primary);
}

/* Header mobile view starts at 550px */
@media only screen and (max-width: 34.375em) {
  header {
    bottom: 0;
  }

  header nav {
    display: block;
    padding: 0 calc((60 / 16) * 1rem);
  }

  img {
    width: calc((25 / 16) * 1rem);
    height: calc((25 / 16) * 1rem);
  }

  ul {
    justify-content: space-between;
  }

  ul li {
    width: fit-content;
  }

  a.router-link-active #mobile-header-info-btn {
    content: url(/icons/ic_mobile_navigarion_info_active@3x.png);
  }

  a.router-link-active #mobile-header-home-btn {
    content: url(/icons/ic_mobile_navigarion_home_active@3x.png);
  }
}
</style>
