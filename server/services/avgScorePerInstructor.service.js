const db = require('./db')

const get = async () => {
  try {
    const rows = db.query(`SELECT instructors.IID as IID,
    FirstName,
    LastName,
    avg_score
FROM instructors
    INNER JOIN (
        SELECT IID,
            AVG(score) AS avg_score
        FROM instructor_grade_student_quiz
        GROUP BY IID
        HAVING AVG(score) > 5
    ) as instructAvg ON instructAvg.IID = instructors.IID;`)
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  get
}
