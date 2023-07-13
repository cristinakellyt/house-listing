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
  border-radius: 10px;
}

.house-image {
  max-width: 305px;
}

.house-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: calc((15 / 16) * 1rem);
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
</style>
