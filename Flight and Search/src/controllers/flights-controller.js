const { log } = require('winston');
const { FlightsService } = require('../services/index');
const flightService = new FlightsService()
const createFlight = async (req, res) => {
    try {
        console.log(req.body);
        const flight = await flightService.createFlight(req.body)
        console.log(flight);
        res.status(201).json(flight);

    } catch (error) {
        // console.error('Error creating city:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}
const getAllFlights = async (req, res) => {
    try {
        const reqs = {...req.
            query,...req.body};
            console.log(reqs);
        const flight = await flightService.getAllFlights(reqs) 
        console.log(flight);
        res.status(201).json(flight);

    } catch (error) {
        // console.error('Error creating city:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}
module.exports = { createFlight,getAllFlights }
