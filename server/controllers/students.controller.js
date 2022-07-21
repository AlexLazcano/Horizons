const students = require('../services/students.service')

//TODO: Add Create, Update, Delete
const get = async (req, res) => {
  try {
    const result = await students.getStudents()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const post = async (req, res) => {
  try {
    const result = await students.createStudent(req.body)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    const result = await students.deleteStudent(req.params.id)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const patch = async (req, res) => {
  try {
    const result = await students.updateStudent(req.params.id, req.body)
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
