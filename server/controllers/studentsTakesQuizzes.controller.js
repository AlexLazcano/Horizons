const studentsTakeQuizzes = require('../services/studentsTakeQuizzes.service')
const get = async (req, res) => {
  try {
    const result = await studentsTakeQuizzes.getStudentsTakeQuizzes()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const post = async (req, res) => {
  try {
    const result = await studentsTakeQuizzes.createStudentTakeQuizzes(req.body)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    const result = await studentsTakeQuizzes.deleteStudentsTakeQuizzes(
      req.params.SID,
      req.params.QuizID
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const patch = async (req, res) => {
  try {
    const result = await studentsTakeQuizzes.updateStudentTakeQuizzes(
      req.params.SID,
      req.params.QuizID,
      req.body.newQuizID
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getRows = async (req, res) => {
  try {
    const result = await studentsTakeQuizzes.getRows()

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
  getRows
}
