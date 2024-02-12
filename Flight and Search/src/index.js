const express = require('express')
const apiRoutes = require('./routes')
const bodyParser = require('body-parser');
const app = express()
const City = require('./models/index')
const { ServerConfig, Logger } = require('./config');
const CityRepositories = require('./repositories/city-repository');
const city = new CityRepositories()
console.log(ServerConfig.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes)
app.listen(ServerConfig.PORT, (req, res) => {
    
    console.log(`Sucessfully started the server on ${ServerConfig.PORT}`);
    Logger.info("Succesfully Started the Server")
})