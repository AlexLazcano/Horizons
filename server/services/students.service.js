const db = require('./db')

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
    console.log('creating student', student)

    const { FirstName, LastName, BirthDate, Timezone } = student
    const result = await db.query(
      'INSERT INTO students (FirstName, LastName, BirthDate, Timezone) VALUES (?, ?, ?, ?)',
      [FirstName, LastName, BirthDate, Timezone]
    )

    return {
      message: result.affectedRows ? 'Student created' : 'Student not created'
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getStudents,
  createStudent
}
