const {Airport}  = require('../models/index')
const Sequelize = require('sequelize');

class AirportRepository {
    async createAirport(data) {
        try {

            const airport = await Airport.create({
                name: data.name,
                address: data.address,
                cityId: data.cityId,
            })
            return airport
        } catch (error) {
            throw error
        }
    }
    async UpdateAirport(id, data) {
        try {
            console.log(id, data);

            const airport = await Airport.findByPk(id)
            airport.name = data.name 
            airport.address= data.address 
            airport.cityId= data.cityId 
            await airport.save()
            return airport
        } catch (error) {
            throw error
        }
    }
    async getAirport(id) {
        try {

            const airport = await Airport.findByPk(id)
            return airport
        } catch (error) {
            throw error
        }
    }
    async deleteAirport(id) {
        try {

            const airport = await Airport.destroy({
                where: {
                    id: id
                },
                returning: true,
            });
        } catch (error) {
            throw error
        }
    }
    async getallAirports(name) {
        try {
            console.log(name);
            if (name) {

                const airports = await Airport.findAll({
                    where: {
                        name: {
                            [Sequelize.Op.like]: `${name}%`
                        }
                    },

                });
                return airports;
            }

        } catch (error) {
            throw error
        }
    }
}
module.exports = AirportRepository