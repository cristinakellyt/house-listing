<template>
  <house-card @click="detailPage">
    <div class="house-image-container">
      <img class="house-image" :src="image" alt="house" />
    </div>
    <div class="house-info">
      <div class="house-info__options">
        <h2>{{ street }} {{ houseNumber }}</h2>
        <edit-delete-btns v-if="madeByMe" :gap="desktopView ? 'medium' : 'small'" :id="id">
          <template v-slot:editBtn>
            <img src="/icons/ic_edit@3x.png" alt="edit the house details" class="edit-btn__size" />
          </template>

          <template v-slot:deleteBtn>
            <img src="/icons/ic_delete@3x.png" alt="delete the house" class="delete-btn__size" />
          </template>
        </edit-delete-btns>
      </div>
      <p class="house-price">&euro; {{ formatPrice }}</p>
      <p class="house-address">{{ zipCode }} {{ city }}</p>
      <div class="house-rooms">
        <span class="house-rooms__info">
          <img class="house-rooms__icon" src="/icons/ic_bed@3x.png" alt="number of bedrooms" />
          {{ bedrooms }}</span
        >
        <span class="house-rooms__info">
          <img class="house-rooms__icon" src="/icons/ic_bath@3x.png" alt="number of bathrooms" />
          {{ bathrooms }}</span
        >
        <span class="house-rooms__info">
          <img class="house-rooms__icon" src="/icons/ic_size@3x.png" alt="size of the house" />
          {{ size }} m2</span
        >
      </div>
    </div>
  </house-card>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useFormatPrice from './../composables/FormatPrice'

import { computed, inject } from 'vue'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

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
  size: Number,
  madeByMe: Boolean
})

const formatPrice = useFormatPrice(props.price)

const router = useRouter()
const detailPage = () => {
  router.push({ name: 'detail', params: { houseId: props.id } })
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

.house-info__options {
  display: flex;
  justify-content: space-between;
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

.edit-btn__size {
  width: var(--r20);
  height: var(--r20);
}

.delete-btn__size {
  width: calc((16 / 16) * 1rem);
  height: var(--r20);
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

  .edit-btn__size {
    width: calc((16 / 16) * 1rem);
    height: calc((16 / 16) * 1rem);
    /* margin-right: -10px; */
  }

  .delete-btn__size {
    width: calc((16 / 16) * 1rem);
    height: calc((18 / 16) * 1rem);
  }
}
</style>
