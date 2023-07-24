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

const searchKey = ref('')
const emit = defineEmits(['searchHouses'])
const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

const searchHouses = (input) => {
  searchKey.value = input
  let sortType = ''
  if (priceIsPressed.value) {
    sortType = 'price'
  } else if (sizeIsPressed.value) {
    sortType = 'size'
  }

  emit('searchHouses', input, sortType)
}

const priceIsPressed = ref(false)
const sizeIsPressed = ref(false)

const sortHouse = (sortType) => {
  if (sortType === 'price' && priceIsPressed.value) {
    priceIsPressed.value = false
    searchHouses(searchKey.value)
    return
  }

  if (sortType === 'size' && sizeIsPressed.value) {
    sizeIsPressed.value = false
    searchHouses(searchKey.value)
    return
  }

  if (sortType === 'price') {
    priceIsPressed.value = true
    sizeIsPressed.value = false
  }

  if (sortType === 'size') {
    priceIsPressed.value = false
    sizeIsPressed.value = true
  }

  searchHouses(searchKey.value)
}
</script>

<style scoped>
.position-absolute-right-top {
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-10%);
}

.house-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: calc((35 / 16) * 1rem);
}

.house-filter__search {
  flex: 0 0 40%;
}

.house-filter__buttons {
  flex: 0 0 20%;
}

.filter-buttons__price,
.filter-buttons__size {
  width: 50%;
}
.filter-buttons__price {
  border-radius: var(--r10) 0 0 var(--r10);
}
.filter-buttons__size {
  border-radius: 0 var(--r10) var(--r10) 0;
}

@media only screen and (max-width: 34.375em) {
  h1 {
    text-align: center;
  }
  .house-filter {
    margin-top: calc((10 / 16) * 1rem);
    gap: var(--r15);
  }

  .house-filter__search {
    flex: 0 0 100%;
  }

  .house-filter__buttons {
    flex: 0 0 100%;
  }

  .position-absolute-right-top {
    transform: translateY(0);
  }
}
</style>
