const instructorsKnowLanguage = require('../services/instructorsKnowLanguage.service')

const get = async (req, res) => {
  try {
    const result = await instructorsKnowLanguage.getInstructorsKnowLanguage()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const post = async (req, res) => {
  try {
    const result = await instructorsKnowLanguage.createInstructorsKnowLanguage(req.body)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    const result = await instructorsKnowLanguage.deleteInstructorsKnowLanguage(
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
    const result = await instructorsKnowLanguage.updateInstructorsKnowLanguage(
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
    const result = await instructorsKnowLanguage.getRows()

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
