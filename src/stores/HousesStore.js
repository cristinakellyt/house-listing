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
    // Fetch all houses from the backend. For this application we can get all houses
    // For a big application we will need to fetch on demand
    async fetchHouses() {
      for (const house of data) {
        this.houses.push(house)
      }
    },

    // Get house by id
    async houseById(houseId) {
      const selectedHouse = this.houses.find((house) => house.id === +houseId)
      return selectedHouse
    },

    // Create a new house
    postHouse(formData) {
      const formDataObject = {}
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value
      }

      formDataObject.id = Math.floor(Math.random() * 100)
      formDataObject.madeByMe = true

      this.houses.push(formDataObject)

      return formDataObject
    },

    // Upload an image for a given house
    async postImage(img, houseId) {
      const imgUrlObject = {}
      for (const [key, value] of img.entries()) {
        imgUrlObject[key] = value
      }

      const selectedHouse = this.houses.find((house) => house.id === +houseId)
      selectedHouse.image = imgUrlObject.image
    },

    // Action to edit an existing house using a POST request to the server
    async editHouse(formData, houseId) {
      const formDataObject = {}
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value
      }

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
    async deleteHouse(houseId) {
      this.houses = this.houses.filter((house) => house.id !== +houseId)
    }
  }
})
