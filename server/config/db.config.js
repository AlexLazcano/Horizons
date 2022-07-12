require('dotenv').config('../.env')

const db = {
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_Name,
  port: 3306
}

module.exports = db
