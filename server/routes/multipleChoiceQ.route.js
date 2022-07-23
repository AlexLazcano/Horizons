const express = require('express')
const router = express.Router()
const multipleChoiceQs = require('../controllers/multipleChoiceQ.controller')

//TODO: Add Create, Update, Delete
router.get('/', multipleChoiceQs.get)

router.post('/', multipleChoiceQs.post)

router.delete('/:id', multipleChoiceQs.remove)

router.patch('/:id', multipleChoiceQs.patch)

router.get('/ids', multipleChoiceQs.getIds)


module.exports = router