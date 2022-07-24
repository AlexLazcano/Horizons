const studyplans = require('../services/studyPlans.service')

const get = async (req, res) => {
  try {
    const result = await studyplans.getStudyPlans()

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const post = async (req, res) => {
  try {
    const result = await studyplans.createStudyPlans(req.body)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    const result = await studyplans.deleteStudyPlan(req.params.id)

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

const getRows = async(req, res) => {
  try{
    const result = await studyplans.getRows()

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