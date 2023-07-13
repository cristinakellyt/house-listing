<template>
  <house-card>
    <div class="house-image-container">
      <img class="house-image" src="./../components/icons/img_placeholder_house@3x.png" />
    </div>
    <div class="house-info">
      <h2>Stokvisstraat 132</h2>
      <p class="house-price">&euro; 500.000</p>
      <p class="house-address">1011AA Amsterdam</p>
      <div class="house-rooms">
        <span class="house-rooms__info">
          <img class="house-rooms__icon" src="./../components/icons/ic_bed@3x.png" />
          1</span
        >
        <span class="house-rooms__info">
          <img class="house-rooms__icon" src="./../components/icons/ic_bath@3x.png" />
          1</span
        >
        <span class="house-rooms__info">
          <img class="house-rooms__icon" src="./../components/icons/ic_size@3x.png" />
          1</span
        >
      </div>
    </div>
  </house-card>
</template>

<style scoped>
h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: var(--r22);
}

.house-image-container {
  overflow: hidden;
  border-radius: calc((10 / 16) * 1rem);
}

.house-image {
  max-width: calc((305 / 16) * 1rem);
}

.house-info {
  grid-gap: calc((15 / 16) * 1rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--r16);
}

.house-price {
  color: var(--text-color-secondary);
  font-weight: 600;
}
.house-address {
  color: var(--element-color-tertiary);
}

.house-rooms {
  display: flex;
  flex-wrap: wrap;
  gap: calc((20 / 16) * 1rem);
  color: var(--text-color-secondary);
}

.house-rooms__info {
  display: flex;
  align-items: center;
  gap: calc((10 / 16) * 1rem);
}

.house-rooms__icon {
  width: calc((20 / 16) * 1rem);
}

/*Mobile view starts at 550px */
@media only screen and (max-width: 34.375em) {
  h2 {
    font-size: var(--r14);
  }
  .house-image {
    max-width: calc((167 / 16) * 1rem);
  }

  .house-info {
    grid-gap: 0;
    font-size: var(--r12);
    justify-content: space-evenly;
  }

  .house-rooms {
    gap: calc((10 / 16) * 1rem);
  }

  .house-rooms__icon {
    width: calc((15 / 16) * 1rem);
  }
}
</style>
