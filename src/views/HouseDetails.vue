<template>
  <div v-if="houseFound" class="house-details">
    <div class="house-details__container">
      <BackTo v-if="desktopView" goTo="/houses" />
      <DetailImage
        :image="selectedHouse.image"
        :madeByMe="selectedHouse.madeByMe"
        :id="selectedHouse.id"
      />
      <HouseDescription
        :id="selectedHouse.id"
        :street="selectedHouse.location.street"
        :zip="selectedHouse.location.zip"
        :city="selectedHouse.location.city"
        :houseNumber="selectedHouse.location.houseNumber"
        :price="selectedHouse.price"
        :bedrooms="selectedHouse.rooms.bedrooms"
        :bathrooms="selectedHouse.rooms.bathrooms"
        :size="selectedHouse.size"
        :hasGarage="selectedHouse.hasGarage"
        :description="selectedHouse.description"
        :constructionYear="selectedHouse.constructionYear"
        :madeByMe="selectedHouse.madeByMe"
      />
    </div>
  </div>
  <div v-else-if="loading">Loading...</div>
  <HouseNotFound v-else />
</template>

<script setup>
import DetailImage from '@/components/houseDetail/DetailImage.vue'
import HouseDescription from '@/components/houseDetail/HouseDescription.vue'
import HouseNotFound from '@/components/houses/HouseNotFound.vue'
import BackTo from '@/components/ui/BackTo.vue'
import { useHousesStore } from '@/stores/HousesStore'
import { onMounted, ref } from 'vue'
import { inject, computed } from 'vue'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

const props = defineProps({ houseId: String })

const housesList = useHousesStore()

const loading = ref(true)
const houseFound = ref(false)
const selectedHouse = ref()

const getHouse = async () => {
  try {
    selectedHouse.value = await housesList.houseById(props.houseId)
    houseFound.value = true
    loading.value = false
  } catch (error) {
    houseFound.value = false
  }
}

onMounted(() => {
  getHouse()
})
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.house-details {
  display: grid;
  grid-template-columns: 2fr 1fr;

  &__container {
    position: relative;
  }
}

@media only screen and (max-width: 34.375em) {
  .house-details {
    grid-template-columns: 1fr;
    margin: 0 pxToRem(-20);
  }
}
</style>
