const express = require('express')
const router = express.Router()
const studentsInGroups = require('../controllers/studentsInGroups.controller')

router.get('/', studentsInGroups.get)
router.post('/', studentsInGroups.post)
router.delete('/:SID/:GID', studentsInGroups.remove)
router.patch('/:SID/:GID', studentsInGroups.patch)
router.get('/rows', studentsInGroups.getRows)
router.get('/divide/:GID', studentsInGroups.divide)

module.exports = router
