<template>
  <img :src="image" alt="house selected" class="house-details--image" />
  <div v-if="!desktopView" class="house-details--options">
    <base-button goTo="/houses">
      <template v-slot:icon>
        <img
          src="/icons/ic_back_white@3x.png"
          alt="back button"
          width="20"
          height="20"
          @click="backToHouses"
        />
      </template>
    </base-button>

    <div v-if="madeByMe">
      <edit-delete-btns gap="gap-large" :id="id">
        <template v-slot:editBtn>
          <img
            src="/icons/ic_edit_white@3x.png"
            alt="edit the house details"
            width="20"
            height="20"
          />
        </template>

        <template v-slot:deleteBtn>
          <img src="/icons/ic_delete_white@3x.png" alt="delete the house" width="16" height="20" />
        </template>
      </edit-delete-btns>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const desktopView = inject('desktopView')

defineProps({
  image: String,
  madeByMe: Boolean,
  id: Number
})
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';
.house-details--options {
  @include position-top-left(absolute, 0, pxToRem(20));
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: pxToRem(55);
  width: 90%;
}

.house-details--image {
  height: 100%;
  width: 100%;
  object-fit: contain;
  margin: auto;
}
</style>
