const express = require('express')
const router = express.Router()
const multipleChoiceQs = require('../controllers/multipleChoiceQ.controller')

//TODO: Add Create, Update, Delete
router.get('/', multipleChoiceQs.get)

router.post('/', multipleChoiceQs.post)


module.exports = router