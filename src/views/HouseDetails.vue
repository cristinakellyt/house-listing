<template>
  <div v-if="houseFound" class="house-details">
    <div class="house-details__container">
      <BackTo></BackTo>
      <DetailImage :image="selectedHouse.image" :madeByMe="selectedHouse.madeByMe" />
      <HouseDescription
        :id="selectedHouse.id"
        :street="selectedHouse.location.street"
        :zipcode="selectedHouse.location.zip"
        :city="selectedHouse.location.city"
        :houseNumber="selectedHouse.location.houseNumber"
        :price="selectedHouse.price"
        :bedrooms="selectedHouse.rooms.bedrooms"
        :bathrooms="selectedHouse.rooms.bathrooms"
        :size="selectedHouse.size"
        :hasGarage="selectedHouse.hasGarage"
        :description="selectedHouse.description"
        :constructionYear="selectedHouse.constructionYear"
        :madeByMe="selectedHouse.madeByMe"
      />
    </div>
  </div>
  <div v-else-if="loading">Loading...</div>
  <HouseNotFound v-else />
</template>

<script setup>
import DetailImage from './../components/houseDetail/DetailImage.vue'
import HouseDescription from './../components/houseDetail/HouseDescription.vue'
import HouseNotFound from './../components/houses/HouseNotFound.vue'
import BackTo from '../components/ui/BackTo.vue'
import { useHousesStore } from '../stores/HousesStore'
import { onMounted, ref } from 'vue'

const props = defineProps({ houseId: String })

const housesList = useHousesStore()

const loading = ref(true)
const houseFound = ref(false)
const selectedHouse = ref()

const getHouse = async () => {
  try {
    selectedHouse.value = await housesList.houseById(props.houseId)
    houseFound.value = true
    loading.value = false
  } catch (error) {
    houseFound.value = false
  }
}

onMounted(() => {
  getHouse()
})
</script>

<style scoped>
.house-details {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.house-details__container {
  position: relative;
}

@media only screen and (max-width: 34.375em) {
  .house-details {
    grid-template-columns: 1fr;
    margin: 0 calc((-1) * var(--margin-right-left-width));
  }
}
</style>
