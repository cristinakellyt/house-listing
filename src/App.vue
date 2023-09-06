<template>
  <TheHeader />
  <base-width>
    <router-view></router-view>
  </base-width>
</template>

<script setup>
import { onMounted, ref, provide } from 'vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import BaseWidth from '@/components/ui/BaseWidth.vue'
import { useHousesStore } from '@/stores/HousesStore'

const windowWidth = ref(0)
const desktopView = ref(false)

onMounted(() => {
  window.addEventListener('resize', handlerWindowResize)
  handlerWindowResize()
})

// Handle window resize, update 'windowWidth' value and set desktopView.
const handlerWindowResize = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value > 550) {
    desktopView.value = true
  } else {
    desktopView.value = false
  }
}
// Provide 'windowWidth' as a reactive property that can be used by child components.
provide('desktopView', desktopView)

const housesList = useHousesStore()

// Fetch houses when the component is initialized.
housesList.fetchHouses()
</script>

<style lang="scss">
@import '@/assets/main.scss';
</style>
