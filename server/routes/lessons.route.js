const express = require('express')
const router = express.Router()
const lessons = require('../controllers/lessons.controller')

//TODO: Add Create, Update, Delete
router.get('/', lessons.get)

router.post('/', lessons.post)

router.delete('/:id', lessons.remove)

router.patch('/:id', lessons.patch)

router.get('/ids', lessons.getIDs)

module.exports = router