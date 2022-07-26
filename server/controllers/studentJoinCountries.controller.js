const studentJoinCountries = require('../services/studentJoinCountries.service')

const get = async (req, res) => {
  try {
    const result = await studentJoinCountries.getStudentsJoinCountries()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  get
}
