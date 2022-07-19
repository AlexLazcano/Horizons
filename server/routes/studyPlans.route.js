const express = require('express')
const router = express.Router()
const studyPlans = require('../controllers/studyPlans.controller')

//TODO: Add Create, Update, Delete
router.get('/', studyPlans.get)

router.post('/', studyPlans.post)


module.exports = router