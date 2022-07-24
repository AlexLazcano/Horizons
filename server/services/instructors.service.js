const db = require('../services/db')

const getInstructors = async () => {
  try {
    const rows = db.query('SELECT * FROM instructors')
    return !rows ? [] : rows
  } catch (err) {
    console.error(err)
  }
}

const createInstructor = async instructor => {
  try {
    console.log('creating instructor', instructor)

    const { FirstName, LastName, Biography } = instructor
    const result = await db.query(
      'INSERT INTO instructors (FirstName, LastName, Biography) VALUES (?, ?, ?)',
      [FirstName, LastName, Biography]
    )

    return {
      message: result.affectedRows
        ? 'instructor Created'
        : 'instructor creation failed'
    }
  } catch (err) {
    console.error(err)
  }
}
const deleteInstructor = async id => {
  try {
    const result = await db.query('DELETE FROM instructors WHERE IID = ?', [id])
    return {
      message: result.affectedRows ? 'Student deleted' : 'Student not deleted'
    }
  } catch (error) {
    console.log(error)
  }
}

const getIIDs = async () => {
  try {
    const result = await db.query('SELECT IID FROM instructors')
    return result
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM instructors')
    return !rows ? [] : rows
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = {
  getInstructors,
  createInstructor,
  deleteInstructor,
  getIIDs,
  getRows
}
