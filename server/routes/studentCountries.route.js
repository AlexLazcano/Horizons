const express = require('express')
const router = express.Router()
const studentCountries = require('../controllers/studentCountries.controller')

//TODO: Add Create, Update, Delete
router.get('/', studentCountries.get)

router.post('/', studentCountries.post)

//router.delete('/:id', quizzes.remove)


module.exports = router