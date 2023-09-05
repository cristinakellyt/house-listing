<template>
  <img src="/icons/img_background@3x.png" class="background-image" />
  <div class="form-container">
    <BackTo goTo="/houses" class="margin-zero" />
    <h1>{{ title }}</h1>

    <form class="form" @submit.prevent="submitForm">
      <div class="form-input">
        <label for="street-name">Street Name*</label>
        <input
          :class="[
            'form-input-content',
            'form-input__all-width',
            { 'form-input__invalid': street === '' && isSubmitted }
          ]"
          id="street-name"
          type="text"
          placeholder="Enter street name"
          v-model.trim="street"
        />
      </div>

      <div class="form-input__grouped">
        <div class="form-input">
          <label for="house-number">House number*</label>
          <input
            :class="[
              'form-input-content',
              { 'form-input__invalid': houseNumber === '' && isSubmitted }
            ]"
            id="house-number"
            type="number"
            placeholder="Enter the house number"
            v-model="houseNumber"
          />
        </div>

        <div class="form-input">
          <label for="addition">Addition(optional)</label>
          <input
            class="form-input-content"
            id="addition"
            type="text"
            placeholder="e.g.A"
            v-model.trim="houseNumberAddition"
          />
        </div>
      </div>

      <div class="form-input">
        <label for="postal-code">Postal code*</label>
        <input
          :class="[
            'form-input-content',
            'form-input__all-width',
            { 'form-input__invalid': zip === '' && isSubmitted }
          ]"
          id="postal-code"
          type="text"
          placeholder="e.g. 1000 AA"
          v-model="zip"
        />
      </div>

      <div class="form-input form-input__all-width">
        <label for="city">City*</label>
        <input
          :class="['form-input-content', { 'form-input__invalid': city === '' && isSubmitted }]"
          id="city"
          type="text"
          placeholder="e.g. Utrecht"
          v-model.trim="city"
        />
      </div>

      <div class="form-input form-input__all-width">
        <label>Picture URL*</label>
        <input
          type="url"
          pattern="https://.*"
          minlength="10"
          maxlength="100"
          v-model="imageUrl"
          :class="['form-input-content', { 'form-input__invalid': imageUrl === '' && isSubmitted }]"
        />
      </div>

      <div class="form-input">
        <label for="price">Price*</label>
        <input
          :class="[
            'form-input-content',
            'form-input__all-width',
            { 'form-input__invalid': price === '' && isSubmitted }
          ]"
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

      <div class="form-input__grouped">
        <div class="form-input">
          <label for="size">Size*</label>
          <input
            :class="['form-input-content', { 'form-input__invalid': size === '' && isSubmitted }]"
            id="size"
            type="text"
            placeholder="e.g. 60m2"
            v-model.trim="size"
          />
        </div>
        <div class="form-input">
          <label for="garage">Garage*</label>
          <select
            :class="[
              'form-input-content',
              { 'form-input__invalid': hasGarage === '' && isSubmitted }
            ]"
            id="garage"
            v-model="hasGarage"
          >
            <option value="" disabled>Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>

      <div class="form-input__grouped">
        <div class="form-input">
          <label for="bedrooms">Bedrooms*</label>
          <input
            :class="[
              'form-input-content',
              { 'form-input__invalid': bedrooms === '' && isSubmitted }
            ]"
            id="bedrooms"
            type="number"
            placeholder="Enter amount"
            v-model="bedrooms"
          />
        </div>
        <div class="form-input">
          <label for="bathrooms">Bathrooms*</label>
          <input
            :class="[
              'form-input-content',
              { 'form-input__invalid': bathrooms === '' && isSubmitted }
            ]"
            id="bathrooms"
            type="number"
            placeholder="Enter amount"
            v-model="bathrooms"
          />
        </div>
      </div>

      <div class="form-input">
        <label for="construction-date">Construction date*</label>
        <input
          :class="[
            'form-input-content',
            'form-input__all-width',
            { 'form-input__invalid': constructionDate === '' && isSubmitted }
          ]"
          id="construction-date"
          type="number"
          placeholder="e.g. 1991"
          min="1901"
          :max="new Date().getFullYear()"
          v-model="constructionDate"
        />
      </div>

      <div class="form-input">
        <label for="description">Description*</label>
        <textarea
          :class="[
            'form-input-content',
            'form-input__all-width',
            { 'form-input__invalid': description === '' && isSubmitted }
          ]"
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
import useFormatPrice from '@/components/composables/FormatPrice'

import { computed, ref } from 'vue'

const emit = defineEmits(['onFormSubmit'])

const props = defineProps({
  house: Object,
  title: String
})

const isHouseInitialized = props.house !== undefined

// If there is already some content from house props, fill the references with the value, otherwise, it will be empty.
const street = ref(isHouseInitialized ? props.house.street : '')
const houseNumber = ref(isHouseInitialized ? props.house.houseNumber : '')
const houseNumberAddition = ref(isHouseInitialized ? props.house.houseNumberAddition : '')
const zip = ref(isHouseInitialized ? props.house.zip : '')
const city = ref(isHouseInitialized ? props.house.city : '')
const imageUrl = ref(isHouseInitialized ? props.house.image : '')
const price = ref(isHouseInitialized ? props.house.price : '')
const size = ref(isHouseInitialized ? props.house.size : '')
const hasGarage = ref(isHouseInitialized ? props.house.hasGarage : '')
const bedrooms = ref(isHouseInitialized ? props.house.bedrooms : '')
const bathrooms = ref(isHouseInitialized ? props.house.bathrooms : '')
const constructionDate = ref(isHouseInitialized ? props.house.constructionYear : '')
const description = ref(isHouseInitialized ? props.house.description : '')

// Reference to track if the user try to submit.
const isSubmitted = ref(false)

// Handle the dots in the price show in the UI.
const priceFormatted = computed(() => {
  return useFormatPrice(price.value)
})

// Check if all required fields are filled in and return a boolean.
// If all required fields are filled in and the form can be submitted.
const isFormInvalid = computed(() => {
  let error = false
  if (
    street.value === '' ||
    houseNumber.value === '' ||
    zip.value === '' ||
    city.value === '' ||
    imageUrl.value === '' ||
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

// Handle the submit event.
const submitForm = ($event) => {
  isSubmitted.value = true

  if (isFormInvalid.value) return

  let formData = new FormData()
  // Normalize price to remove dots. API doesn't tell much about how many digits are allowed. It was noted that
  // after some number of digits (6) it just add zeros so it was decided to allow price from 0 to 999.999
  price.value = [...price.value.toString()]
  price.value = price.value.filter((element) => element !== '.')
  price.value = price.value.join('')
  // Append key value pairs to 'formData' in the order that server receives.
  formData.append('price', price.value)
  formData.append('bedrooms', bedrooms.value)
  formData.append('bathrooms', bathrooms.value)
  formData.append('size', size.value)
  formData.append('street', street.value)
  formData.append('houseNumber', houseNumber.value)
  formData.append('numberAddition', houseNumberAddition.value)
  formData.append('zip', zip.value)
  formData.append('city', city.value)
  formData.append('constructionYear', constructionDate.value)
  formData.append('hasGarage', hasGarage.value)
  formData.append('description', description.value)

  let imageFormData = new FormData()
  imageFormData.append('image', imageUrl.value)

  emit('onFormSubmit', formData, imageFormData)

  $event.target.reset()
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';

.background-image {
  @include position-absolute(0, 0);
  z-index: -10;
  height: 100vh;
  zoom: 1.1;
}
.form-container {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 35%;
}

.form {
  @include flex-gap(column, pxToRem(15));
  margin-top: pxToRem(20);

  &-input {
    @include flex-gap(column, pxToRem(5));

    &__grouped {
      flex: 0 1 100%;
      display: flex;
      justify-content: space-between;
      gap: pxToRem(10);

      & div {
        width: 50%;
      }
    }

    &__all-width {
      width: 100%;
    }
  }

  &__button {
    margin: pxToRem(20) 0;
    align-self: flex-end;
    width: 50%;
  }
}

// Start Image
.form-input__image {
  width: pxToRem(120);
  height: pxToRem(120);

  &-fit {
    border-radius: pxToRem(5);
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
// End Image

// Start Form Input
.form-input {
  &-content {
    border: 1px solid transparent;
    padding: pxToRem(15);
    border-radius: pxToRem(5);
    font-size: pxToRem(14);
    background-color: $element-color-background2;
  }

  &::placeholder {
    color: $element-color-tertiary;
    font-family: 'Open Sans', sans-serif;
    font-size: pxToRem(14);
  }

  &__invalid {
    border: 1px solid $element-color-primary;
  }

  &__invalid::placeholder {
    color: $element-color-primary;
  }
}

label {
  font-size: pxToRem(14);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: $text-color-secondary;
}

select {
  padding: pxToRem(10);
  font-family: 'Open Sans', sans-serif;
  font-size: pxToRem(14);
  color: black;
}

textarea::placeholder {
  color: $element-color-tertiary;
  font-family: 'Open Sans', sans-serif;
  font-size: pxToRem(14);
}

// Input type 'file' style
input[type='file'] {
  border: 2px dashed $element-color-tertiary;
  height: pxToRem(120);
  width: pxToRem(120);
  cursor: pointer;
  color: transparent;
  margin-top: pxToRem(10);
  position: relative;
  background-color: transparent;

  &.form-input__invalid {
    border: 2px dashed $element-color-primary;
  }

  &::before {
    @include position-top-left(absolute, 50%, 50%);
    background-image: url('/icons/ic_plus_grey@3x.png');
    content: '';
    transform: translate(-50%, -50%);
    width: pxToRem(35);
    height: pxToRem(35);
    background-size: pxToRem(35);
    background-repeat: no-repeat;
  }
}

::-webkit-file-upload-button {
  visibility: hidden;
}
// End Form Input

.required-field {
  position: absolute;
  bottom: pxToRem(70);
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  font-weight: 500;
  color: $element-color-primary;
  font-size: pxToRem(14);
}

@media only screen and (max-width: 34.375em) {
  h1 {
    text-align: center;
  }

  .margin-zero {
    margin: 0;
  }
  .background-image {
    height: max-content;
    top: revert;
    bottom: 0;
  }
  .form-container {
    max-width: 100%;
    margin-top: pxToRem(30);
  }

  .form label {
    font-size: pxToRem(12);
  }
  .form-input input::placeholder,
  .form select,
  .form-input textarea::placeholder {
    font-size: pxToRem(12);
  }

  .form__button {
    width: 100%;
  }
  .required-field {
    font-size: pxToRem(12);
    bottom: pxToRem(80);
  }
}
</style>
