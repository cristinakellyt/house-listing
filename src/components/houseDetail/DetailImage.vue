<template>
  <img :src="image" alt="house selected" />
  <div class="house-details--options mobile-options">
    <img
      src="./../icons/ic_back_white@3x.png"
      alt="back button"
      width="20"
      height="20"
      @click="backToHouses"
    />
    <div v-if="madeByMe" class="flex-gap-30">
      <img
        src="./../icons/ic_edit_white@3x.png"
        alt="edit the house details"
        width="20"
        height="20"
      />
      <img src="./../icons/ic_delete_white@3x.png" alt="delete the house" width="15" height="20" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  image: String,
  madeByMe: Boolean
})

const router = useRouter()
const backToHouses = () => {
  router.push('/houses')
}
</script>

<style scoped>
.house-details--options {
  display: none;
  justify-content: space-between;
  align-items: center;
}
.mobile-options {
  position: absolute;
  margin-top: calc((55 / 16) * 1rem);
  width: 90%;
  left: var(--r20);
  top: 0;
}

.flex-gap-30 {
  display: flex;
  gap: var(--r15);
}

@media only screen and (max-width: 34.375em) {
  .house-details--options {
    display: flex;
  }
}
</style>
