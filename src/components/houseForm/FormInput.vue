<template>
  <label :for="id">{{ label }}</label>
  <textarea
    v-if="type === 'textarea'"
    :class="['form-input', { 'form-input__invalid': isInvalid }]"
    :id="id"
    :name="name"
    :rows="rows"
    :isRequired="isRequired"
    :placeholder="placeholder"
    :value="inputValue"
    @input="inputChange"
  />
  <select
    v-else-if="type === 'select'"
    :class="['form-input', { 'form-input__invalid': isInvalid }]"
    :id="id"
    :name="name"
    :isRequired="isRequired"
    :value="inputValue"
    @input="inputChange"
  >
    <option value="">Select</option>
    <option value="true">Yes</option>
    <option value="false">No</option>
  </select>
  <input
    v-else-if="type === 'file'"
    :class="['form-input', { 'form-input__invalid': isInvalid }]"
    :id="id"
    :name="name"
    :type="type"
    :isRequired="isRequired"
    :placeholder="placeholder"
    accept="image/png, image/jpeg"
    @input="inputChange"
  />
  <input
    v-else
    :class="['form-input', { 'form-input__invalid': isInvalid }]"
    :id="id"
    :name="name"
    :type="type"
    :isRequired="isRequired"
    :placeholder="placeholder"
    :value="inputValue"
    @input="inputChange"
  />
</template>

<script setup>
import { onMounted, ref } from 'vue'

const emit = defineEmits(['onChange', 'onError', 'onValid'])

const inputValue = ref('')
const inputIsValid = ref(true)

onMounted(() => {
  if (props.data) {
    inputValue.value = props.data
    emit('onChange', inputValue.value)
  }
  checkError()
})

const props = defineProps([
  'id',
  'label',
  'name',
  'type',
  'placeholder',
  'isRequired',
  'rows',
  'isInvalid',
  'data'
])

console.log(props.data)

const inputChange = ($event) => {
  if (props.type === 'file' && $event.target.files.length > 0) {
    inputValue.value = $event.target.files[0]
  } else {
    inputValue.value = $event.target.value
  }
  checkError()
  emit('onChange', inputValue.value)
}

const checkError = () => {
  if (props.isRequired && !inputValue.value) {
    setError()
    inputIsValid.value = false
  } else if (!inputIsValid.value) {
    clearError()
    inputIsValid.value = true
  }
}

const setError = () => {
  emit('onError', props.id)
}

const clearError = () => {
  emit('onValid', props.id)
}
</script>

<style scoped>
.form-input {
  border: 1px solid transparent;
  padding: var(--r15);
  border-radius: calc((5 / 16) * 1rem);
  font-size: var(--r14);
  background-color: var(--element-color-backgroun2);
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
}

select,
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
</style>
