const express = require('express')
const app = express()

const students = require('./routes/students.route')
const languages = require('./routes/languages.route')
const quizzes = require('./routes/quizzes.route')
const cors = require('cors')

require('dotenv').config()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001

app.use('/students', students)

app.use('/languages', languages)

app.use('/quizzes', quizzes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
