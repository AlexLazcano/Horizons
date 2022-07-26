const express = require('express')
const router = express.Router()
const instructorsKnowLanguage = require('../controllers/instructorsKnowLanguage.controller')

router.get('/', instructorsKnowLanguage.get)

router.post('/', instructorsKnowLanguage.post)

router.delete('/:IID/:LanguageCode', instructorsKnowLanguage.remove)

router.patch('/:IID/:LanguageCode', instructorsKnowLanguage.patch)

router.get('/rows', instructorsKnowLanguage.getRows)

module.exports = router
