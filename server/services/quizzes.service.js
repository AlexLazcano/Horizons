const db = require('./db')

const getQuizzes = async () => {
  try {
    const rows = db.query('SELECT * FROM quizzes')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createQuiz = async quiz => {
  console.log('creating quiz', quiz)
  try {
    const { LanguageCode, IID, DateCreated, DueDate } = quiz
    const result = await db.query(
      'INSERT INTO quizzes( LanguageCode, IID, DateCreated, DueDate) VALUES (?, ?, ?, ?)',
      [LanguageCode, IID, Date(), DueDate]
    )

    return {
      message: result.affectedRows ? 'Quiz created' : 'Quiz creation failed'
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getQuizzes,
  createQuiz
}
