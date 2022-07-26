const studentsConnectedWith = require('../services/studentsConnectedWith.service')

const get = async (req, res) => {
  try {
    const result = await studentsConnectedWith.getStudentsConnectedWith()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const post = async (req, res) => {
  try {
    const result = await studentsConnectedWith.createStudentsConnectedWith(req.body)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    const result = await studentsConnectedWith.deleteStudentConnectedWith(
      req.params.SIDA,
      req.params.SIDB
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getRows = async (req, res) => {
  try {
    const result = await studentsConnectedWith.getRows()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  get,
  post,
  remove, 
  getRows
}
