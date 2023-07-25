<template>
  <base-modal
    @confirm="deleteHouse"
    @cancel="closeModal"
    firstBnTheme="primary"
    secondBtnTheme="secondary"
    :btnsSize="desktopView ? 'large' : 'small'"
  >
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
import { computed, inject } from 'vue'

const router = useRouter()
const emit = defineEmits(['closeModal'])
const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

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
