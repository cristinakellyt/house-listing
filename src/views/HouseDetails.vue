<template>
  <div v-if="houseFound" class="house-details">
    <div class="house-details__container">
      <div v-if="desktopView" class="back-to-house-list" @click="backToHouses">
        <img
          src="./../components/icons/ic_back_grey@3x.png"
          alt="back button"
          height="20"
          width="20"
        />
        <p>Back to overview</p>
      </div>
      <DetailImage :image="selectedHouse.image" :madeByMe="selectedHouse.madeByMe" />
      <HouseDescription
        :street="selectedHouse.location.street"
        :zipcode="selectedHouse.location.zip"
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
import DetailImage from './../components/houseDetail/DetailImage.vue'
import HouseDescription from './../components/houseDetail/HouseDescription.vue'
import HouseNotFound from './../components/houses/HouseNotFound.vue'
import { useHousesStore } from '../stores/HousesStore'
import { inject, computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({ houseId: String })

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

const housesList = useHousesStore()

const loading = ref(true)
const houseFound = ref(false)
const selectedHouse = ref()

const dataCallback = (error, data) => {
  loading.value = false
  if (error || data.length === 0) {
    return
  }

  if (data) {
    houseFound.value = true
    selectedHouse.value = { ...data[0] }
  }
}

housesList.houseById(props.houseId, dataCallback)

const router = useRouter()
const backToHouses = () => {
  router.push('/houses')
}
</script>

<style scoped>
.house-details {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.house-details__container {
  position: relative;
}

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

@media only screen and (max-width: 34.375em) {
  .house-details {
    grid-template-columns: 1fr;
    margin: 0 calc((-1) * var(--margin-right-left-width));
  }
}
</style>
