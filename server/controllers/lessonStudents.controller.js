const lessonStudents = require('../services/lessonStudents.service')

const get = async (req, res) => {
  try {
    const result = await lessonStudents.getLessonStudents()

    res.json(result)
  } catch (err) {
    console.error(err)
  }
}

const post = async (req, res) => {
  try {
    const result = await lessonStudents.createLessonStudent(req.body)

    res.json(result)
  } catch (err) {
    console.error(err)
  }
}

const remove = async (req, res) => {
  try {
    const result = await lessonStudents.deleteLessonStudent(
      req.params.id,
      req.params.id2
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getRows = async (req, res) => {
  try {
    const result = await lessonStudents.getRows()

    res.json(result)
  } catch (err) {
    console.log(err)
  }
}

const patch = async (req, res) => {
  try {
    const result = await lessonStudents.updateLessonStudent(
      req.params.SID,
      req.params.LID,
      req.body
    )

    res.json(result)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  get,
  post,
  remove,
  getRows,
  patch
}
