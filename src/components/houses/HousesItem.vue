<template>
  <house-card>
    <div class="house-image-container">
      <img class="house-image" :src="image" alt="" />
    </div>
    <div class="house-info">
      <h2>{{ props.street }} {{ props.houseNumber }}</h2>
      <p class="house-price">&euro; {{ formatPrice(props.price) }}</p>
      <p class="house-address">{{ props.zipCode }} {{ props.city }}</p>
      <div class="house-rooms">
        <span class="house-rooms__info">
          <img class="house-rooms__icon" src="./../icons/ic_bed@3x.png" alt="number of bedrooms" />
          {{ props.bedrooms }}</span
        >
        <span class="house-rooms__info">
          <img
            class="house-rooms__icon"
            src="./../icons/ic_bath@3x.png"
            alt="number of bathrooms"
          />
          {{ props.bathrooms }}</span
        >
        <span class="house-rooms__info">
          <img class="house-rooms__icon" src="./../icons/ic_size@3x.png" alt="size of the house" />
          {{ props.size }} m2</span
        >
      </div>
    </div>
  </house-card>
</template>

<script setup>
const props = defineProps({
  id: Number,
  image: String,
  street: String,
  houseNumber: Number,
  price: Number,
  zipCode: String,
  city: String,
  bedrooms: Number,
  bathrooms: Number,
  size: Number
})

const formatPrice = (price) => {
  const housePrice = price.toString()
  let arrayPrice = [...housePrice]
  let count = 0
  let numberOfDigits = arrayPrice.length
  for (let i = numberOfDigits - 1; i >= 0; i--) {
    count++
    if (count % 3 === 0 && count < numberOfDigits) {
      arrayPrice.splice(i, 0, '.')
    }
  }
  return arrayPrice.join('')
}
</script>

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
  width: 100%;
  height: 100%;
  object-fit: cover;
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