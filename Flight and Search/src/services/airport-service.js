const { AirportRepository } = require('../repositories/index');

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport(data) {
    try {
      const Airport = await this.airportRepository.createAirport(data);
      return Airport;
    } catch (error) {
      // Log the error or perform other error handling actions
      throw error;
    }
  }

  async updateAirport(id, data) {
    try {
      const Airport = await this.airportRepository.UpdateAirport(id, data);
      return Airport;
    } catch (error) {
      // Log the error or perform other error handling actions
      throw error;
    }
  }

  async deleteAirport(id) {
    try {
      const response = await this.airportRepository.deleteAirport(id);
      return response;
    } catch (error) {
      // Log the error or perform other error handling actions
      throw error;
    }
  }

  async getAirport(AirportId) {
    try {
      const Airport = await this.airportRepository.getAirport(AirportId);
      return Airport;
    } catch (error) {
      // Log the error or perform other error handling actions
      throw error;
    }
  }
  async getAllAirport(name) {
    try {
      const Airport = await this.airportRepository.getallAirports(name)
      return Airport;
    } catch (error) {
      // Log the error or perform other error handling actions
      throw error;
    }
  }
}

module.exports = AirportService;
