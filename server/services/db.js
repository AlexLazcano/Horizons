const mysql = require('mysql')
require('dotenv').config()

console.log(process.env.DB_PASSWORD)

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'test1',
  port: 3306
})

connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.message)
    return
  }
  console.log('Connected to database')
})

module.exports = connection
