<template>
  <base-modal @confirm="deleteHouse" @cancel="closeModal">
    <template v-slot:title>
      <h2>Delete listing</h2>
    </template>
    <template v-slot:text>
      <p>Are you sure you want to delete this listing?</p>
      <p>This action cannot be undone</p>
    </template>
    <template v-slot:firstBtn> YES, DELETE </template>
    <template v-slot:secondBtn> GO BACK </template>
  </base-modal>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useHousesStore } from '@/stores/HousesStore'

const router = useRouter()
const emit = defineEmits(['closeModal'])
const housesList = useHousesStore()

const props = defineProps({
  houseId: Number
})

const deleteHouse = async () => {
  await housesList.deleteHouse(props.houseId)
  router.push({ path: '/houses' })
  emit('closeModal')
}

const closeModal = () => {
  emit('closeModal')
}
</script>
