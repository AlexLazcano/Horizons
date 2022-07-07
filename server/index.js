const express = require('express')
const app = express()
const db = require('./services/db')
const cors = require('cors')

require('dotenv').config()
app.use(cors())

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  console.log(db);
  db.query('SELECT * FROM customer', (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results)
      console.log(results)
    }
  })
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/course", (req, res) => {
  db.query('SELECT * FROM customer', (err, results)=>{
    if(err) {
      console.log(err)
    }
    else{
      res.send(results)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
