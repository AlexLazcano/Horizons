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

const getIds = async (req, res) => {
  try {
    const result = await students.getSIDs()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getRows = async (req, res) => {
  try {
    const result = await students.getRows()

    res.json(result)
  } catch (err) {
    console.log(err)
  }
}

const getProjections = async (req, res) => {
  console.log('getProjections', req.query)
  try {
    const { SID, FirstName, LastName, BirthDate, Timezone } = req.query
    const result = await students.getProjections(
      SID == 'true',
      FirstName == 'true',
      LastName == 'true',
      BirthDate == 'true',
      Timezone == 'true'
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
  patch,
  getIds,
  getRows,
  getProjections
}
