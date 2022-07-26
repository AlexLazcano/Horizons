const express = require('express')
const router = express.Router()
const studentCountries = require('../controllers/studentJoinCountries.controller')

router.get('/', studentCountries.get)

module.exports = router
