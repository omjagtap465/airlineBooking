const { CityRepository } = require('../repositories/index');

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(name) {
    try {
      const city = await this.cityRepository.createCity(name);
      return city;
    } catch (error) {
      // Log the error or perform other error handling actions
      throw error;
    }
  }

  async updateCity(id, data) {
    try {
      const city = await this.cityRepository.UpdateCity(id, data);
      return city;
    } catch (error) {
      // Log the error or perform other error handling actions
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      // Log the error or perform other error handling actions
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      // Log the error or perform other error handling actions
      throw error;
    }
  }
  async getAllCity(name) {
    try {
      const city = await this.cityRepository.getAllCities(name)
      return city;
    } catch (error) {
      // Log the error or perform other error handling actions
      throw error;
    }
  }
}

module.exports = CityService;
