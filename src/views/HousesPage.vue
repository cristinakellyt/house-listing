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

const housesList = useHousesStore()
const filteredHouses = ref(housesList.getHouses)
const isFiltered = ref(false)
const numberOfResults = ref('')
const cityFilter = ref('')
const sortType = ref('')

// Update list if houses in store changes, maintaining the sort and filters
watch(
  () => housesList.getHouses,
  () => {
    onSearchHouses(cityFilter.value, sortType.value)
  }
)

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
  } else {
    isFiltered.value = false
  }

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
