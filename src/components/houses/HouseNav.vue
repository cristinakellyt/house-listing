<template>
  <div class="house-nav--container">
    <h1>Houses</h1>
    <button v-if="desktopView" class="position-absolute-right-top">
      <div class="house-create--div">
        <img class="house-create--icon" src="./../icons/ic_plus_white@3x.png" />CREATE NEW
      </div>
    </button>
    <img
      v-else
      class="position-absolute-right-top house-create--icon"
      src="./../icons/ic_plus_grey@3x.png"
    />
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
        <button class="filter-buttons__price">Price</button>
        <button class="filter-buttons__size">Size</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

const searchKey = ref('')
const emit = defineEmits(['searchHouses', 'cleanSearch'])

const searchHouses = (input) => {
  emit('searchHouses', input)
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
</script>

<style scoped>
.house-nav--container {
  position: relative;
  margin-top: calc((30 / 16) * 1rem);
}

.position-absolute-right-top {
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-10%);
}

.house-create--div {
  display: flex;
  align-items: center;
  gap: var(--r15);
}

.house-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: calc((35 / 16) * 1rem);
}

button {
  display: inline-block;
  background-color: var(--element-color-primary);
  border: none;
  padding: var(--r15) var(--r20);
  border-radius: var(--r10);
  color: var(--element-color-backgroun2);
  font-weight: 700;
  font-size: var(--r18);
}

.house-search {
  display: flex;
  align-items: center;
  flex: 0 0 35%;
  background-color: var(--element-color-tertiary-lighter);
  border-radius: var(--r10);
  position: relative;
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

  padding: var(--r12) var(--r20);
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
