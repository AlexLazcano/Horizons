const express = require('express')
const router = express.Router()
const instructorGradeStudentQuiz = require('../controllers/instructorGradeStudentQuiz.controller')

router.get('/', instructorGradeStudentQuiz.get)

router.post('/', instructorGradeStudentQuiz.post)

router.delete('/:SID/:IID/:QuizID', instructorGradeStudentQuiz.remove)

router.patch('/:SID/:IID/:QuizID', instructorGradeStudentQuiz.patch)

router.get('/rows', instructorGradeStudentQuiz.getRows)

module.exports = router