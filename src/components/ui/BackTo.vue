<template>
  <div v-if="desktopView" class="back-to-house-list" @click="backTo">
    <img src="./../icons/ic_back_grey@3x.png" alt="back button" height="20" width="20" />
    <p>Back to overview</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { inject, computed } from 'vue'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

const router = useRouter()
const backTo = () => {
  router.push('/houses')
}
</script>

<style scoped>
.back-to-house-list {
  display: flex;
  align-items: center;
  gap: var(--r15);
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: var(--r16);
  margin: calc((30 / 16) * 1rem) 0;
  color: var(--text-color-primary);
  cursor: pointer;
}
</style>
