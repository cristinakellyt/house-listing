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
    <form class="form" @submit.prevent="submitForm">
      <div class="form-control all-width">
        <FormInput
          id="street-name"
          label="Street Name*"
          name="streetName"
          type="text"
          placeholder="Enter street name"
          :isRequired="true"
          :data="house ? house.location.street : ''"
          :isInvalid="isSubmited && formErrors.includes('street-name')"
          @onChange="(value) => (streetName = value.trim())"
          @onError="onFormInputErrorHandler"
          @onValid="onFormInputValidHandler"
        />
      </div>

      <div class="form-group--flex">
        <div class="form-control">
          <FormInput
            id="house-number"
            label="House number*"
            name="houseNumber"
            type="number"
            placeholder="Enter the house number"
            :isRequired="true"
            :data="house ? house.location.houseNumber.toString() : ''"
            :isInvalid="isSubmited && formErrors.includes('house-number')"
            @onChange="(value) => (houseNumber = value.trim())"
            @onError="onFormInputErrorHandler"
            @onValid="onFormInputValidHandler"
          />
        </div>
        <div class="form-control">
          <FormInput
            id="addition"
            label="Addition(optional)"
            name="numberAddition"
            type="text"
            placeholder="e.g.A"
            :isRequired="false"
            :data="house ? house.location.houseNumberAddition.toString() : ''"
            :isInvalid="isSubmited && formErrors.includes('addition')"
            @onChange="(value) => (addition = value.trim())"
            @onError="onFormInputErrorHandler"
            @onValid="onFormInputValidHandler"
          />
        </div>
      </div>

      <div class="form-control all-width">
        <FormInput
          id="postal-code"
          label="Postal code*"
          name="zip"
          type="text"
          placeholder="e.g. 1000 AA"
          :isRequired="true"
          :data="house ? house.location.zip : ''"
          :isInvalid="isSubmited && formErrors.includes('postal-code')"
          @onChange="(value) => (zip = value.trim())"
          @onError="onFormInputErrorHandler"
          @onValid="onFormInputValidHandler"
        />
      </div>

      <div class="form-control all-width">
        <FormInput
          id="city"
          label="City*"
          name="city"
          type="text"
          placeholder="e.g. Utrecht"
          :isRequired="true"
          :data="house ? house.location.city : ''"
          :isInvalid="isSubmited && formErrors.includes('city')"
          @onChange="(value) => (city = value.trim())"
          @onError="onFormInputErrorHandler"
          @onValid="onFormInputValidHandler"
        />
      </div>

      <div class="form-control all-width">
        <FormInput
          id="image"
          label="Upload picture(PNG or JPG)*"
          name="image"
          type="file"
          :isRequired="true"
          :data="house ? house.image : ''"
          :isInvalid="isSubmited && formErrors.includes('image')"
          @onChange="(value) => (image = value)"
          @onError="onFormInputErrorHandler"
          @onValid="onFormInputValidHandler"
        />
      </div>

      <div class="form-control all-width">
        <FormInput
          id="price"
          label="Price*"
          name="price"
          type="number"
          placeholder="e.g. 150.000"
          :isRequired="true"
          :data="house ? house.price.toString() : ''"
          :isInvalid="isSubmited && formErrors.includes('price')"
          @onChange="(value) => (price = value.trim())"
          @onError="onFormInputErrorHandler"
          @onValid="onFormInputValidHandler"
        />
      </div>

      <div class="form-group--flex">
        <div class="form-control">
          <FormInput
            id="size"
            label="Size*"
            name="size"
            type="text"
            placeholder="e.g. 60m2"
            :isRequired="true"
            :data="house ? house.size.toString() : ''"
            :isInvalid="isSubmited && formErrors.includes('size')"
            @onChange="(value) => (size = value.trim())"
            @onError="onFormInputErrorHandler"
            @onValid="onFormInputValidHandler"
          />
        </div>
        <div class="form-control">
          <FormInput
            id="garage"
            name="garage"
            label="Garage*"
            type="select"
            :isRequired="true"
            :data="house ? house.hasGarage.toString() : ''"
            :isInvalid="isSubmited && formErrors.includes('garage')"
            @onChange="(value) => (hasGarage = value.trim())"
            @onError="onFormInputErrorHandler"
            @onValid="onFormInputValidHandler"
          />
        </div>
      </div>

      <div class="form-group--flex">
        <div class="form-control">
          <FormInput
            id="bedrooms"
            label="Bedrooms*"
            name="bedrooms"
            type="number"
            placeholder="Enter amount"
            :isRequired="true"
            :data="house ? house.rooms.bedrooms.toString() : ''"
            :isInvalid="isSubmited && formErrors.includes('bedrooms')"
            @onChange="(value) => (bedrooms = value.trim())"
            @onError="onFormInputErrorHandler"
            @onValid="onFormInputValidHandler"
          />
        </div>
        <div class="form-control">
          <FormInput
            id="bathrooms"
            label="Bathrooms*"
            name="bathrooms"
            type="number"
            placeholder="Enter amount"
            :isRequired="true"
            :data="house ? house.rooms.bathrooms.toString() : ''"
            :isInvalid="isSubmited && formErrors.includes('bathrooms')"
            @onChange="(value) => (bathrooms = value.trim())"
            @onError="onFormInputErrorHandler"
            @onValid="onFormInputValidHandler"
          />
        </div>
      </div>

      <div class="form-control all-width">
        <FormInput
          id="construction-date"
          label="Construction date*"
          name="constructionYear"
          type="number"
          placeholder="e.g. 1990"
          :isRequired="true"
          :data="house ? house.constructionYear.toString() : ''"
          :isInvalid="isSubmited && formErrors.includes('construction-date')"
          @onChange="(value) => (constructionDate = value.trim())"
          @onError="onFormInputErrorHandler"
          @onValid="onFormInputValidHandler"
        />
      </div>

      <div class="form-control all-width">
        <FormInput
          id="description"
          label="Description*"
          type="textarea"
          name="description"
          rows="5"
          placeholder="Enter description"
          :data="house ? house.description : ''"
          :isRequired="true"
          :isInvalid="isSubmited && formErrors.includes('description')"
          @onChange="(value) => (description = value.trim())"
          @onError="onFormInputErrorHandler"
          @onValid="onFormInputValidHandler"
        />
      </div>

      <button :class="['post', { 'valid-form': formErrors.length === 0 }]">Post</button>
    </form>
  </div>
</template>

<script setup>
import BackTo from './../ui/BackTo.vue'
import FormInput from './FormInput.vue'

import { computed, inject, ref } from 'vue'

const emit = defineEmits(['onFormSubmit'])

const windowWidth = inject('windowWidth')
const desktopView = computed(() => windowWidth.value > 550)

defineProps({
  house: Object
})

const streetName = ref('')
const houseNumber = ref('')
const addition = ref('')
const zip = ref('')
const city = ref('')
const image = ref('')
const price = ref('')
const size = ref('')
const hasGarage = ref('')
const bedrooms = ref('')
const bathrooms = ref('')
const constructionDate = ref('')
const description = ref('')
const formErrors = ref([])
const isSubmited = ref(false)

const onFormInputErrorHandler = (id) => {
  formErrors.value.push(id)
}

const onFormInputValidHandler = (id) => {
  formErrors.value = formErrors.value.filter((elId) => elId !== id)
}

const submitForm = ($event) => {
  isSubmited.value = true

  if (formErrors.value.length) return

  let formData = new FormData()
  formData.append('price', price.value)
  formData.append('bedrooms', bedrooms.value)
  formData.append('bathrooms', bathrooms.value)
  formData.append('size', size.value)
  formData.append('streetName', streetName.value)
  formData.append('houseNumber', houseNumber.value)
  formData.append('numberAddition', addition.value)
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
  max-width: 35%;
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

.post {
  display: inline-block;
  background-color: rgba(235, 84, 64, 0.507);
  border: none;
  padding: var(--r15) var(--r20);
  border-radius: var(--r10);
  color: var(--element-color-backgroun2);
  font-weight: 700;
  font-size: var(--r18);
  transition: all 0.3s;
  margin: var(--r20) 0;
  align-self: flex-end;
  width: 50%;
}

.valid-form {
  background-color: var(--element-color-primary);
  cursor: pointer;
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

@media only screen and (max-width: 34.375em) {
  h1 {
    text-align: center;
  }

  .form-container {
    margin-top: var(--r30);
  }
  .form {
    max-width: 100%;
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
}
</style>
