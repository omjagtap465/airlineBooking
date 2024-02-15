
const { log } = require('winston')
const { Flights } = require('../models/index')
const Sequelize = require('sequelize');
class FlightsRepository {
    async #filterflights(data) {

        let filteredData = {}
        if (data.arrivalAirportId) {
            filteredData.arrivalAirportId = data.arrivalAirportId
        }
        if (data.departureAirportId) {
            filteredData.departureAirportId = data.departureAirportId
        }
        let pricesFilter = {}
        let count = 0
        if (data.minPrice || data.maxPrice) {
        if (data.minPrice && data.maxPrice) {
            pricesFilter[Sequelize.Op.between] = [data.minPrice, data.maxPrice];
            count++
        } else if (data.minPrice) {
            count++
            pricesFilter[Sequelize.Op.gte] = data.minPrice; // If only minPrice is provided
        } else if (data.maxPrice) {
            pricesFilter[Sequelize.Op.lte] = data.maxPrice; // If only maxPrice is provided
            count++
        }
        filteredData.price = pricesFilter;

    }
      


        return filteredData
    }
    async createFlight(data) {
        try {
            console.log(data)
            const flightDetails = {
                flightNumber: data.flightNumber,
                airplaneId: data.airplaneId,
                departureAirportId: data.departureAirportId,
                arrivalAirportId: data.arrivalAirportId,
                arrivalTime: data.arrivalTime,
                departureTime: data.departureTime,
                price: data.price,

                totalSeats: data.totalSeats,

            }
            console.log("This is flight ", flightDetails);
            const flight = await Flights.create(flightDetails)
            console.log("This is s", flight);
            return flight

        } catch (error) {
            throw error
        }

    }
    async getAllFlights(data) {
        const query = await this.#filterflights(data)
        console.log("Query", query);
        const flight = await Flights.findAll({
            where: query
        })
        console.log(flight);
        return flight

    }
   async  getFlightsById(id){
    const flight = await Flights.findByPk(id)
    return flight;
   }
   async updateFlight(id,data) {
    try {
        console.log(id,data);
        const flight  = await Flights.findByPk(id)
        if(data.totalSeats)
        {
            flight.totalSeats = data.totalSeats
        }
        await flight.save()
        console.log(flight);
        return flight
    } catch (error) {

    }

}
}
module.exports = FlightsRepository