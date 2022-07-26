const express = require('express')
const router = express.Router()
const instructorKnowLanguage = require('../controllers/instructorKnowLanguage.controller')

router.get('/', instructorKnowLanguage.get)

router.post('/', instructorKnowLanguage.post)

router.delete('/:IID/:LanguageCode', instructorKnowLanguage.remove)

router.patch('/:IID/:LanguageCode', instructorKnowLanguage.patch)

router.get('/rows', instructorKnowLanguage.getRows)

module.exports = router
