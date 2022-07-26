const db = require('./db')

const getStudentsConnectedWith = async () => {
  try {
    const rows = db.query('SELECT * FROM students_connected_with')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createStudentsConnectedWith = async studentsConnectedWith => {
  try {
    console.log('creating students_connected_with', studentsConnectedWith)

    const { SIDA, SIDB } = studentsConnectedWith
    const result = await db.query(
      'INSERT INTO students_connected_with (SIDA, SIDB) VALUES (?, ?)',
      [SIDA, SIDB]
    )

    return {
      message: result.affectedRows
        ? 'StudentsConnectedWith created'
        : 'StudentsConnectedWith not created'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteStudentConnectedWith = async (SIDA, SIDB) => {
  try {
    const result = await db.query(
      'DELETE FROM students_connected_with WHERE SIDA = ? AND SIDB = ?',
      [SIDA, SIDB]
    )
    return {
      message: result.affectedRows
        ? 'StudentsConnectedWith deleted'
        : 'StudentsConnectedWith not deleted'
    }
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM students_connected_with')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
    getStudentsConnectedWith,
    createStudentsConnectedWith,
    deleteStudentConnectedWith,
    getRows
}
