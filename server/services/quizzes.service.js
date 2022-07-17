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
  try {
    const { QuizID, LanguageCode, IID, DateCreated, DueDate } = student
    const result = await db.query(
      'INSERT INTO `quizzes`(`QuizID`, `LanguageCode`, `IID`, `DateCreated`, `DueDate`) VALUES (?, ?, ?, ?, ?)',
      [QuizID, LanguageCode, IID, Date(), DueDate]
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
