const { log } = require('winston');
const { CityService } = require('../services/index'); // Adjust the path accordingly


const cityService = new CityService();

const createCity = async (req, res) => {
  try {
    console.log(req.body.name);
    const city = await cityService.createCity(req.body);

    res.status(201).json(city);
  } catch (error) {
    // console.error('Error creating city:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const updateCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await cityService.updateCity(id, req.query);
    console.log(city);
    res.status(201).json(city); // Assuming no content is returned after a successful update
  } catch (error) {
    console.error('Error updating city:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    await cityService.deleteCity(id);
    res.status(204).end(); // Assuming no content is returned after a successful delete
  } catch (error) {
    console.error('Error deleting city:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await cityService.getCity(id);
    res.status(200).json(city);
  } catch (error) {
    console.error('Error getting city:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const getAllCity = async (req, res) => {
  try {
    const {name} = req.query
    const cities = await cityService.getAllCity(name);
    res.status(200).json({
       data: cities ,
       message:"All Cities are Fetched",
       success:true,
       err:{}
      });
  } catch (error) {
    console.error('Error getting city:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = {
  createCity,
  getCity, deleteCity, updateCity, getAllCity
};
