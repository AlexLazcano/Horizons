const studentCountries = require('../services/studentCountries.service')

const get = async (req, res) => {
    try {
        const result = await studentCountries.getStudentCountries()

        res.json(result)
    }
    catch (err) {
        console.error(err)
    }
}

const post = async (req, res) => {
    try {
        const result = await studentCountries.createStudentCountry(req.body)

        res.json(result)
    }
    catch (err) {
        console.error(err)
    }
}

const remove = async (req, res) => {
    try {
        const result = await studentCountries.deleteStudentCountry(req.params.id, req.params.id2)

        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

const getRows = async(req, res) => {
    try{
      const result = await studentCountries.getRows()
  
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
    getRows
}