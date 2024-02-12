const express = require('express')
const router = express.Router()
const {CityController,AirportController,FlightController} = require('../../controllers/index')
router.post('/city',CityController.createCity)
router.delete('/city/:id',CityController.deleteCity)
router.get('/city/:id',CityController.getCity)
router.patch('/city/:id',CityController.updateCity)
router.get('/city',CityController.getAllCity)
router.post('/airport',AirportController.createAirport)
router.delete('/airport/:id',AirportController.deleteAirport)
router.get('/airport/:id',AirportController.getAirport)
router.patch('/airport/:id',AirportController.updateAirport)
router.get('/airport',AirportController.getAllAirport)
router.post('/flights',FlightController.createFlight)
router.get('/getflights',FlightController.getAllFlights)


module.exports = router