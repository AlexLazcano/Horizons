const express = require('express')
const router = express.Router()
const students = require('../controllers/students.controller')

//TODO: Add Create, Update, Delete
router.get('/', students.get)

router.post('/', students.post)

router.delete('/:id', students.remove)

router.patch('/:id', students.patch)

router.get('/ids', students.getIds)

router.get('/rows', students.getRows)

router.get('/projections', students.getProjections)

module.exports = router