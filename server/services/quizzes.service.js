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
    quiz.DateCreated = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const { LanguageCode, IID, DateCreated, DueDate } = quiz

    const result = await db.query(
      'INSERT INTO horizons.quizzes( LanguageCode, IID, DateCreated, DueDate) VALUES (?, ?, ?, ?)',
      [LanguageCode, IID, DateCreated, DueDate]
    )

    return {
      message: result.affectedRows ? 'Quiz created' : 'Quiz creation failed'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteQuiz = async id => {
  try {
    const result = await db.query('DELETE FROM quizzes WHERE QuizID = ?', [id])
    return {
      message: result.affectedRows ? 'Quiz deleted' : 'Quiz deletion failed'
    }
  } catch (error) {
    console.log(error)
  }
}

const getQuizIds = async () => {
  try {
    const rows = db.query('SELECT QuizID FROM quizzes')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM quizzes')
    return !rows ? [] : rows
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = {
  getQuizzes,
  createQuiz,
  deleteQuiz,
  getQuizIds,
  getRows
}
