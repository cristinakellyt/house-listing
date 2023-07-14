<template>
  <div>
    <div class="page-header">
      <h1>Houses</h1>
      <button>
        <div class="create-btn">
          <img class="create-new__icon" src="./../icons/ic_plus_white@3x.png" />CREATE NEW
        </div>
      </button>
    </div>

    <div class="house-filter">
      <div class="house-search">
        <img class="house-search__icon" src="./../icons/ic_search@3x.png" />
        <input class="house-search__input" type="search" placeholder="Search for a house" />
      </div>
      <div class="filter-buttons">
        <button class="btn-price">Price</button>
        <button class="btn-size">Size</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px; /* change unit */
}

.house-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px; /* change unit */
}

button {
  display: inline-block;
  background-color: var(--element-color-primary);
  border: none;
  padding: 15px 20px; /* change unit */
  border-radius: 10px; /* change unit */
  color: var(--element-color-backgroun2);
  font-weight: 700;
  font-size: var(--r18);
}

.create-btn {
  display: flex;
  align-items: center;
  gap: 15px;
}

.house-search {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 0 0 35%;
  padding: 15px 20px;
  background-color: var(--element-color-tertiary-lighter);
  border-radius: 10px;
}

.house-search__input {
  width: 100%;
  font-size: inherit;
  border: none;
  background-color: var(--element-color-tertiary-lighter);
}

.house-search__icon {
  width: 24px;
}
.filter-buttons {
  flex: 0 0 20%;
}
.btn-price {
  width: 50%;
  border-radius: 10px 0 0 10px;
}

.btn-size {
  width: 50%;
  border-radius: 0 10px 10px 0;
}

.create-new__icon {
  width: 20px; /* change unit */
}
</style>
