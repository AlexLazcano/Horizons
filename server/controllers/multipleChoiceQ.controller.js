const multipleChoiceQs = require('../services/multipleChoiceQ.service')

const get = async (req, res) => {
    try{
        const result = await multipleChoiceQs.getMultipleChoiceQs()

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const post = async (req, res) => {
    try {
        const result = await multipleChoiceQs.createMultipleChoiceQ(req.body)

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const remove = async (req, res) => {
    try {
      const result = await multipleChoiceQs.deleteMultipleChoiceQ(req.params.id)
  
      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }
  
  const patch = async (req, res) => {
    try {
      const result = await multipleChoiceQs.updateMultipleChoiceQ(req.params.id, req.body)
      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }
  
  const getIds = async (req, res) => {
    try {
      const result = await multipleChoiceQs.getQIDs()
  
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
    getIds
  }