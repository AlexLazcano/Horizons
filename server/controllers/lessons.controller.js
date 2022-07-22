const lessons = require('../services/lessons.service')

//TODO: Add Create, Update, Delete
const get = async (req, res) => {
  try {
    const result = await lessons.getLessons()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const post = async (req, res) => {
  try {
    const result = await lessons.createLesson(req.body)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    const result = await lessons.deleteLesson(req.params.id)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const patch = async (req, res) => {
  try {
    const result = await lessons.updateLesson(req.params.id, req.body)
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  get,
  post,
  remove,
  patch
}
