const express = require('express')
const router = express.Router()
const instructors = require('../controllers/Instructors.controller')

//TODO: Add Create, Update, Delete
router.get('/', instructors.get)

router.post('/', instructors.post)

router.delete('/:id', instructors.remove)

router.get('/ids', instructors.getIds)

router.get('/rows', instructors.getRows)

module.exports = router
