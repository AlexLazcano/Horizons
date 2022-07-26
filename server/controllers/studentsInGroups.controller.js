const studentsInGroups = require('../services/studentsInGroups.service')

const get = async (req, res) => {
  try {
    const result = await studentsInGroups.getStudentsInGroups()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const post = async (req, res) => {
  try {
    const result = await studentsInGroups.createStudentsInGroups(req.body)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    const result = await studentsInGroups.deleteStudentsInGroups(
      req.params.SID,
      req.params.GID
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const patch = async (req, res) => {
  try {
    const result = await studentsInGroups.updateStudentInGroups(
      req.params.SID,
      req.params.GID,
      req.body.newGID
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getRows = async (req, res) => {
  try {
    const result = await studentsInGroups.getRows()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}
const divide = async (req, res) => {
  try {
    const result = await studentsInGroups.divide()

    const edited = result.map(row => ({
      SID: row.SID,
      GID: 'In All Groups'
    }))

    res.json(edited)
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
  divide
}
