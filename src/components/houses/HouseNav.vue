<template>
  <div class="house-nav">
    <div class="house-nav__header">
      <h1>Houses</h1>
      <base-button v-if="desktopView" type="primary" size="large" goTo="/houses/create">
        <template v-slot:icon>
          <img class="house-create--icon" src="./../icons/ic_plus_white@3x.png" />
        </template>
        <span>CREATE NEW</span>
      </base-button>
      <base-button v-else goTo="/houses/create" size="small">
        <template v-slot:icon>
          <img
            class="house-create--icon position-absolute-right-top"
            src="./../icons/ic_plus_grey@3x.png"
          />
        </template>
      </base-button>
    </div>
    <div class="house-filter">
      <div class="house-search">
        <img class="house-search--icon" src="./../icons/ic_search@3x.png" />
        <input
          class="house-search--input"
          type="text"
          placeholder="Search for a house"
          v-model.trim="searchKey"
          @input="clearSearchWhenInputIsEmpty"
          @keyup.enter="searchHouseOnEnter"
        />
        <img
          v-show="searchKey"
          @click="clearInputHandler"
          class="house-clear-input--icon"
          src="./../icons/ic_clear@3x.png"
        />
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

const searchKey = ref('')
const emit = defineEmits(['searchHouses'])

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

const searchHouseOnEnter = () => {
  searchHouses(searchKey.value)
}

const clearSearchWhenInputIsEmpty = () => {
  if (!searchKey.value) {
    searchHouses('')
  }
}

const clearInputHandler = () => {
  searchKey.value = ''
  searchHouses('')
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
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
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

/* .house-create--div {
  display: flex;
  align-items: center;
  gap: var(--r15);
} */

.house-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: calc((35 / 16) * 1rem);
}

/* button {
  display: inline-block;
  background-color: var(--element-color-primary);
  border: none;
  padding: var(--r15) var(--r20);
  border-radius: var(--r10);
  color: var(--element-color-backgroun2);
  font-weight: 700;
  font-size: var(--r18);
  cursor: pointer;
  transition: all 0.3s;
} */

.house-search {
  display: flex;
  align-items: center;
  flex: 0 0 35%;
  background-color: var(--element-color-tertiary-lighter);
  border-radius: var(--r10);
  position: relative;
}

.house-search input:focus {
  outline: none;
}

.house-search:focus-within {
  box-shadow: 0 0 0 1px var(--element-color-secondary);
}

.house-search--input {
  width: 80%;
  padding: var(--r15) var(--r20) var(--r15) 0;
  font-size: var(--r14);
  font-family: 'Open sans', sans-serif;
  color: var(--element-color-secondary);
  border-radius: var(--r10);
  border: none;
  background-color: var(--element-color-tertiary-lighter);
}

.house-search--input::placeholder {
  color: var(--element-color-tertiary);
}

.house-search--icon {
  margin: 0 var(--r20);
}

.house-search--icon,
.house-clear-input--icon {
  width: var(--r20);
  height: var(--r20);
}

.house-clear-input--icon {
  position: absolute;
  right: var(--r10);
}
.filter-buttons {
  flex: 0 0 20%;
}
.filter-buttons__price,
.filter-buttons__size {
  width: 50%;

  /* padding: var(--r12) var(--r20); */
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

  .house-search,
  .filter-buttons {
    flex: 0 0 100%;
  }
  .house-search--icon {
    width: var(--r15);
    height: var(--r15);
    margin: 0 var(--r15);
  }
  .house-search--input {
    width: 70%;
    font-size: var(--r12);
    padding: var(--r10) var(--r15) var(--r10) 0;
  }

  .house-clear-input--icon {
    width: calc((16 / 16) * 1rem);
    height: calc((17 / 16) * 1rem);
  }

  .position-absolute-right-top {
    transform: translateY(0);
  }

  button {
    font-size: var(--r12);
  }
}
</style>
