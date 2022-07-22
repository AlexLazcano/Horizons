const db = require('./db')

const getStudentCountries = async () => {
  try {
    const rows = db.query('SELECT * FROM students_in_countries')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createStudentCountry = async student_in_country => {
  console.log('creating student country relationship', student_in_country)
  try {
    const { SID, CountryID } = student_in_country

    const result = await db.query(
      'INSERT INTO students_in_countries( SID, CountryID) VALUES (?, ?)',
      [SID, CountryID]
    )

    return {
      message: result.affectedRows ? 'Relation created' : 'Relation creation failed'
    }
  } catch (error) {
    console.log(error)
  }
}

// const deleteQuiz = async id => {
//   try {
//     const result = await db.query('DELETE FROM quizzes WHERE QuizID = ?', [id])
//     return {
//       message: result.affectedRows ? 'Quiz deleted' : 'Quiz deletion failed'
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

module.exports = {
    getStudentCountries,
    createStudentCountry
  //deleteQuiz
}
