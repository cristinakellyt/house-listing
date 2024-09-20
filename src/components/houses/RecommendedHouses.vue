<template>
  <div v-if="housesList" class="recommended-houses">
    <h1>Recommended for you</h1>
    <div v-if="loading">
      <h1>Loading...</h1>
    </div>
    <h2 v-else-if="errorFetching">We had a problem, please try again later</h2>
    <HouseItem
      @click="detailPage(house.id)"
      v-else
      v-for="house in recommendedHouses"
      :key="house.id"
      :id="house.id"
      :image="house.image"
      :street="house.street"
      :houseNumber="house.houseNumber"
      :price="house.price"
      :zipCode="house.zip"
      :city="house.city"
      :bedrooms="house.bedrooms"
      :bathrooms="house.bathrooms"
      :size="house.size"
      :madeByMe="house.madeByMe"
      :numberAddition="house.houseNumberAddition"
    />
  </div>
</template>

<script setup>
import HouseItem from '@/components/houses/HousesItem.vue'
import { useHousesStore } from '@/stores/HousesStore'
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'

const housesStore = useHousesStore()
const router = useRouter()

const props = defineProps({
  city: String,
  id: Number
})

const recommendedHouses = ref('')
const housesList = ref(null)
const errorFetching = ref(false)
const loading = ref(true)

// Function to fetch recommended houses based on the city
const fetchRecommendedHouses = async () => {
  housesList.value = await housesStore.getHouses

  // If fetching fails, set errorFetching to true
  if (!housesList.value) errorFetching.value = true

  loading.value = false

  // Filter recommended houses based on city and exclude the current house
  recommendedHouses.value = housesList.value.filter((house) => {
    return house.city === props.city && house.id !== props.id
  })

  // If no recommended houses found for the city, include other houses excluding the current one
  if (recommendedHouses.value.length === 0) {
    recommendedHouses.value = housesList.value.filter((house) => house.id !== props.id)
  }

  // Limit the recommended houses to the first 3
  const firstHouses = recommendedHouses.value.slice(0, 3)
  recommendedHouses.value = firstHouses
}

// Function to navigate to the detail page of the recommended house
const detailPage = (id) => {
  router.push({ name: 'detail', params: { houseId: id } })
}

onBeforeMount(() => {
  fetchRecommendedHouses()
})
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.recommended-houses {
  width: 100%;
}

@media only screen and (max-width: 34.375em) {
  .recommended-houses {
    padding: pxToRem(10);
  }
}
</style>
