import { defineStore } from 'pinia'
import data from '@/data.json'

// Pinia state management store
export const useHousesStore = defineStore('HousesStore', {
  state: () => {
    return {
      houses: [] // Used to maintain a sync list of all houses
    }
  },

  getters: {
    getHouses() {
      return this.houses
    }
  },
  // CRUD operations
  actions: {
    // Fetch all houses from the backend. For this application we will fetch from a json data imported
    // For a big application we will need to fetch on demand
    fetchHouses() {
      for (const house of data) {
        this.houses.push(house)
      }
    },

    // Get house by id
    houseById(houseId) {
      return this.houses.find((house) => house.id === +houseId)
    },

    // Create a new house
    postHouse(formData) {
      const formDataObject = this.convertFormDataToObject(formData)

      formDataObject.id = Math.floor(Math.random() * 100)
      formDataObject.madeByMe = true

      this.houses.push(formDataObject)

      return formDataObject
    },

    // Upload an image for a given house
    postImage(imgFormData, houseId) {
      const imgUrlObject = this.convertFormDataToObject(imgFormData)

      const selectedHouse = this.houses.find((house) => house.id === +houseId)
      selectedHouse.image = imgUrlObject.image
    },

    // Action to edit an existing house using a POST request to the server
    editHouse(formData, houseId) {
      const formDataObject = this.convertFormDataToObject(formData)

      //Find the house selected to be edited
      let selectedHouse = this.houses.find((house) => house.id === +houseId)

      //Update data of the house
      selectedHouse = { ...formDataObject, id: +houseId, madeByMe: selectedHouse.madeByMe }

      // Remove the specific house from the store's houses array.
      this.houses = this.houses.filter((house) => house.id !== +houseId)

      //Insert the new edited house back to store's house
      this.houses.push(selectedHouse)
    },

    // Delete house by ID
    deleteHouse(houseId) {
      this.houses = this.houses.filter((house) => house.id !== +houseId)
    },

    //Convert form data format in javascript object
    convertFormDataToObject(formData) {
      const formDataObject = {}
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value
      }

      return formDataObject
    }
  }
})
