<template>
  <HouseNav @searchHouses="onSearchHouses" />
  <h2 v-if="numberOfResults > 0 && isFiltered" class="search-results--number">
    {{ numberOfResults }} Results found
  </h2>
  <HouseNotFound v-if="numberOfResults === 0 && isFiltered" />
  <HouseItem
    v-else
    v-for="house in filteredHouses"
    :key="house.id"
    :id="house.id"
    :image="house.image"
    :street="house.location.street"
    :houseNumber="house.location.houseNumber"
    :price="house.price"
    :zipCode="house.location.zip"
    :city="house.location.city"
    :bedrooms="house.rooms.bedrooms"
    :bathrooms="house.rooms.bathrooms"
    :size="house.size"
    :madeByMe="house.madeByMe"
  />
</template>

<script setup>
import HouseItem from './../components/houses/HousesItem.vue'
import HouseNav from './../components/houses/HouseNav.vue'
import HouseNotFound from '../components/houses/HouseNotFound.vue'
import { useHousesStore } from '../stores/HousesStore'
import { ref } from 'vue'

const housesList = useHousesStore()
const filteredHouses = ref(housesList.getHouses)
const isFiltered = ref(false)
const numberOfResults = ref('')

const onSearchHouses = (city, sortType) => {
  filteredHouses.value = [...housesList.getHouses]
  if (city) {
    isFiltered.value = true
    filteredHouses.value = filteredHouses.value.filter(
      (house) => house.location.city.toLowerCase() === city.toLowerCase()
    )
    numberOfResults.value = filteredHouses.value.length
  } else {
    isFiltered.value = false
  }

  if (sortType === 'price') {
    filteredHouses.value.sort((a, b) => a.price - b.price)
  }
  if (sortType === 'size') {
    filteredHouses.value.sort((a, b) => a.size - b.size)
  }
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
