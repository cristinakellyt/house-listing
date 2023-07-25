<template>
  <HouseForm @onFormSubmit="createHouse" title="Create new listing" />
</template>

<script setup>
import HouseForm from '@/components/houseForm/HouseForm.vue'
import { useHousesStore } from '@/stores/HousesStore.js'
import { useRouter } from 'vue-router'

const housesStore = useHousesStore()

const router = useRouter()

// On form submitted create a new house
const createHouse = async (formData, imageFormData) => {
  try {
    const newHouse = await housesStore.postHouse(formData)
    // Only upload image if house was created.
    if (newHouse.id) {
      await housesStore.postImage(imageFormData, newHouse.id)
      // Redirects to detail page of the newly created house.
      router.push({ name: 'detail', params: { houseId: newHouse.id } })
    } else {
      // Show simple message in case operation failed.
      alert('Error to create a new house')
      return
    }
  } catch (err) {
    // Show simple message in case operation failed.
    alert('Error to create a new house')
    return
  }
}
</script>
