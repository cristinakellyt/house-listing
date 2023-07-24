<template>
  <header v-if="!desktopView" class="about-header">
    <h1>About</h1>
  </header>
  <section class="dtt-info">
    <h2>About DTT Real State</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequuntur voluptatem
      praesentium eaque numquam voluptatibus libero nemo, corrupti doloremque expedita laborum amet
      est corporis dolores beatae sit asperiores nihil. Repudiandae. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Quo laudantium aperiam beatae temporibus. Fugiat, cumque. Ad,
      maxime unde sit ipsam sint aut accusantium quas temporibus voluptatibus hic eaque laborum
      facilis.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim exercitationem molestiae esse
      ipsa eligendi veniam, omnis aspernatu!
    </p>

    <div class="dtt-design">
      <h2>Design and Development</h2>
      <div class="dtt-design__contact">
        <img src="/icons/img_logo_dtt@3x.png" alt="logo dtt" class="dtt-logo" />
        <div class="dtt-design__contact-web">
          <p>By DTT</p>
          <a href="https://d-tt.nl">www.d-tt.nl</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)
</script>

<style scoped>
.dtt-info {
  margin: calc((60 / 16) * 1rem) 0;
  display: flex;
  flex-direction: column;
  gap: var(--r30);
}

.dtt-info h2 {
  color: var(--text-color-primary);
  font-size: var(--r32);
}

.dtt-design {
  margin-top: var(--r15);
}

.dtt-design__contact {
  margin-top: var(--r30);
  display: flex;
  gap: calc((40 / 16) * 1rem);
}

.dtt-design__contact-web {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dtt-design__contact-web a {
  color: var(--text-color-hyperlink);
}

.dtt-logo {
  width: calc((250 / 16) * 1rem);
}

@media only screen and (max-width: 34.375em) {
  .about-header {
    text-align: center;
    margin-top: var(--r30);
  }
  .dtt-info {
    margin: calc((30 / 16) * 1rem) 0;
    gap: var(--r10);
  }

  .dtt-info h2 {
    font-size: var(--r14);
  }

  .dtt-logo {
    width: calc((100 / 16) * 1rem);
    height: calc((40 / 16) * 1rem);
  }

  .dtt-design__contact {
    margin-top: var(--r15);
    gap: var(--r20);
  }
}
</style>
