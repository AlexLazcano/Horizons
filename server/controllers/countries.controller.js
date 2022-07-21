const countries = require('../services/countries.service')

//TODO: Add Create, Update, Delete
const get = async (req, res) => {
  try {   
    const result = await countries.getCountries()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const post = async (req, res) => {
  try {
    const result = await countries.createCountry(req.body)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    const result = await countries.deleteCountry(req.params.id)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const patch = async (req, res) => {
  try {
    const result = await countries.updateCountry(req.params.id, req.body)
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  get,
  post,
  remove,
  patch
}
