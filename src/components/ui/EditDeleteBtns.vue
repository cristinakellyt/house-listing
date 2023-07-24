<template>
  <div :class="`flex ${gap}`">
    <base-button @click="editPage">
      <template v-slot:icon>
        <slot name="editBtn" />
      </template>
    </base-button>

    <base-button @click="showDeleteModal">
      <template v-slot:icon>
        <slot name="deleteBtn" />
      </template>
    </base-button>
  </div>
  <Teleport to="#app">
    <house-delete
      v-if="deleteModalIsVisible"
      :houseId="id"
      @closeModal="hideDeleteModal"
    ></house-delete>
  </Teleport>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import HouseDelete from '@/components/ui/HouseDelete.vue'

const router = useRouter()

const props = defineProps({
  id: Number,
  gap: {
    type: String,
    default: 'large'
  }
})

const editPage = ($event) => {
  $event.cancelBubble = true
  router.push({ name: 'edit', params: { houseId: props.id } })
}

const deleteModalIsVisible = ref(false)

const showDeleteModal = ($event) => {
  $event.cancelBubble = true
  deleteModalIsVisible.value = true
}

const hideDeleteModal = () => {
  deleteModalIsVisible.value = false
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.flex {
  display: flex;

  &.gap-small {
    gap: pxToRem(10);
  }

  &.gap-medium {
    gap: pxToRem(20);
  }

  &.gap-large {
    gap: pxToRem(30);
  }
}
</style>
