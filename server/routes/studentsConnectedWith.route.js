const express = require('express')
const router = express.Router()
const studentsConnectedWith = require('../controllers/studentsConnectedWith.controller')

router.get('/', studentsConnectedWith.get)
router.post('/', studentsConnectedWith.post)
router.delete('/:SIDA/:SIDB', studentsConnectedWith.remove)
router.get('/rows', studentsConnectedWith.getRows)

module.exports = router
