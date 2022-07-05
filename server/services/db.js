const mysql = require('mysql')
require('dotenv').config()


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_Name,
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
