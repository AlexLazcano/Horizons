const avgScorePerInstructor = require('../services/avgScorePerInstructor.service')

const get = async (req, res) => {
  try {
    const result = await avgScorePerInstructor.get()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getHigherThanMin = async (req, res) => {
  try {
    const min = req.params.min
    const result = await avgScorePerInstructor.getHigherThanMin(min)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  get,
  getHigherThanMin
}
