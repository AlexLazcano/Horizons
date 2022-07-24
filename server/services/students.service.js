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

const deleteStudent = async id => {
  try {
    const result = await db.query('DELETE FROM students WHERE SID = ?', [id])
    return {
      message: result.affectedRows ? 'Student deleted' : 'Student not deleted'
    }
  } catch (error) {
    console.log(error)
  }
}
const updateStudent = async (id, student) => {
  try {
    const { FirstName, LastName, BirthDate, Timezone } = student
    const result = await db.query(
      'UPDATE students SET FirstName = ?, LastName = ?, BirthDate = ?, Timezone = ? WHERE SID = ?',
      [FirstName, LastName, BirthDate, Timezone, id]
    )
    return {
      message: result.affectedRows ? 'Student updated' : 'Student not updated',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}

const getSIDs = async () => {
  try {
    const rows = db.query('SELECT SID FROM students')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM students')
    return !rows ? [] : rows
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = {
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
  getSIDs,
  getRows
}
