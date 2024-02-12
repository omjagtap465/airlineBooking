
const{Airplane} = require('../models/index')
class AirplaneRepository {
    async getAirplane(id) {
        try {

            const Airplanes = await Airplane.findByPk(id)
            return Airplanes
        } catch (error) {
            throw error
        }
    }
}
module.exports = AirplaneRepository