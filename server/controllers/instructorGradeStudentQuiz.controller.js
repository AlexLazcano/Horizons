const instructorGradeStudentQuiz = require('../services/instructorGradeStudentQuiz.service')

const get = async (req, res) => {
  try {
    const result =
      await instructorGradeStudentQuiz.getInstructorGradeStudentQuiz()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const post = async (req, res) => {
  try {
    const result =
      await instructorGradeStudentQuiz.createInstructorGradeStudentQuiz(
        req.body
      )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    const result =
      await instructorGradeStudentQuiz.deleteInstructorGradeStudentQuiz(
        req.params.SID,
        req.params.IID,
        req.params.QuizID,
        req.params.Score
      )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const patch = async (req, res) => {
  try {
    const result =
      await instructorGradeStudentQuiz.updateInstructorGradeStudentQuiz(
        req.params.SID,
        req.params.IID,
        req.params.QuizID,
        req.body.newScore
      )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getRows = async (req, res) => {
  try {
    const result = await instructorGradeStudentQuiz.getRows()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const select = async (req, res) => {
  try {
    const result = await instructorGradeStudentQuiz.select(
      req.params.min,
      req.params.max
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  get,
  post,
  remove,
  patch,
  getRows,
  select
}
