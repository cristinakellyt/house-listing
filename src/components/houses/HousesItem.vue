<template>
  <house-card @click="detailPage">
    <div class="house-image-container">
      <img class="house-image" :src="image" alt="house" />
    </div>
    <div class="house-info">
      <div class="house-info__options">
        <h2>{{ street }} {{ houseNumber }}</h2>
        <edit-delete-btns v-if="madeByMe" :gap="desktopView ? 'gap-medium' : 'gap-small'" :id="id">
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
          <img src="/icons/ic_bed@3x.png" alt="number of bedrooms" class="house-rooms__icon" />
          {{ bedrooms }}</span
        >
        <span class="house-rooms__info">
          <img src="/icons/ic_bath@3x.png" alt="number of bathrooms" class="house-rooms__icon" />
          {{ bathrooms }}</span
        >
        <span class="house-rooms__info">
          <img src="/icons/ic_size@3x.png" alt="size of the house" class="house-rooms__icon" />
          {{ size }} m2</span
        >
      </div>
    </div>
  </house-card>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useFormatPrice from '@/components/composables/FormatPrice'

import { inject } from 'vue'

const desktopView = inject('desktopView')

// Define the props received and used in the template, specifying their types.
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

// Make sure price is shown with proper dots e.g 1.000 .
const formatPrice = useFormatPrice(props.price)

const router = useRouter()

// Navigate to the detail page when the house item is clicked, passing houseId as a param.
const detailPage = () => {
  router.push({ name: 'detail', params: { houseId: props.id } })
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.house-image {
  width: 100%;
  height: 100%;
  object-fit: cover;

  &-container {
    overflow: hidden;
    border-radius: pxToRem(10);
  }
}

.house-info {
  grid-gap: pxToRem(15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: pxToRem(16);

  &__options {
    display: flex;
    justify-content: space-between;
  }
}

.house {
  &-price {
    color: $text-color-secondary;
    font-weight: 600;
  }
  &-address {
    color: $element-color-tertiary;
  }
}

.house-rooms {
  @include flex-gap(row, pxToRem(20));
  flex-wrap: wrap;
  color: $text-color-secondary;

  &__info {
    @include flex-gap(row, pxToRem(10));
    align-items: center;
  }

  &__icon {
    width: pxToRem(20);
  }
}

.edit-btn__size {
  width: pxToRem(20);
  height: pxToRem(20);
}

.delete-btn__size {
  width: pxToRem(16);
  height: pxToRem(20);
}

/*Mobile view starts at 550px */
@media only screen and (max-width: 34.375em) {
  .house-image {
    max-width: pxToRem(167);
  }

  .house-info {
    grid-gap: 0;
    font-size: pxToRem(12);
    justify-content: space-evenly;
  }

  .house-rooms {
    gap: pxToRem(10);

    &__icon {
      width: pxToRem(15);
    }
  }

  .edit-btn__size {
    width: pxToRem(16);
    height: pxToRem(16);
  }

  .delete-btn__size {
    width: pxToRem(16);
    height: pxToRem(18);
  }
}
</style>
