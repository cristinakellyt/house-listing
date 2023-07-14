<template>
  <house-card v-for="house in housesList" :key="house.id">
    <div class="house-image-container">
      <img class="house-image" :src="house.image" alt="" />
    </div>
    <div class="house-info">
      <h2>{{ house.location.street }} {{ house.location.houseNumber }}</h2>
      <p class="house-price">&euro; {{ house.price }}</p>
      <p class="house-address">{{ house.location.zip }} {{ house.location.city }}</p>
      <div class="house-rooms">
        <span class="house-rooms__info">
          <img class="house-rooms__icon" src="./../icons/ic_bed@3x.png" alt="" />
          {{ house.rooms.bedrooms }}</span
        >
        <span class="house-rooms__info">
          <img class="house-rooms__icon" src="./../icons/ic_bath@3x.png" alt="" />
          {{ house.rooms.bathrooms }}</span
        >
        <span class="house-rooms__info">
          <img class="house-rooms__icon" src="./../icons/ic_size@3x.png" alt="" />
          {{ house.size }} m2</span
        >
      </div>
    </div>
  </house-card>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const housesList = ref([])

const getHousesList = () => {
  fetch('https://api.intern.d-tt.nl/api/houses', {
    method: 'GET',
    headers: { 'X-Api-Key': 'tjeKEPrVW9xyG_7hUC-HAdkOYa5BiI1l' }
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((data) => {
      for (const house of data) {
        housesList.value.push(house)
      }
    })
    .catch((error) => {
      // TODO Add error handler
      console.log(error)
    })
}

onMounted(() => {
  getHousesList()
  return
})
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
