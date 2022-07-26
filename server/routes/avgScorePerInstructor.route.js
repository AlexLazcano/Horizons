const express = require('express')
const router = express.Router()
const avgScorePerInstructor = require('../controllers/avgScorePerInstructor.controller')

router.get('/', avgScorePerInstructor.get)

module.exports = router
