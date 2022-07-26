const express = require('express')
const router = express.Router()
const avgScorePerInstructor = require('../controllers/avgScorePerInstructor.controller')

router.get('/', avgScorePerInstructor.get)

router.get('/:min', avgScorePerInstructor.getHigherThanMin)

module.exports = router
