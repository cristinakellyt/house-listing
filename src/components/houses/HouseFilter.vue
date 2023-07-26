<template>
  <div class="house-filter">
    <div class="house-filter__search">
      <search-bar :size="desktopView ? 'large' : 'small'" @onSearch="searchHouses" />
    </div>
    <div class="house-filter__buttons">
      <div class="buttons-sort">
        <base-button
          :btnColor="priceIsPressed ? 'primary' : 'tertiary'"
          :size="desktopView ? 'large' : 'small'"
          @click="sortHouse('price')"
          class="buttons-sort__price"
        >
          Price
        </base-button>
        <base-button
          :btnColor="sizeIsPressed ? 'primary' : 'tertiary'"
          :size="desktopView ? 'large' : 'small'"
          @click="sortHouse('size')"
          class="buttons-sort__size"
        >
          Size
        </base-button>
      </div>

      <div>
        <base-button
          :btnColor="myListingIsPressed ? 'primary' : 'tertiary'"
          :size="desktopView ? 'large' : 'small'"
          @click="myListing"
          class="filter-buttons__mylisting"
        >
          My houses</base-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
// Define the 'emit' function to emit the 'searchHouses' event to the parent component.
const emit = defineEmits(['searchHouses'])

const desktopView = inject('desktopView')

const searchKey = ref('') // Create a reactive reference 'searchKey' to store the search input.

// handle searching for houses based on the input coming from SearchBar component, on the sorting type and if myListing button is pressed.
const searchHouses = (input) => {
  searchKey.value = input
  let sortType = ''
  if (priceIsPressed.value) {
    sortType = 'price'
  } else if (sizeIsPressed.value) {
    sortType = 'size'
  }

  // Emit the 'searchHouses' event with the search input and the selected sorting type.
  emit('searchHouses', input, sortType, myListingIsPressed.value)
}

const myListing = () => {
  myListingIsPressed.value = !myListingIsPressed.value
  searchHouses(searchKey.value)
}

// Reactive references 'priceIsPressed' and 'sizeIsPressed' to store sorting options.
// Reactive reference 'myListingIsPressed' to track if user wants to see his listings.
const priceIsPressed = ref(false)
const sizeIsPressed = ref(false)
const myListingIsPressed = ref(false)

// Handle sorting houses based on the selected sorting type.
const sortHouse = (sortType) => {
  // If the 'price' sorting type is selected and already pressed, reset it and call 'searchHouses'.
  if (sortType === 'price' && priceIsPressed.value) {
    priceIsPressed.value = false
    searchHouses(searchKey.value)
    return
  }

  // If the 'size' sorting type is selected and already pressed, reset it and and call 'searchHouses'.
  if (sortType === 'size' && sizeIsPressed.value) {
    sizeIsPressed.value = false
    searchHouses(searchKey.value)
    return
  }

  // If the 'price' sorting type is selected, set its reference to true and 'sizeIsPressed' to false.
  if (sortType === 'price') {
    priceIsPressed.value = true
    sizeIsPressed.value = false
  }

  // If the 'size' sorting type is selected, set its reference to true and 'priceIsPressed' to false.
  if (sortType === 'size') {
    priceIsPressed.value = false
    sizeIsPressed.value = true
  }

  // Search houses after sorting options are updated.
  searchHouses(searchKey.value)
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.house-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: pxToRem(35);

  &__search {
    flex: 0 0 40%;
  }

  &__buttons {
    flex: 0 0 40%;
    display: flex;
    justify-content: space-between;
    gap: pxToRem(20);
  }
}

.buttons-sort {
  flex: 0 0 60%;
}

.buttons-sort {
  &__price {
    width: 50%;
    border-radius: pxToRem(10) 0 0 pxToRem(10);
  }
  &__size {
    width: 50%;
    border-radius: 0 pxToRem(10) pxToRem(10) 0;
  }
}

@media only screen and (max-width: 34.375em) {
  .house-filter {
    margin-top: pxToRem(10);
    gap: pxToRem(15);

    &__search,
    &__buttons {
      flex: 0 0 100%;
    }

    &__buttons {
      flex-direction: column;
    }
  }

  .filter-buttons__mylisting {
    width: 100%;
  }
}
</style>
