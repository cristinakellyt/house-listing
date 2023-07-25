<template>
  <HouseNav />
  <HouseFilter @searchHouses="onSearchHouses" />
  <h2 v-if="numberOfResults > 0 && isFiltered" class="search-results-number">
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
import HouseItem from '@/components/houses/HousesItem.vue'
import HouseNav from '@/components/houses/HouseNav.vue'
import HouseFilter from '../components/houses/HouseFilter.vue'
import HouseNotFound from '@/components/houses/HouseNotFound.vue'
import { useHousesStore } from '@/stores/HousesStore'
import { ref, watch } from 'vue'

const housesList = useHousesStore() // instance of the 'HousesStore' using the 'useHousesStore' function.
const filteredHouses = ref(housesList.getHouses) //  reactive reference 'filteredHouses' initialized with the current list of houses.
const isFiltered = ref(false) //  reactive reference 'isFiltered' initialized as false to keep track of whether the list is filtered or not.
const numberOfResults = ref('') //  reactive reference 'numberOfResults' to store the number of filtered results (houses).
const cityFilter = ref('') //  reactive reference 'cityFilter' to store the current city filter emitted through 'searchHouses' event.
const sortType = ref('') //  reactive reference 'sortType' to store the current sorting option emitted through 'searchHouses' event.

// Watch for changes in the 'housesList.getHouses' getter, and trigger the search function
// when the list of houses changes, maintaining the sort and filters.
watch(
  () => housesList.getHouses,
  () => {
    onSearchHouses(cityFilter.value, sortType.value)
  }
)

// Function to handle filter by city and sort the list based on price/size
const onSearchHouses = (city, sort) => {
  cityFilter.value = city
  sortType.value = sort
  filteredHouses.value = [...housesList.getHouses]
  if (cityFilter.value) {
    isFiltered.value = true
    filteredHouses.value = filteredHouses.value.filter(
      (house) => house.location.city.toLowerCase() === cityFilter.value.toLowerCase()
    )
    numberOfResults.value = filteredHouses.value.length

    isFiltered.value = false // Set 'isFiltered' to false if there's no city filter applied.
  }

  // Sort 'filteredHouses' based on the chosen sorting type ('price' or 'size').
  if (sortType.value === 'price') {
    filteredHouses.value.sort((a, b) => a.price - b.price)
  }
  if (sortType.value === 'size') {
    filteredHouses.value.sort((a, b) => a.size - b.size)
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.search-results-number {
  margin: pxToRem(30);
}

@media only screen and (max-width: 34.375em) {
  .search-results-number {
    margin: pxToRem(20) 0;
  }
}
</style>
