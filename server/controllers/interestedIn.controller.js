const interested_in = require('../services/interestedIn.service')

const get = async (req, res) => {
  try {
    const result = await interested_in.getInterestedIn()

    res.json(result)
  } catch (err) {
    console.error(err)
  }
}

const post = async (req, res) => {
  try {
    const result = await interested_in.createInterestedIn(req.body)

    res.json(result)
  } catch (err) {
    console.error(err)
  }
}

const remove = async (req, res) => {
  try {
    const result = await interested_in.deleteInterestedIn(
      req.params.SID,
      req.params.LanguageCode
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const patch = async (req, res) => {
  try {
    const result = await interested_in.updateInterestedIn(
      req.params.SID,
      req.params.LanguageCode,
      req.body.newLanguageCode,
      req.body.SkillLevel
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getRows = async (req, res) => {
  try {
    const result = await interested_in.getRows()

    res.json(result)
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  get,
  post,
  remove,
  patch,
  getRows
}
