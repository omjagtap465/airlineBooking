const airport = require('../models/airport');
const { City } = require('../models/index')
const { Sequelize } = require('sequelize');
const db = require('../models/index')
class CityRepositories {
    async createCity(data) {
        try {

            const city = await City.create({ name: data.name })
            return city
        } catch (error) {
            throw error
        }
    }
    async UpdateCity(id, data) {
        try {
            console.log(id, data);

            const city = await City.findByPk(id)
            city.name = data.name
            await city.save()
            return city
        } catch (error) {
            throw error
        }
    }
    async getCity(cityId) {
        try {

            const city = await City.findByPk(cityId)
            return city
        } catch (error) {
            throw error
        }
    }
    async deleteCity(cityId) {
        try {

            const city = await City.destroy({
                where: {
                    id: cityId
                },
                returning: true,
            });
        } catch (error) {
            throw error
        }
    }
    async getAllCities(name) {
        try {

            if (name) {

                const cities = await City.findAll({
                    where: {
                        name: {
                            [Sequelize.Op.like]: `${name}%`
                        }
                    },

                });
                return cities
            }

        } catch (error) {
            throw error
        }
    }
    
    async getAllAirport(id) {
        try {

            if (id) {
                // db.sequelize.sync({alter:true})
                // Sequelize.db.sync()
                const cities = await City.findAll({
                   
                    
                    
                        where: {
                          cityId: id,
                        },
                  
            
                  });
                  
                return cities
            }

        } catch (error) {
            throw error
        }
    }
}
module.exports = CityRepositories