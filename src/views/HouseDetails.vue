<template>
  <div v-if="houseFound" class="house-details">
    <div class="house-details__container">
      <BackTo v-if="desktopView" goTo="/houses" />
      <div class="house-details__image">
        <DetailImage
          :image="selectedHouse.image"
          :madeByMe="selectedHouse.madeByMe"
          :id="selectedHouse.id"
        />
      </div>
      <HouseDescription
        :id="selectedHouse.id"
        :street="selectedHouse.street"
        :zip="selectedHouse.zip"
        :city="selectedHouse.city"
        :houseNumber="selectedHouse.houseNumber"
        :price="selectedHouse.price"
        :bedrooms="selectedHouse.bedrooms"
        :bathrooms="selectedHouse.bathrooms"
        :size="selectedHouse.size"
        :hasGarage="selectedHouse.hasGarage"
        :description="selectedHouse.description"
        :constructionYear="selectedHouse.constructionYear"
        :madeByMe="selectedHouse.madeByMe"
      />
    </div>
    <RecommendedHouses
      class="house-details--recommended"
      :city="selectedHouse.city"
      :id="selectedHouse.id"
      :key="selectedHouse.id"
    />
  </div>
  <div v-else-if="loading">Loading...</div>
  <HouseNotFound v-else />
</template>

<script setup>
import DetailImage from '@/components/houses/DetailImage.vue'
import HouseDescription from '@/components/houses/HouseDescription.vue'
import HouseNotFound from '@/components/houses/HouseNotFound.vue'
import BackTo from '@/components/ui/BackTo.vue'
import RecommendedHouses from '@/components/houses/RecommendedHouses.vue'
import { useHousesStore } from '@/stores/HousesStore'
import { onMounted, ref } from 'vue'
import { inject } from 'vue'

const desktopView = inject('desktopView')

const props = defineProps({ houseId: String })

const housesList = useHousesStore()

const loading = ref(true) // indicates page is loading
const houseFound = ref(false)
const selectedHouse = ref()

// Fetch the house data from the store based on the provided 'houseId' received through router params.
const getHouse = async () => {
  try {
    selectedHouse.value = await housesList.houseById(props.houseId)
    houseFound.value = true
    loading.value = false
  } catch (error) {
    // If no house found, shows HouseNotFound page.
    houseFound.value = false
  }
}

onMounted(() => {
  getHouse()
})
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.house-details {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: pxToRem(40);

  &__container {
    position: relative;
  }

  &__image {
    height: pxToRem(600);
    width: 100%;
    background-color: $element-color-background2;
  }

  &--recommended {
    margin-top: pxToRem(40);
  }
}

@media only screen and (max-width: 34.375em) {
  .house-details {
    grid-template-columns: 1fr;
    margin: 0 pxToRem(-20);
    grid-gap: 0;

    &__image {
      height: pxToRem(259);
    }

    &--recommended {
      margin-top: pxToRem(20);
    }
  }
}
</style>
