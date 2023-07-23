<template>
  <div class="house-description">
    <div class="house-details--content">
      <div class="house-details--options">
        <h1>{{ street }} {{ houseNumber }}</h1>
        <edit-delete-btns v-if="desktopView && madeByMe" gap="large" :id="id">
          <template v-slot:editBtn>
            <img
              src="./../icons/ic_edit@3x.png"
              alt="edit the house details"
              width="24"
              height="24"
            />
          </template>

          <template v-slot:deleteBtn>
            <img src="./../icons/ic_delete@3x.png" alt="delete the house" width="20" height="24" />
          </template>
        </edit-delete-btns>
      </div>

      <div class="detail-grouped">
        <img src="./../icons/ic_location@3x.png" alt="location" width="16" height="20" />
        <p>{{ zip }} {{ city }}</p>
      </div>

      <div class="flex-gap-30">
        <div class="detail-grouped">
          <img src="./../icons/ic_price@3x.png" alt="price" width="20" height="20" />
          <p>{{ formatedPrice }}</p>
        </div>

        <div class="detail-grouped">
          <img src="./../icons/ic_size@3x.png" alt="size" width="20" height="20" />
          <p>{{ size }} m2</p>
        </div>

        <div class="detail-grouped">
          <img
            src="./../icons/ic_construction_date@3x.png"
            alt="construction year"
            width="20"
            height="20"
          />
          <p>Built in {{ constructionYear }}</p>
        </div>
      </div>

      <div class="flex-gap-30">
        <div class="detail-grouped">
          <img src="./../icons/ic_bed@3x.png" alt="number of bedrooms" width="20" height="20" />
          <p>{{ bedrooms }}</p>
        </div>

        <div class="detail-grouped">
          <img src="./../icons/ic_bath@3x.png" alt="number of bathrooms" width="20" height="20" />
          <p>{{ bathrooms }}</p>
        </div>

        <div class="detail-grouped">
          <img src="./../icons/ic_garage@3x.png" alt="garage" width="20" height="20" />
          <p v-if="hasGarage">Yes</p>
          <p v-else>No</p>
        </div>
      </div>
      <p class="house-details--text">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import useFormatPrice from './../composables/FormatPrice'

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

<style scoped>
.house-description {
  background-color: var(--element-color-backgroun2);
  padding-bottom: calc((40 / 16) * 1rem);
}

.house-details--content {
  padding-top: var(--r20);
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  gap: var(--r20);
}

.house-details--options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-gap-30 {
  display: flex;
  gap: calc((30 / 16) * 1rem);
}

.detail-grouped {
  display: flex;
  align-items: center;
  gap: var(--r10);
  color: var(--element-color-secondary);
  font-weight: 600;
  font-size: var(--r16);
}

@media only screen and (max-width: 34.375em) {
  .house-description {
    border-top-right-radius: var(--r30);
    border-top-left-radius: var(--r30);
    margin-top: calc((-1) * var(--r30));
    z-index: 100;
    position: relative;
  }

  .house-details--content {
    width: 85%;
    gap: var(--r12);
  }

  .detail-grouped p {
    font-size: var(--r12);
  }

  .house-details--text {
    padding-top: var(--r10);
  }

  .detail-grouped img {
    width: var(--r15);
    height: var(--r15);
  }

  .flex-gap-30 {
    display: flex;
    gap: calc((17 / 16) * 1rem);
  }
}
</style>
