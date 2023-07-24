<template>
  <div class="house-description">
    <div class="house-description--content">
      <div class="house-description--options">
        <h1>{{ street }} {{ houseNumber }}</h1>
        <edit-delete-btns v-if="desktopView && madeByMe" gap="gap-large" :id="id">
          <template v-slot:editBtn>
            <img src="/icons/ic_edit@3x.png" alt="edit the house details" width="24" height="24" />
          </template>

          <template v-slot:deleteBtn>
            <img src="/icons/ic_delete@3x.png" alt="delete the house" width="20" height="24" />
          </template>
        </edit-delete-btns>
      </div>

      <div class="icon-text-detail">
        <img src="/icons/ic_location@3x.png" alt="location" width="16" height="20" />
        <p>{{ zip }} {{ city }}</p>
      </div>

      <div class="bundled-details">
        <div class="icon-text-detail">
          <img src="/icons/ic_price@3x.png" alt="price" width="20" height="20" />
          <p>{{ formatedPrice }}</p>
        </div>

        <div class="icon-text-detail">
          <img src="/icons/ic_size@3x.png" alt="size" width="20" height="20" />
          <p>{{ size }} m2</p>
        </div>

        <div class="icon-text-detail">
          <img
            src="/icons/ic_construction_date@3x.png"
            alt="construction year"
            width="20"
            height="20"
          />
          <p>Built in {{ constructionYear }}</p>
        </div>
      </div>

      <div class="bundled-details">
        <div class="icon-text-detail">
          <img src="/icons/ic_bed@3x.png" alt="number of bedrooms" width="20" height="20" />
          <p>{{ bedrooms }}</p>
        </div>

        <div class="icon-text-detail">
          <img src="/icons/ic_bath@3x.png" alt="number of bathrooms" width="20" height="20" />
          <p>{{ bathrooms }}</p>
        </div>

        <div class="icon-text-detail">
          <img src="/icons/ic_garage@3x.png" alt="garage" width="20" height="20" />
          <p v-if="hasGarage">Yes</p>
          <p v-else>No</p>
        </div>
      </div>
      <p class="house-description--text">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import useFormatPrice from '@/components/composables/FormatPrice'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

const props = defineProps({
  id: Number,
  street: String,
  houseNumber: Number,
  price: Number,
  zip: String,
  city: String,
  bedrooms: Number,
  bathrooms: Number,
  size: Number,
  hasGarage: Boolean,
  description: String,
  constructionYear: Number,
  madeByMe: Boolean
})

const formatedPrice = useFormatPrice(props.price)
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.house-description {
  background-color: $element-color-background2;
  padding-bottom: pxToRem(40);

  &--content {
    display: flex;
    flex-direction: column;
    gap: pxToRem(20);
    width: 95%;
    margin: 0 auto;
    padding-top: pxToRem(20);
  }

  &--options {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.bundled-details {
  @include flex-gap(row, pxToRem(30));
}

.icon-text-detail {
  display: flex;
  align-items: center;
  gap: pxToRem(10);
  color: $element-color-secondary;
  font-weight: 600;
  font-size: pxToRem(16);
}

@media only screen and (max-width: 34.375em) {
  .house-description {
    border-top-right-radius: pxToRem(30);
    border-top-left-radius: pxToRem(30);
    margin-top: pxToRem(-30);
    z-index: 100;
    position: relative;

    &--content {
      width: 85%;
      gap: pxToRem(12);
    }

    &--text {
      padding-top: pxToRem(10);
    }
  }

  .icon-text-detail {
    & p {
      font-size: pxToRem(12);
    }

    & img {
      width: pxToRem(15);
      height: pxToRem(15);
    }
  }

  .bundled-details {
    @include flex-gap(row, pxToRem(17));
  }
}
</style>
