const express = require('express')
const router = express.Router()
const countries = require('../controllers/countries.controller')

//TODO: Add Create, Update, Delete
router.get('/', countries.get)

router.post('/', countries.post)

router.delete('/:id', countries.remove)

router.patch('/:id', countries.patch)

router.get('/ids', countries.getIds)

router.get('/rows', countries.getRows)

module.exports = router