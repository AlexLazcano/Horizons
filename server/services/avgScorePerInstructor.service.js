const db = require('./db')

const get = async () => {
  try {
    const rows = db.query(`SELECT DISTINCT SID, IID
    FROM instructor_grade_student_quiz, 
    WHERE (IID) in (
            SELECT IID
            FROM instructor_grade_student_quiz
            GROUP BY IID
            HAVING AVG(score) > 5
        )`)
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  get
}
