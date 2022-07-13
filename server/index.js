const express = require('express')
const app = express()
const db = require('./services/db')
const students = require('./routes/students.route')
const cors = require('cors')

require('dotenv').config()
app.use(cors())

const PORT = process.env.PORT || 3001

app.use('/students', students)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
