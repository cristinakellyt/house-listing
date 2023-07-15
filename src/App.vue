<template>
  <TheHeader :windowWidth="windowWidth" />
  <base-width>
    <router-view></router-view>
  </base-width>
</template>

<script setup>
import { onMounted, ref, provide } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
import BaseWidth from './components/ui/BaseWidth.vue'

const windowWidth = ref(0)

onMounted(() => {
  window.addEventListener('resize', handlerWindowResize)
  handlerWindowResize()
})

const handlerWindowResize = () => {
  windowWidth.value = window.innerWidth
}
provide('windowWidth', windowWidth)
</script>
