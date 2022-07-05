const express = require('express')
const app = express()
const db = require('./services/db')
const cors = require('cors')

require('dotenv').config()
app.use(cors())

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.log(err)
    } else {
      console.log(results)
    }
  })
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
