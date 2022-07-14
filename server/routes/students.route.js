const express = require('express')
const router = express.Router()
const students = require('../controllers/students.controller')

//TODO: Add Create, Update, Delete
router.get('/', students.get)

router.post('/', students.post)


module.exports = router