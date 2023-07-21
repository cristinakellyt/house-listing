import { defineStore } from 'pinia'

export const useHousesStore = defineStore('HousesStore', {
  state: () => {
    return {
      houses: []
    }
  },
  getters: {
    getHouses() {
      return this.houses
    }
  },
  actions: {
    fetchHouses() {
      fetch('https://api.intern.d-tt.nl/api/houses', {
        method: 'GET',
        headers: { 'X-Api-Key': 'tjeKEPrVW9xyG_7hUC-HAdkOYa5BiI1l' }
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          for (const house of data) {
            this.houses.push(house)
          }
        })
        .catch((error) => {
          // TODO Add error handler
          console.log(error)
        })
    },

    houseById(houseId, cb) {
      const apiURL = 'https://api.intern.d-tt.nl/api/houses/' + houseId

      const selectedHouse = this.houses.find((house) => house.id === +houseId)
      if (selectedHouse) {
        cb(undefined, [selectedHouse])
      } else {
        fetch(apiURL, {
          method: 'GET',
          headers: { 'X-Api-Key': 'tjeKEPrVW9xyG_7hUC-HAdkOYa5BiI1l' }
        })
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            cb(undefined, data)
          })
          .catch((error) => {
            // TODO Add error handler
            cb(error, undefined)
          })
      }
    },

    async postHouse(data) {
      try {
        const response = await fetch('https://api.intern.d-tt.nl/api/houses', {
          method: 'POST',
          body: data,
          headers: {
            'X-Api-Key': 'tjeKEPrVW9xyG_7hUC-HAdkOYa5BiI1l'
          }
        })
        return await response.json()
      } catch (error) {
        return error
      }
    },

    async postImage(img, houseId) {
      try {
        const response = await fetch(`https://api.intern.d-tt.nl/api/houses/${houseId}/upload`, {
          method: 'POST',
          body: img,
          headers: {
            'X-Api-Key': 'tjeKEPrVW9xyG_7hUC-HAdkOYa5BiI1l'
          }
        })
        return response
      } catch (error) {
        return error
      }
    }
  }
})
