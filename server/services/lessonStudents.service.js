const db = require('./db')

const getLessonStudents = async () => {
  try {
    const rows = db.query('SELECT * FROM lessons_contain_students')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createLessonStudent = async student_in_lesson => {
  console.log('creating lesson student relationship', student_in_lesson)
  try {
    const { SID, LID } = student_in_lesson

    const result = await db.query(
      'INSERT INTO lessons_contain_students( SID, LID) VALUES (?, ?)',
      [SID, LID]
    )

    return {
      message: result.affectedRows
        ? 'Relation created'
        : 'Relation creation failed'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteLessonStudent = async (id, id2) => {
  try {
    const result = await db.query(
      'DELETE FROM lessons_contain_students WHERE SID = ? AND LID = ?',
      [id, id2]
    )
    return {
      message: result.affectedRows
        ? 'Relation deleted'
        : 'Relation deletion failed'
    }
  } catch (error) {
    console.log(error)
  }
}

const updateLessonStudent = async (SID, LID, data) => {
  try {
    const newLID = data.LID
    const result = await db.query(
      'UPDATE lessons_contain_students SET LID = ? WHERE SID = ? AND LID = ?',
      [newLID, SID, LID]
    )
    return {
      message: result.affectedRows
        ? 'Relation updated'
        : 'Relation update failed'
    }
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query(
      'SELECT COUNT(*) AS rowCount FROM lessons_contain_students'
    )
    return !rows ? [] : rows
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getLessonStudents,
  createLessonStudent,
  deleteLessonStudent,
  getRows,
  updateLessonStudent
}
