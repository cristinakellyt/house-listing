<template>
  <HouseForm @onFormSubmit="createHouse" />
</template>

<script setup>
import HouseForm from '../components/houseForm/HouseForm.vue'
import { useHousesStore } from './../stores/HousesStore.js'
import { useRouter } from 'vue-router'

const housesStore = useHousesStore()

const router = useRouter()

const createHouse = async (formData, imageFormData) => {
  try {
    const newHouse = await housesStore.postHouse(formData)
    if (newHouse.id) {
      await housesStore.postImage(imageFormData, newHouse.id)
      router.push({ name: 'house-detail', params: { houseId: newHouse.id } })
    } else {
      alert('Error to create a new house')
      return
    }
  } catch (err) {
    alert('Error to create a new house')
    return
  }
}
</script>
