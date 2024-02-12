const { AirplaneRepository, FlightsRepository } = require('../repositories')

class FlightsService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository()
        this.flightsRepository = new FlightsRepository()

    }
    async createFlight(data) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            console.log(airplane);
            const flight = await this.flightsRepository.createFlight({ ...data, totalSeats: airplane.capacity })
            return flight

        } catch (error) {
            throw error
        }

    }
    async getAllFlights(data) {
        try {

            const flight = await this.flightsRepository.getAllFlights(data)
          
            return flight

        } catch (error) {
            throw error
        }

    }
}
module.exports = FlightsService;