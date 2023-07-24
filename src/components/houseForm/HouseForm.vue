<template>
  <img src="/icons/img_background@3x.png" class="background-image" />
  <div class="form-container">
    <BackTo goTo="/houses" class="margin-zero" />
    <h1>{{ title }}</h1>

    <form class="form" @submit.prevent="submitForm">
      <div class="form-control all-width">
        <label for="street-name">Street Name*</label>
        <input
          :class="['form-input', { 'form-input__invalid': street === '' && isSubmitted }]"
          id="street-name"
          type="text"
          placeholder="Enter street name"
          v-model.trim="street"
        />
      </div>

      <div class="form-group--flex">
        <div class="form-control">
          <label for="house-number">House number*</label>
          <input
            :class="['form-input', { 'form-input__invalid': houseNumber === '' && isSubmitted }]"
            id="house-number"
            type="number"
            placeholder="Enter the house number"
            v-model="houseNumber"
          />
        </div>

        <div class="form-control">
          <label for="addition">Addition(optional)</label>
          <input
            class="form-input"
            id="addition"
            type="text"
            placeholder="e.g.A"
            v-model.trim="houseNumberAddition"
          />
        </div>
      </div>

      <div class="form-control all-width">
        <label for="postal-code">Postal code*</label>
        <input
          :class="['form-input', { 'form-input__invalid': zip === '' && isSubmitted }]"
          id="postal-code"
          type="text"
          placeholder="e.g. 1000 AA"
          v-model="zip"
        />
      </div>

      <div class="form-control all-width">
        <label for="city">City*</label>
        <input
          :class="['form-input', { 'form-input__invalid': city === '' && isSubmitted }]"
          id="city"
          type="text"
          placeholder="e.g. Utrecht"
          v-model.trim="city"
        />
      </div>

      <div class="form-control all-width">
        <label>Upload picture(PNG or JPG)*</label>
        <div v-if="image" class="image-input">
          <closeable-content @onClose="() => (image = '')" size="small">
            <img :src="imageSrc" class="fit-image" />
          </closeable-content>
        </div>
        <input
          v-else
          type="file"
          accept="image/png, image/jpeg"
          :class="['form-input', { 'form-input__invalid': image === '' && isSubmitted }]"
          @change="(e) => (image = e.target.files[0])"
        />
      </div>

      <div class="form-control all-width">
        <label for="price">Price*</label>
        <input
          :class="['form-input', { 'form-input__invalid': price === '' && isSubmitted }]"
          id="price"
          type="text"
          placeholder="e.g. 150.000"
          pattern="[0-9]{1,3}(\.[0-9]{1,3})?"
          title="Valid from 0 to 999.999 above that you need premium account :p"
          :value="priceFormatted"
          @input="
            (e) => {
              price = e.target.value
            }
          "
        />
      </div>

      <div class="form-group--flex">
        <div class="form-control">
          <label for="size">Size*</label>
          <input
            :class="['form-input', { 'form-input__invalid': size === '' && isSubmitted }]"
            id="size"
            type="text"
            placeholder="e.g. 60m2"
            v-model.trim="size"
          />
        </div>
        <div class="form-control">
          <label for="garage">Garage*</label>
          <select
            :class="['form-input', { 'form-input__invalid': hasGarage === '' && isSubmitted }]"
            id="garage"
            v-model="hasGarage"
          >
            <option value="" disabled>Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>

      <div class="form-group--flex">
        <div class="form-control">
          <label for="bedrooms">Bedrooms*</label>
          <input
            :class="['form-input', { 'form-input__invalid': bedrooms === '' && isSubmitted }]"
            id="bedrooms"
            type="number"
            placeholder="Enter amount"
            v-model="bedrooms"
          />
        </div>
        <div class="form-control">
          <label for="bathrooms">Bathrooms*</label>
          <input
            :class="['form-input', { 'form-input__invalid': bathrooms === '' && isSubmitted }]"
            id="bathrooms"
            type="number"
            placeholder="Enter amount"
            v-model="bathrooms"
          />
        </div>
      </div>

      <div class="form-control all-width">
        <label for="construction-date">Construction date*</label>
        <input
          :class="['form-input', { 'form-input__invalid': constructionDate === '' && isSubmitted }]"
          id="construction-date"
          type="number"
          placeholder="e.g. 1991"
          min="1901"
          :max="new Date().getFullYear()"
          v-model="constructionDate"
        />
      </div>

      <div class="form-control all-width">
        <label for="description">Description*</label>
        <textarea
          :class="['form-input', { 'form-input__invalid': description === '' && isSubmitted }]"
          id="description"
          rows="5"
          placeholder="Enter description"
          v-model.trim="description"
        ></textarea>
      </div>
      <p v-show="isSubmitted && isFormInvalid" class="required-field">Required field(s) missing.</p>
      <base-button
        :btnColor="!isFormInvalid ? 'primary' : 'tertiary'"
        size="large"
        class="form__button"
      >
        Post
      </base-button>
    </form>
  </div>
</template>

<script setup>
import BackTo from '@/components/ui/BackTo.vue'
import CloseableContent from '@/components/ui/CloseableContent.vue'
import useFormatPrice from '@/components/composables/FormatPrice'

import { computed, ref } from 'vue'

const emit = defineEmits(['onFormSubmit'])

const props = defineProps({
  house: Object,
  title: String
})

const isHouseInitialized = props.house !== undefined

const street = ref(isHouseInitialized ? props.house.location.street : '')
const houseNumber = ref(isHouseInitialized ? props.house.location.houseNumber : '')
const houseNumberAddition = ref(isHouseInitialized ? props.house.location.houseNumberAddition : '')
const zip = ref(isHouseInitialized ? props.house.location.zip : '')
const city = ref(isHouseInitialized ? props.house.location.city : '')
const image = ref(isHouseInitialized ? props.house.image : '')
const price = ref(isHouseInitialized ? props.house.price : '')
const size = ref(isHouseInitialized ? props.house.size : '')
const hasGarage = ref(isHouseInitialized ? props.house.hasGarage : '')
const bedrooms = ref(isHouseInitialized ? props.house.rooms.bedrooms : '')
const bathrooms = ref(isHouseInitialized ? props.house.rooms.bathrooms : '')
const constructionDate = ref(isHouseInitialized ? props.house.constructionYear : '')
const description = ref(isHouseInitialized ? props.house.description : '')

const isSubmitted = ref(false)

const imageSrc = computed(() => {
  if (image.value instanceof File) {
    return URL.createObjectURL(image.value)
  }
  return image.value
})

const priceFormatted = computed(() => {
  return useFormatPrice(price.value)
})

// Check if all required fields are filled in and return an array with the missing fields
// If the array is empty, all required fields are filled in and the form can be submitted
const isFormInvalid = computed(() => {
  let error = false
  if (
    street.value === '' ||
    houseNumber.value === '' ||
    zip.value === '' ||
    city.value === '' ||
    image.value === '' ||
    price.value === '' ||
    size.value === '' ||
    hasGarage.value === '' ||
    bedrooms.value === '' ||
    bathrooms.value === '' ||
    constructionDate.value === '' ||
    description.value === ''
  ) {
    error = true
  }

  return error
})

const submitForm = ($event) => {
  isSubmitted.value = true

  if (isFormInvalid.value) return

  let formData = new FormData()
  // Normalize price to remove dots. API does tell much about how many digits are allows. It was noted that
  // after some number of digits (6) it just add zeros so it was decided to allow from 0 to 999.999
  price.value = [...price.value.toString()]
  price.value = price.value.filter((element) => element !== '.')
  price.value = price.value.join('')
  formData.append('price', price.value)
  formData.append('bedrooms', bedrooms.value)
  formData.append('bathrooms', bathrooms.value)
  formData.append('size', size.value)
  formData.append('streetName', street.value)
  formData.append('houseNumber', houseNumber.value)
  formData.append('numberAddition', houseNumberAddition.value)
  formData.append('zip', zip.value)
  formData.append('city', city.value)
  formData.append('constructionYear', constructionDate.value)
  formData.append('hasGarage', hasGarage.value)
  formData.append('description', description.value)

  let imageFormData = new FormData()
  imageFormData.append('image', image.value)

  emit('onFormSubmit', formData, imageFormData)

  $event.target.reset()
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 35%;
}
.background-image {
  position: absolute;
  z-index: -10;
  height: 100vh;
  top: 0;
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
  display: flex;
  flex-direction: column;
  gap: var(--r15);
  margin-top: var(--r20);
}

.all-width input {
  width: 100%;
}

.form-control {
  display: flex;
  flex-direction: column;
  gap: calc((5 / 16) * 1rem);
}

.form__button {
  margin: var(--r20) 0;
  align-self: flex-end;
  width: 50%;
}
.required-field {
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  font-weight: 500;
  color: var(--element-color-primary);
  font-size: var(--r14);
  position: absolute;
  bottom: calc((70 / 16) * 1rem);
}

/* Start Image */
.image-input {
  width: calc((120 / 16) * 1rem);
  height: calc((120 / 16) * 1rem);
}

.fit-image {
  border-radius: 5px;
  object-fit: cover;
  height: 100%;
}

/* End Image */

/* Start Form Input */

.form-input {
  border: 1px solid transparent;
  padding: var(--r15);
  border-radius: calc((5 / 16) * 1rem);
  font-size: var(--r14);
  background-color: var(--element-color-background2);
}

.form-input::placeholder {
  color: var(--element-color-tertiary);
  font-family: 'Open Sans', sans-serif;
  font-size: var(--r14);
}

.form-input__invalid {
  border: 1px solid var(--element-color-primary);
}
.form-input__invalid::placeholder {
  color: var(--element-color-primary);
}

label {
  font-size: var(--r14);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: var(--text-color-secondary);
}

select {
  padding: var(--r10);
  font-family: 'Open Sans', sans-serif;
  font-size: var(--r14);
  color: black;
}

textarea::placeholder {
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

input[type='file'].form-input__invalid {
  border: 2px dashed var(--element-color-primary);
}

::-webkit-file-upload-button {
  visibility: hidden;
}

input[type='file']::before {
  position: absolute;
  background-image: url('/icons/ic_plus_grey@3x.png');
  content: '';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc((35 / 16) * 1rem);
  height: calc((35 / 16) * 1rem);
  background-size: calc((35 / 16) * 1rem);
  background-repeat: no-repeat;
}

/* End Form Input */

@media only screen and (max-width: 34.375em) {
  h1 {
    text-align: center;
  }

  .margin-zero {
    margin: 0;
  }
  .form-container {
    max-width: 100%;
    margin-top: var(--r30);
  }
  .post {
    width: 100%;
  }
  .form label {
    font-size: var(--r12);
  }
  .form-control input::placeholder,
  .form select,
  .form-control textarea::placeholder {
    font-size: var(--r12);
  }
  .background-image {
    height: max-content;
    top: revert;
    bottom: 0;
  }

  .form__button {
    width: 100%;
  }
  .required-field {
    font-size: var(--r12);
    bottom: calc((80 / 16) * 1rem);
  }
}
</style>
