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

<style scoped lang="scss">
@import '@/assets/main.scss';
.search-bar {
  display: flex;
  align-items: center;
  background-color: $element-color-tertiary-lighter;
  border-radius: pxToRem(10);
  position: relative;

  & input:focus {
    outline: none;
  }

  &:focus-within {
    box-shadow: 0 0 0 1px $element-color-secondary;
  }
}

input {
  width: 100%;
  font-family: 'Open sans', sans-serif;
  color: $element-color-secondary;
  border-radius: pxToRem(10);
  border: none;
  background-color: $element-color-tertiary-lighter;

  &::placeholder {
    color: $element-color-tertiary;
  }

  &.large {
    padding: pxToRem(15) pxToRem(20) pxToRem(15) 0;
    font-size: pxToRem(14);
  }

  &.small {
    padding: pxToRem(10) pxToRem(15) pxToRem(10) 0;
    font-size: pxToRem(12);
  }
}

.search-icon {
  margin: 0 pxToRem(20);

  &.large {
    width: pxToRem(20);
    height: pxToRem(20);
  }

  &.small {
    width: pxToRem(15);
    height: pxToRem(15);
  }
}

.clear-icon {
  position: absolute;
  right: pxToRem(10);

  &.large {
    width: pxToRem(20);
    height: pxToRem(20);
  }

  &.small {
    width: pxToRem(15);
    height: pxToRem(15);
  }
}

// .search-icon.large,
// .clear-icon.large {
//   width: pxToRem(20);
//   height: pxToRem(20);
// }

// .search-icon.small,
// .clear-icon.small {
//   width: pxToRem(15);
//   height: pxToRem(15);
// }
</style>
