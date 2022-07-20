const express = require('express')
const router = express.Router()
const shortAnswerQs = require('../controllers/shortAnswerQ.controller')

//TODO: Add Create, Update, Delete
router.get('/', shortAnswerQs.get)

router.post('/', shortAnswerQs.post)


module.exports = router