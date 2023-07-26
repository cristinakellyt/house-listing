import { defineStore } from 'pinia'

// The API it is hard coded here because it is  a private project, besides it is not a good practice
const APIkey = { 'X-Api-Key': 'tjeKEPrVW9xyG_7hUC-HAdkOYa5BiI1l' }
const baseAPIUrl = 'https://api.intern.d-tt.nl/api/houses'

// Pinia state management store.
export const useHousesStore = defineStore('HousesStore', {
  state: () => {
    return {
      houses: [] // Used to maintain a sync list of all houses.
    }
  },

  getters: {
    getHouses() {
      return this.houses
    }
  },
  // CRUD operations.
  actions: {
    // Fetch all houses from the backend. For this application we can get all houses.
    // For a big application we will need to fetch on demand.
    async fetchHouses() {
      try {
        const houses = await fetch(baseAPIUrl, {
          method: 'GET',
          headers: APIkey
        })
        const data = await houses.json()
        // Add the fetched houses to the store's houses array.
        for (const house of data) {
          this.houses.push(house)
        }
      } catch (err) {
        console.log(err)
      }
    },

    // Get house by id.
    async houseById(houseId) {
      // First check if the house already exists in the store, so there is no need to request it from server
      const selectedHouse = this.houses.find((house) => house.id === +houseId)

      if (selectedHouse) {
        return selectedHouse
      } else {
        try {
          // If the house was not found in the store, fetch it from the server using its ID.
          const response = await fetch(`${baseAPIUrl}/${houseId}`, {
            method: 'GET',
            headers: APIkey
          })
          const data = await response.json()
          return data[0]
        } catch (error) {
          return error
        }
      }
    },

    // Create a new house.
    async postHouse(data) {
      try {
        const response = await fetch(baseAPIUrl, {
          method: 'POST',
          body: data,
          headers: APIkey
        })
        const newHouse = await response.json()
        // Keep local store in sync.
        this.houses.push(newHouse)
        return newHouse
      } catch (error) {
        return error
      }
    },

    // Upload an image for a given house.
    async postImage(img, houseId) {
      try {
        const response = await fetch(`${baseAPIUrl}/${houseId}/upload`, {
          method: 'POST',
          body: img,
          headers: APIkey
        })
        // Keep local store in sync.
        await this.updateHousesStore(houseId)
        return response
      } catch (error) {
        return error
      }
    },

    // Action to edit an existing house using a POST request to the server.
    async editHouse(data, houseId) {
      try {
        const response = await fetch(`${baseAPIUrl}/${houseId}`, {
          method: 'POST',
          body: data,
          headers: APIkey
        })
        // Keep local store in sync.
        await this.updateHousesStore(houseId)
        return response
      } catch (error) {
        return error
      }
    },

    // This function make sure store's houses array are synced after any Edit/Create operation.
    async updateHousesStore(houseId) {
      // Remove the specific house from the store's houses array.
      this.houses = this.houses.filter((house) => house.id !== +houseId)

      // Fetch the updated house from the server and add it back to the store's houses array.
      const house = await this.houseById(houseId)
      this.houses.push(house)
    },

    // Delete house by ID.
    async deleteHouse(houseId) {
      try {
        const response = await fetch(`${baseAPIUrl}/${houseId}`, {
          method: 'DELETE',
          headers: APIkey
        })
        // Keep local store in sync
        this.houses = this.houses.filter((house) => house.id !== +houseId)
        return response
      } catch (error) {
        return error
      }
    }
  }
})
