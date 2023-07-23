<template>
  <img :src="image" alt="house selected" />
  <div class="house-details--options mobile-options">
    <base-button goTo="/houses">
      <template v-slot:icon>
        <img
          src="./../icons/ic_back_white@3x.png"
          alt="back button"
          width="20"
          height="20"
          @click="backToHouses"
        />
      </template>
    </base-button>

    <div v-if="madeByMe">
      <edit-delete-btns gap="large" :id="id">
        <template v-slot:editBtn>
          <img
            src="./../icons/ic_edit_white@3x.png"
            alt="edit the house details"
            width="20"
            height="20"
          />
        </template>

        <template v-slot:deleteBtn>
          <img
            src="./../icons/ic_delete_white@3x.png"
            alt="delete the house"
            width="16"
            height="20"
          />
        </template>
      </edit-delete-btns>
    </div>
  </div>
</template>

<script setup>

defineProps({
  image: String,
  madeByMe: Boolean,
  id: Number
})
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

@media only screen and (max-width: 34.375em) {
  .house-details--options {
    display: flex;
  }
}
</style>
