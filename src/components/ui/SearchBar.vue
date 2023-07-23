<template>
  <div class="search-bar">
    <img :class="`search-icon ${size}`" src="/icons/ic_search@3x.png" />
    <input
      :class="`${size}`"
      type="text"
      placeholder="Search for a house"
      v-model.trim="searchKey"
      @input="onInputHandler"
      @keyup.enter="onEnterHandler"
    />
    <img
      v-show="searchKey"
      @click="clearSearchKey"
      :class="`clear-icon ${size}`"
      src="/icons/ic_clear@3x.png"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['onSearch'])

defineProps({
  size: String
})

const searchKey = ref('')

const onInputHandler = () => {
  if (searchKey.value === '') emit('onSearch', searchKey.value)
}

const onEnterHandler = () => {
  emit('onSearch', searchKey.value)
}

const clearSearchKey = () => {
  searchKey.value = ''
  emit('onSearch', searchKey.value)
}
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--element-color-tertiary-lighter);
  border-radius: var(--r10);
  position: relative;
}

.search-bar input:focus {
  outline: none;
}

.search-bar:focus-within {
  box-shadow: 0 0 0 1px var(--element-color-secondary);
}

input {
  width: 100%;
  font-family: 'Open sans', sans-serif;
  color: var(--element-color-secondary);
  border-radius: var(--r10);
  border: none;
  background-color: var(--element-color-tertiary-lighter);
}

input::placeholder {
  color: var(--element-color-tertiary);
}

input.large {
  padding: var(--r15) var(--r20) var(--r15) 0;
  font-size: var(--r14);
}

input.small {
  padding: var(--r10) var(--r15) var(--r10) 0;
  font-size: var(--r12);
}

.search-icon {
  margin: 0 var(--r20);
}

.clear-icon {
  position: absolute;
  right: var(--r10);
}

.search-icon.large,
.clear-icon.large {
  width: var(--r20);
  height: var(--r20);
}

.search-icon.small,
.clear-icon.small {
  width: var(--r15);
  height: var(--r15);
}
</style>
