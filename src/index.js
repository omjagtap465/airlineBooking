const express = require('express')
const apiRoutes = require('./routes')
const app = express()
const { ServerConfig, Logger } = require('./configs')
console.log(ServerConfig.PORT);
app.use('/api', apiRoutes)
app.listen(ServerConfig.PORT, (req, res) => {
    console.log(`Sucessfully started the server on ${ServerConfig.PORT}`);
    Logger.info("Succesfully Started the Server")
})