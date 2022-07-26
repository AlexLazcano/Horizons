const instructorKnowLanguage = require('../services/instructorKnowLanguage.service')

const get = async (req, res) => {
  try {
    const result = await instructorKnowLanguage.getInstructorKnowLanguage()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const post = async (req, res) => {
  try {
    const result = await instructorKnowLanguage.createInstructorKnowLanguage(req.body)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    const result = await instructorKnowLanguage.deleteInstructorKnowLanguage(
      req.params.IID,
      req.params.LanguageCode
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const patch = async (req, res) => {
  try {
    const result = await instructorKnowLanguage.updateInstructorKnowLanguage(
      req.params.IID,
      req.params.LanguageCode,
      req.body.newLanguageCode
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getRows = async (req, res) => {
  try {
    const result = await instructorKnowLanguage.getRows()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  get,
  post,
  remove,
  patch,
  getRows
}
