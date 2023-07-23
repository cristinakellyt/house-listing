<template>
  <div :class="`gap ${gap}`">
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
import HouseDelete from './HouseDelete.vue'

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

<style scoped>
.gap {
  display: flex;
}
.gap.small {
  gap: var(--r10);
}

.gap.medium {
  gap: var(--r20);
}

.gap.large {
  gap: var(--r30);
}
</style>
