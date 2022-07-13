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


module.exports = {
  get
}
