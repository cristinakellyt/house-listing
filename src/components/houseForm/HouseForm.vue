<template>
  <img src="./../icons/img_background@3x.png" class="background-image" />
  <div class="form-container">
    <BackTo>
      <p>Back to overview</p>
    </BackTo>
    <h1>Create new Listing</h1>
    <img
      v-if="!desktopView"
      class="position-absolute-right-top back--icon"
      src="./../icons/ic_back_grey@3x.png"
    />
    <form class="form">
      <div class="form-control all-width">
        <label for="street-name">Street name*</label>
        <input
          id="street-name"
          name="street-name"
          type="text"
          placeholder="Enter the street name"
          required
        />
      </div>

      <div class="form-group--flex">
        <div class="form-control">
          <label for="house-number">House number*</label>
          <input
            id="house-number"
            name="house-number"
            type="text"
            placeholder="Enter the house number"
            required
          />
        </div>
        <div class="form-control">
          <label for="addition">Addition(optional)</label>
          <input id="addition" name="addition" type="text" placeholder="e.g.A" />
        </div>
      </div>
      <div class="form-control all-width">
        <label for="postal-code">Postal code*</label>
        <input
          id="postal-code"
          name="postal-code"
          type="text"
          placeholder="e.g. 1000 AA"
          required
        />
      </div>

      <div class="form-control all-width">
        <label for="city">City*</label>
        <input id="city" name="city" type="text" placeholder="e.g. Utrecht" required />
      </div>

      <div class="form-control all-width">
        <label for="picture">Upload picture(PNG or JPG)*</label>
        <input id="picture" name="picture" type="file" accept="image/png, image/jpeg" required />
      </div>

      <div class="form-control all-width">
        <label for="price">Price*</label>
        <input id="price" name="price" type="text" placeholder="e.g. 150.000" required />
      </div>
      <div class="form-group--flex">
        <div class="form-control">
          <label for="size">Size*</label>
          <input id="size" name="size" type="text" placeholder="e.g. 60m2" required />
        </div>
        <div class="form-control">
          <label for="garage">Garage*</label>
          <select id="garage" name="garage" required>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div class="form-group--flex">
        <div class="form-control">
          <label for="bedrooms">Bedrooms*</label>
          <input id="bedrooms" name="bedrooms" type="number" placeholder="Enter amount" required />
        </div>
        <div class="form-control">
          <label for="bathrooms">Bathrooms*</label>
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            placeholder="Enter amount"
            required
          />
        </div>
      </div>
      <div class="form-control all-width">
        <label for="construction-date">Construction date*</label>
        <input
          id="construction-date"
          name="construction-date"
          type="number"
          placeholder="e.g. 1990"
          required
        />
      </div>
      <div class="form-control all-width">
        <label for="description">Description*</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          placeholder="Enter description"
          required
        ></textarea>
      </div>
      <button class="post">Post</button>
    </form>
  </div>
</template>

<script setup>
import BackTo from './../ui/BackTo.vue'

import { computed, inject } from 'vue'

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  position: relative;
}
.background-image {
  position: absolute;
  z-index: -10;
  height: 100vh;
  right: 0;
  zoom: 1.1;
}

.form-group--flex {
  flex: 0 1 100%;
  display: flex;
  justify-content: space-between;
  gap: var(--r10);
}

.form-group--flex div {
  width: 50%;
}

.form {
  max-width: 35%;
  display: flex;
  flex-direction: column;
  gap: var(--r15);
  margin-top: var(--r20);
}

.form input,
.form select,
.form textarea {
  border: none;
  padding: var(--r15);
  border-radius: calc((5 / 16) * 1rem);
  font-size: var(--r14);
  background-color: var(--element-color-backgroun2);
}

.form select {
  padding: var(--r10);
}
.form label {
  font-size: var(--r14);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: var(--text-color-secondary);
}

.all-width input {
  width: 100%;
}

.form-control {
  display: flex;
  flex-direction: column;
  gap: calc((5 / 16) * 1rem);
}
.form-control input::placeholder,
.form select,
.form-control textarea::placeholder {
  color: var(--element-color-tertiary);
  font-family: 'Open Sans', sans-serif;
  font-size: var(--r14);
}

input[type='file'] {
  border: 2px dashed var(--element-color-tertiary);
  height: 120px;
  width: 120px;
  cursor: pointer;
  color: transparent;
  margin-top: 10px;
  position: relative;
  background-color: transparent;
}

::-webkit-file-upload-button {
  visibility: hidden;
}

input[type='file']::before {
  position: absolute;
  background-image: url('./../icons/ic_plus_grey@3x.png');
  content: '';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc((35 / 16) * 1rem);
  height: calc((35 / 16) * 1rem);
  background-size: calc((35 / 16) * 1rem);
  background-repeat: no-repeat;
}

.post {
  display: inline-block;
  background-color: rgb(235 84 64 / 59%);
  border: none;
  padding: var(--r15) var(--r20);
  border-radius: var(--r10);
  color: var(--element-color-backgroun2);
  font-weight: 700;
  font-size: var(--r18);
  cursor: pointer;
  transition: all 0.3s;
  margin: var(--r20) 0;
  align-self: flex-end;
  width: 50%;
}

.position-absolute-right-top {
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-10%);
}

.back--icon {
  width: var(--r20);
}
</style>
