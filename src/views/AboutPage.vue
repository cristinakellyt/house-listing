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

<style scoped lang="scss">
@import '@/assets/main.scss';
.dtt-info {
  @include flex-gap(column, pxToRem(30));
  margin: pxToRem(60) 0;

  & h2 {
    color: $text-color-primary;
    font-size: pxToRem(32);
  }
}

.dtt {
  &-logo {
    width: pxToRem(250);
  }

  &-design {
    margin-top: pxToRem(15);

    &__contact {
      @include flex-gap(row, pxToRem(40));
      margin-top: pxToRem(30);

      &-web {
        display: flex;
        flex-direction: column;
        justify-content: center;

        & a {
          color: $text-color-hyperlink;
        }
      }
    }
  }
}

@media only screen and (max-width: 34.375em) {
  .about-header {
    text-align: center;
    margin-top: pxToRem(30);
  }
  .dtt {
    &-info {
      margin: pxToRem(30) 0;
      gap: pxToRem(10);

      & h2 {
        font-size: pxToRem(14);
      }
    }

    &-logo {
      width: pxToRem(100);
      height: pxToRem(40);
    }

    &-design__contact {
      margin-top: pxToRem(15);
      gap: pxToRem(20);
    }
  }
}
</style>
