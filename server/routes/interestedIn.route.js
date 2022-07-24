const express = require('express')
const router = express.Router()
const interestedIn = require('../controllers/interestedIn.controller')

router.get('/', interestedIn.get)

router.post('/', interestedIn.post)

router.delete('/:SID/:LanguageCode', interestedIn.remove)

router.patch('/:SID/:LanguageCode', interestedIn.patch)

router.get('/rows', interestedIn.getRows)

module.exports = router