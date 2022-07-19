const express = require('express')
const router = express.Router()
const instructors = require('../controllers/Instructors.controller')

//TODO: Add Create, Update, Delete
router.get('/', instructors.get)

router.post('/', instructors.post)


module.exports = router 