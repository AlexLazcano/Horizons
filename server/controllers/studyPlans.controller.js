const studyPlans = require('../services/studyPlans.service')

const get = async (req, res) => {
    try {
      const result = await studyPlans.getStudyPlans()
  
      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }
  
  const post = async (req, res) => {
    try {
      const result = await studyPlans.createStudyPlans(req.body)
  
      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }
  
  module.exports = {
    get,
    post
  }