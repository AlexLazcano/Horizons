const express = require('express')
const router = express.Router()
const quizzes = require('../controllers/quizzes.controller')

//TODO: Add Create, Update, Delete
router.get('/', quizzes.get)

router.post('/', quizzes.post)


module.exports = router