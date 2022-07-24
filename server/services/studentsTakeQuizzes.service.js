const db = require('./db')

const getStudentsTakeQuizzes = async () => {
  try {
    const rows = db.query('SELECT * FROM students_take_quizzes')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createStudentTakeQuizzes = async studentTakeQuizzes => {
  try {
    console.log('creating students_take_quizzes', studentTakeQuizzes)

    const { SID, QuizID } = studentTakeQuizzes
    const result = await db.query(
      'INSERT INTO students_take_quizzes (SID, QuizID) VALUES (?, ?)',
      [SID, QuizID]
    )

    return {
      message: result.affectedRows
        ? 'StudentTakeQuizzes created'
        : 'StudentTakeQuizzes not created'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteStudentsTakeQuizzes = async (SID, QuizID) => {
  try {
    const result = await db.query(
      'DELETE FROM students_take_quizzes WHERE SID = ? AND QuizID = ?',
      [SID, QuizID]
    )
    return {
      message: result.affectedRows
        ? 'StudentTakeQuizzes deleted'
        : 'StudentTakeQuizzes not deleted'
    }
  } catch (error) {
    console.log(error)
  }
}
const updateStudentTakeQuizzes = async (SID, QuizID, newQuizID) => {
  try {
    const result = await db.query(
      'UPDATE students_take_quizzes SET SID = ?, QuizID = ? WHERE SID = ? AND QuizID = ?',
      [SID, newQuizID, SID, QuizID]
    )
    return {
      message: result.affectedRows
        ? 'StudentTakeQuizzes updated'
        : 'StudentTakeQuizzes not updated',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query(
      'SELECT COUNT(*) AS rowCount FROM students_take_quizzes'
    )
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getStudentsTakeQuizzes,
  createStudentTakeQuizzes,
  deleteStudentsTakeQuizzes,
  updateStudentTakeQuizzes,
  getRows
}
