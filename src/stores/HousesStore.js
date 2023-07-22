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

    async houseById(houseId) {
      const selectedHouse = this.houses.find((house) => house.id === +houseId)

      if (selectedHouse) {
        return selectedHouse
      } else {
        try {
          const response = await fetch(`https://api.intern.d-tt.nl/api/houses/${houseId}`, {
            method: 'GET',
            headers: { 'X-Api-Key': 'tjeKEPrVW9xyG_7hUC-HAdkOYa5BiI1l' }
          })
          const data = await response.json()
          return data[0]
        } catch (error) {
          return error
        }
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
        const newHouse = await response.json()
        this.houses.push(newHouse)
        return newHouse
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
        await this.updateHousesStore(houseId)
        return response
      } catch (error) {
        return error
      }
    },

    async editHouse(data, houseId) {
      try {
        const response = await fetch(`https://api.intern.d-tt.nl/api/houses/${houseId}`, {
          method: 'POST',
          body: data,
          headers: {
            'X-Api-Key': 'tjeKEPrVW9xyG_7hUC-HAdkOYa5BiI1l'
          }
        })
        await this.updateHousesStore(houseId)
        return response
      } catch (error) {
        return error
      }
    },

    async updateHousesStore(houseId) {
      this.houses = this.houses.filter((house) => house.id !== +houseId)

      const house = await this.houseById(houseId)
      this.houses.push(house)
    },

    async deleteHouse(houseId) {
      try {
        const response = await fetch(`https://api.intern.d-tt.nl/api/houses/${houseId}`, {
          method: 'DELETE',
          headers: {
            'X-Api-Key': 'tjeKEPrVW9xyG_7hUC-HAdkOYa5BiI1l'
          }
        })
        this.houses = this.houses.filter((house) => house.id !== +houseId)
        return response
      } catch (error) {
        return error
      }
    }
  }
})
