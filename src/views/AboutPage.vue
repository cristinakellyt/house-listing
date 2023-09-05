<template>
  <header v-if="!desktopView" class="about-header">
    <h1>About</h1>
  </header>
  <section class="ck-info">
    <h2>About CK House Company</h2>
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

    <div class="contact">
      <p>By CK-House</p>
      <a href="https://github.com/cristinakellyt">www.ck-contact.com</a>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'

const desktopView = inject('desktopView')
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.ck-info {
  @include flex-gap(column, pxToRem(30));
  margin: pxToRem(60) 0;

  & h2 {
    color: $text-color-primary;
    font-size: pxToRem(32);
  }
}

.contact {
  margin-top: pxToRem(15);

  & a {
    color: $text-color-hyperlink;
  }
}

@media only screen and (max-width: 34.375em) {
  .about-header {
    text-align: center;
    margin-top: pxToRem(30);
  }

  .ck-info {
    margin: pxToRem(30) 0;
    gap: pxToRem(10);

    & h2 {
      font-size: pxToRem(14);
    }
  }
}
</style>
