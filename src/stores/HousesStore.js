import { defineStore } from 'pinia'

const APIkey = { 'X-Api-Key': 'tjeKEPrVW9xyG_7hUC-HAdkOYa5BiI1l' }
const baseAPIUrl = 'https://api.intern.d-tt.nl/api/houses'

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
    async fetchHouses() {
      try {
        const houses = await fetch(baseAPIUrl, {
          method: 'GET',
          headers: APIkey
        })
        const data = await houses.json()
        for (const house of data) {
          this.houses.push(house)
        }
      } catch (err) {
        console.log(err)
      }
    },

    async houseById(houseId) {
      const selectedHouse = this.houses.find((house) => house.id === +houseId)

      if (selectedHouse) {
        return selectedHouse
      } else {
        try {
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

    async postHouse(data) {
      try {
        const response = await fetch(baseAPIUrl, {
          method: 'POST',
          body: data,
          headers: APIkey
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
        const response = await fetch(`${baseAPIUrl}/${houseId}/upload`, {
          method: 'POST',
          body: img,
          headers: APIkey
        })
        await this.updateHousesStore(houseId)
        return response
      } catch (error) {
        return error
      }
    },

    async editHouse(data, houseId) {
      try {
        const response = await fetch(`${baseAPIUrl}/${houseId}`, {
          method: 'POST',
          body: data,
          headers: APIkey
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
        const response = await fetch(`${baseAPIUrl}/${houseId}`, {
          method: 'DELETE',
          headers: APIkey
        })
        this.houses = this.houses.filter((house) => house.id !== +houseId)
        return response
      } catch (error) {
        return error
      }
    }
  }
})
