<template>
  <div :class="{ 'flex-gap-20': mediumSize, 'flex-gap-30': largeSize }">
    <img
      @click="editPage"
      src="./../icons/ic_edit@3x.png"
      alt="edit the house details"
      :class="{ 'medium-size__btn': mediumSize, 'large-size__btn': largeSize }"
    />

    <img
      src="./../icons/ic_delete@3x.png"
      alt="delete the house"
      :class="{ 'medium-size__btn': mediumSize, 'large-size__btn': largeSize }"
      @click="showDeleteModal"
    />
  </div>
  <house-delete v-if="deleteModalIsVisible" @closeModal="hideDeleteModal"></house-delete>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import HouseDelete from './HouseDelete.vue'

const router = useRouter()

const props = defineProps({
  madeByMe: Boolean,
  mediumSize: Boolean,
  largeSize: Boolean,
  id: Number
})

const editPage = ($event) => {
  $event.cancelBubble = true
  router.push({ name: 'edit', params: { houseId: props.id } })
}

const deleteModalIsVisible = ref(false)

const showDeleteModal = () => {
  deleteModalIsVisible.value = true
}

const hideDeleteModal = () => {
  deleteModalIsVisible.value = false
}
</script>

<style scoped>
.medium-size__btn {
  width: var(--r20);
  height: var(--r20);
}
.flex-gap-20 {
  display: flex;
  gap: var(--r20);
}

.large-size__btn {
  width: calc((24 / 16) * 1rem);
  height: calc((24 / 16) * 1rem);
}
.flex-gap-30 {
  display: flex;
  gap: var(--r30);
}
</style>
