<template>
  <TheHeader :windowWidth="windowWidth" />
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

onMounted(() => {
  window.addEventListener('resize', handlerWindowResize)
  // Call 'handlerWindowResize' initially to set the 'windowWidth' value.
  handlerWindowResize()
})

// Function to handle window resize event and update 'windowWidth' value.
const handlerWindowResize = () => {
  windowWidth.value = window.innerWidth
}
// Provide 'windowWidth' as a reactive property that can be used by child components.
provide('windowWidth', windowWidth)

const housesList = useHousesStore()

// Fetch houses when the component is initialized.
housesList.fetchHouses()
</script>
