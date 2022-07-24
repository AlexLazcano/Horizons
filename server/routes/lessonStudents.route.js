const express = require('express')
const router = express.Router()
const lessonStudents = require('../controllers/lessonStudents.controller')

//TODO: Add Create, Update, Delete
router.get('/', lessonStudents.get)

router.post('/', lessonStudents.post)

router.delete('/:id/:id2', lessonStudents.remove)

router.patch('/:SID/:LID', lessonStudents.patch)

router.get('/rows', lessonStudents.getRows)

module.exports = router
