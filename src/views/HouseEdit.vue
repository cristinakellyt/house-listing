<template>
  <HouseForm v-if="house" :house="house" @onFormSubmit="editHouse" title="Edit listing" />
</template>

<script setup>
import HouseForm from '@/components/houses/HouseForm.vue'
import { useHousesStore } from '@/stores/HousesStore'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const housesList = useHousesStore()
const router = useRouter()

const props = defineProps({
  houseId: String
})

const house = ref('')

// Fetch the house data based on the provided 'houseId' received through router params.
const getHouse = async () => {
  try {
    house.value = await housesList.houseById(props.houseId)
  } catch (error) {
    console.log(error)
  }
}

// Handle the edit of a given house and go to its details page
const editHouse = async (formData, imageFormData) => {
  try {
    await housesList.editHouse(formData, props.houseId)
    await housesList.postImage(imageFormData, props.houseId)
    router.push({ name: 'detail', params: { houseId: props.houseId } })
  } catch (error) {
    alert(error)
  }
}

onMounted(() => {
  getHouse()
})
</script>
