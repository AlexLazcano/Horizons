const express = require('express')
const router = express.Router()
const studyplans = require('../controllers/studyPlans.controller')

//TODO: Add Create, Update, Delete
router.get('/', studyplans.get)

router.post('/', studyplans.post)

router.delete('/:id', studyplans.remove)

router.get('/rows', studyplans.getRows)


module.exports = router