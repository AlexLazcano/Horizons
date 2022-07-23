const quizzes = require('../services/quizzes.service')

const get = async (req, res) => {
  try {
    const result = await quizzes.getQuizzes()

    res.json(result)
  } catch (err) {
    console.error(err)
  }
}

const post = async (req, res) => {
  try {
    const result = await quizzes.createQuiz(req.body)

    res.json(result)
  } catch (err) {
    console.error(err)
  }
}

const remove = async (req, res) => {
  try {
    const result = await quizzes.deleteQuiz(req.params.id)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getIDs = async (req, res) => {
  try {
    const result = await quizzes.getQuizIds()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  get,
  post,
  remove,
  getIDs
}
