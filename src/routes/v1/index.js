const express = require('express')
const router = express.Router()
const {InfoControllers}= require('../../controllers')

router.get('/info',InfoControllers.info)


module.exports = router