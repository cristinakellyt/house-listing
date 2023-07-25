<template>
  <div class="house-filter">
    <div class="house-filter__search">
      <search-bar :size="desktopView ? 'large' : 'small'" @onSearch="searchHouses" />
    </div>
    <div class="house-filter__buttons">
      <base-button
        :btnColor="priceIsPressed ? 'primary' : 'tertiary'"
        :size="desktopView ? 'large' : 'small'"
        @click="sortHouse('price')"
        class="filter-buttons__price"
      >
        Price
      </base-button>
      <base-button
        :btnColor="sizeIsPressed ? 'primary' : 'tertiary'"
        :size="desktopView ? 'large' : 'small'"
        @click="sortHouse('size')"
        class="filter-buttons__size"
      >
        Size
      </base-button>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
// Define the 'emit' function to emit the 'searchHouses' event to the parent component.
const emit = defineEmits(['searchHouses'])

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

const searchKey = ref('') // Create a reactive reference 'searchKey' to store the search input.

// handle searching for houses based on the input coming from SearchBar component and on the sorting type.
const searchHouses = (input) => {
  searchKey.value = input
  let sortType = ''
  if (priceIsPressed.value) {
    sortType = 'price'
  } else if (sizeIsPressed.value) {
    sortType = 'size'
  }

  // Emit the 'searchHouses' event with the search input and the selected sorting type.
  emit('searchHouses', input, sortType)
}

// Create reactive references 'priceIsPressed' and 'sizeIsPressed' to store sorting options.
const priceIsPressed = ref(false)
const sizeIsPressed = ref(false)

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
    flex: 0 0 20%;
  }
}

.filter-buttons {
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
  }
}
</style>
