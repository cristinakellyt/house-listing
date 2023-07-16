<template>
  <img src="./../icons/img_placeholder_house@3x.png" alt="house selected" />
  <div class="house-details--options mobile-options">
    <img src="./../icons/ic_back_white@3x.png" alt="back button" width="20" height="20" />
    <div class="flex-gap-30">
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
