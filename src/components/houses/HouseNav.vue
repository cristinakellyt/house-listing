<template>
  <div class="house-nav">
    <div class="house-nav__header">
      <h1>Houses</h1>
      <base-button v-if="desktopView" type="primary" size="large" goTo="/houses/create">
        <template v-slot:icon>
          <img class="house-create--icon" src="/icons/ic_plus_white@3x.png" />
        </template>
        <span>CREATE NEW</span>
      </base-button>
      <base-button v-else goTo="/houses/create" size="small">
        <template v-slot:icon>
          <img
            class="house-create--icon position-absolute-right-top"
            src="/icons/ic_plus_grey@3x.png"
          />
        </template>
      </base-button>
    </div>
    <div class="house-filter">
      <div class="house-nav__search">
        <search-bar :size="desktopView ? 'large' : 'small'" @onSearch="searchHouses" />
      </div>
      <div class="filter-buttons">
        <base-button
          :type="priceIsPressed ? 'primary' : 'tertiary'"
          :size="desktopView ? 'large' : 'small'"
          @click="sortHouse('price')"
          class="filter-buttons__price"
        >
          Price
        </base-button>
        <base-button
          :type="sizeIsPressed ? 'primary' : 'tertiary'"
          :size="desktopView ? 'large' : 'small'"
          @click="sortHouse('size')"
          class="filter-buttons__size"
        >
          Size
        </base-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

const emit = defineEmits(['searchHouses'])
const searchKey = ref('')

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
.house-nav {
  position: relative;
  margin-top: calc((30 / 16) * 1rem);
}

.house-nav__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

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

.house-nav__search {
  flex: 0 0 40%;
}

.filter-buttons {
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

.house-create--icon {
  width: var(--r20);
}

@media only screen and (max-width: 34.375em) {
  h1 {
    text-align: center;
  }
  .house-filter {
    gap: var(--r15);
  }

  .house-nav__search,
  .filter-buttons {
    flex: 0 0 100%;
  }

  .position-absolute-right-top {
    transform: translateY(0);
  }
}
</style>
