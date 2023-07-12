<template>
  <TheHeader />
  <base-width>
    <router-view></router-view>
  </base-width>
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import BaseWidth from './components/ui/BaseWidth.vue'
</script>
