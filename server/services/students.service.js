const db = require('../services/db')

const getStudents = async () => {
  try {
    const rows = db.query('SELECT * FROM students')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createStudent = async student => {
  try {
    const result = await db.query('INSERT INTO students Values', student)
    return {
      message: result.rowsAffected ? 'Student created' : 'Student not created'
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getStudents
}
