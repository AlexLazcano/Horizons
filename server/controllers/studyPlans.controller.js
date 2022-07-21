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
  
  module.exports = {
    get,
    post
  }