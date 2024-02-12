const { log } = require('winston');
const { AirportService } = require('../services/index'); // Adjust the path accordingly


const airportService = new AirportService();

const createAirport = async (req, res) => {
  try {
    console.log(req.body.name);
    const Airport = await airportService.createAirport(req.body);

    res.status(201).json(Airport);
  } catch (error) {
    // console.error('Error creating Airport:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const updateAirport = async (req, res) => {
  try {
    const { id } = req.params;
    const Airport = await airportService.updateAirport(id, req.query);
    console.log(Airport);
    res.status(201).json(Airport); // Assuming no content is returned after a successful update
  } catch (error) {
    console.error('Error updating Airport:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteAirport = async (req, res) => {
  try {
    const { id } = req.params;
    await airportService.deleteAirport(id);
    res.status(204).end(); // Assuming no content is returned after a successful delete
  } catch (error) {
    console.error('Error deleting Airport:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getAirport = async (req, res) => {
  try {
    const { id } = req.params;
    const Airport = await airportService.getAirport(id);
    res.status(200).json(Airport);
  } catch (error) {
    console.error('Error getting Airport:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const getAllAirport = async (req, res) => {
  try {
    const {name} = req.query
    const Airport = await airportService.getAllAirport(name);
    console.log(Airport);
    res.status(200).json({
       data: Airport ,
       message:"All Airport are Fetched",
       success:true,
       err:{}
      });
  } catch (error) {
    console.error('Error getting Airport:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = {
  createAirport,
  getAirport, deleteAirport, updateAirport, getAllAirport
};
