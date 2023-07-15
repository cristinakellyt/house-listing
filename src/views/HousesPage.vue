<template>
  <HouseNav @searchHouses="onSearchHouses" @cleanSearch="onSearchHouses" />
  <h2 v-if="numberOfResults > 0 && isFiltered" class="search-results--number">
    {{ numberOfResults }} Results found
  </h2>
  <HouseNotFound v-if="numberOfResults === 0 && isFiltered" />
  <HouseItem
    v-else
    v-for="house in filteredHouses"
    :key="house.id"
    :image="house.image"
    :street="house.location.street"
    :houseNumber="house.location.houseNumber"
    :price="house.price"
    :zipCode="house.location.zip"
    :city="house.location.city"
    :bedrooms="house.rooms.bedrooms"
    :bathrooms="house.rooms.bathrooms"
    :size="house.size"
  />
</template>

<script setup>
import HouseItem from './../components/houses/HousesItem.vue'
import HouseNav from './../components/houses/HouseNav.vue'
import HouseNotFound from '../components/houses/HouseNotFound.vue'

import { onMounted, ref } from 'vue'

const housesList = ref([])
const filteredHouses = ref([])
const isFiltered = ref(false)
const numberOfResults = ref('')

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
  filteredHouses.value = housesList.value
  return
})

const onSearchHouses = (input) => {
  filteredHouses.value = housesList.value
  if (!input) {
    isFiltered.value = false
    return
  }
  isFiltered.value = true
  filteredHouses.value = filteredHouses.value.filter(
    (house) => house.location.city.toLowerCase() === input.toLowerCase()
  )
  numberOfResults.value = filteredHouses.value.length
}
</script>

<style scoped>
.search-results--number {
  margin: calc((30 / 16) * 1rem) 0;
}

@media only screen and (max-width: 34.375em) {
  .search-results--number {
    margin: var(--r20) 0;
  }
}
</style>
