const mysql = require('mysql2/promise')

const dbConfig = require('../config/db.config')

const query = async (sql, params) => {
  const connection = await mysql.createConnection(dbConfig)
  const [results] = await connection.execute(sql, params)
  connection.end()
  return results
}

module.exports = {
  query
}
