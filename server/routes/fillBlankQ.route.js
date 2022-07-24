const express = require('express')
const router = express.Router()
const fillblankqs = require('../controllers/fillBlankQ.controller')

//TODO: Add Create, Update, Delete
router.get('/', fillblankqs.get)

router.post('/', fillblankqs.post)

router.delete('/:id', fillblankqs.remove)

router.patch('/:id', fillblankqs.patch)

router.get('/ids', fillblankqs.getIds)


module.exports = router