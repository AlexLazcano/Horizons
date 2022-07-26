const avgScorePerInstructor = require('../services/avgScorePerInstructor.service')

const get = async (req, res) => {
  try {
    const result = await avgScorePerInstructor.get()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  get
}
