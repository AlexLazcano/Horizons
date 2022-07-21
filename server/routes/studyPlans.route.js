const express = require('express')
const router = express.Router()
const studyplans = require('../controllers/studyPlans.controller')

//TODO: Add Create, Update, Delete
router.get('/', studyplans.get)

router.post('/', studyplans.post)


module.exports = router