const express = require('express')
const router = express.Router()
const studentsTakeQuizzes = require('../controllers/studentsTakesQuizzes.controller')

router.get('/', studentsTakeQuizzes.get)
router.post('/', studentsTakeQuizzes.post)
router.delete('/:SID/:QuizID', studentsTakeQuizzes.remove)
router.patch('/:SID/:QuizID', studentsTakeQuizzes.patch)
router.get('/rows', studentsTakeQuizzes.getRows)

module.exports = router