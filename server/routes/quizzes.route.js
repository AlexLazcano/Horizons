const express = require('express')
const router = express.Router()
const quizzes = require('../controllers/quizzes.controller')

//TODO: Add Create, Update, Delete
router.get('/', quizzes.get)

router.post('/', quizzes.post)

router.delete('/:id', quizzes.remove)

router.get('/ids', quizzes.getIDs)

router.get('/rows', quizzes.getRows)

module.exports = router