const express = require('express')
const app = express()

const students = require('./routes/students.route')
const instructors = require('./routes/instructors.route')
const languages = require('./routes/languages.route')
const countries = require('./routes/countries.route')
const studyplans = require('./routes/studyPlans.route')
const groups = require('./routes/groups.route')
const lessons = require('./routes/lessons.route')
const quizzes = require('./routes/quizzes.route')
const multipleChoiceQs = require('./routes/multipleChoiceQ.route')
const fillBlankQs = require('./routes/fillBlankQ.route')
const shortAnswerQs = require('./routes/shortAnswerQ.route')
const studentCountries = require('./routes/studentCountries.route')
const taughtBy = require('./routes/taughtBy.route')
const listeningQs = require('./routes/listeningQ.route')
const lessonsContainStudents = require('./routes/lessonStudents.route')


const cors = require('cors')

require('dotenv').config()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001

app.use('/students', students)
app.use('/instructors', instructors)
app.use('/languages', languages)
app.use('/countries', countries)
app.use('/studyplans', studyplans)
app.use('/groups', groups)
app.use('/lessons', lessons)
app.use('/quizzes', quizzes)
app.use('/multipleChoiceQ', multipleChoiceQs)
app.use('/fillBlankQ', fillBlankQs)
app.use('/shortAnswerQ', shortAnswerQs)
app.use('/studentsincountries', studentCountries)
app.use('/quizzes', quizzes)
app.use('/listeningQ', listeningQs)
app.use('/taughtby', taughtBy)
app.use('/lessonscontainstudents', lessonsContainStudents)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
