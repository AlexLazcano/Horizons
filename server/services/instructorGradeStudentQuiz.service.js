const db = require('./db')

const getInstructorGradeStudentQuiz = async () => {
  try {
    const rows = db.query('SELECT * FROM instructor_grade_student_quiz')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createInstructorGradeStudentQuiz = async instructorGradeStudentQuiz => {
  try {
    console.log('creating instructor_grade_student_quiz', instructorGradeStudentQuiz)

    const { SID, IID, QuizID, Score } = instructorGradeStudentQuiz
    const result = await db.query(
      'INSERT INTO instructor_grade_student_quiz (SID, IID, QuizID, Score) VALUES (?, ?, ?, ?)',
      [SID, IID, QuizID, Score]
    )

    return {
      message: result.affectedRows
        ? 'InstructorGradeStudentQuiz created'
        : 'InstructorGradeStudentQuiz not created',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteInstructorGradeStudentQuiz = async (SID, IID, QuizID) => {
  try {
    const result = await db.query(
      'DELETE FROM instructor_grade_student_quiz WHERE SID = ? AND IID = ? AND QuizID = ?',
      [SID, IID, QuizID]
    )
    return {
      message: result.affectedRows
        ? 'InstructorGradeStudentQuiz deleted'
        : 'InstructorGradeStudentQuiz not deleted',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}

const updateInstructorGradeStudentQuiz = async (
  SID,
  IID,
  QuizID,
  //Score
) => {
  try {
    const result = await db.query(
      'UPDATE instructor_grade_student_quiz SET SID = ?, IID = ?, QuizID = ?, Score = ?  WHERE SID = ? AND IID = ? AND QuizID = ?',
      [SID, IID, QuizID, newScore, SID, IID, QuizID ]
    )
    return {
      message: result.affectedRows
        ? 'InstructorGradeStudentQuiz updated'
        : 'InstructorGradeStudentQuiz not updated',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}
const getRows = async () => {
  try {
    const rows = db.query(
      'SELECT COUNT(*) as rowCount FROM instructor_grade_student_quiz'
    )
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
    getInstructorGradeStudentQuiz,
    createInstructorGradeStudentQuiz,
    deleteInstructorGradeStudentQuiz,
    updateInstructorGradeStudentQuiz,
    getRows
}
