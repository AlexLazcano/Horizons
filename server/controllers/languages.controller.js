const languages = require('../services/languages.service')

const get = async (req, res) => {
  try {
    const result = await languages.getLanguages()

    res.json(result)
  } catch (err) {
    console.error(err)
  }
}

const post = async (req, res) => {
  try {
    const result = await languages.createLanguage(req.body)

    res.json(result)
  } catch (err) {
    console.error(err)
  }
}
const remove = async (req, res) => {
  try {
    const result = await languages.deleteLanguage(req.params.code)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getIds = async (req, res) => {
  try {
    const result = await languages.getLanguageCodes()

    res.json(result)
  } catch (err) {
    console.error(err)
  }
}

const getRows = async(req, res) => {
  try{
    const result = await languages.getRows()

    res.json(result)
  }
  catch (err){
    console.log(err)
  }
}

module.exports = {
  get,
  post,
  remove,
  getIds,
  getRows
}
