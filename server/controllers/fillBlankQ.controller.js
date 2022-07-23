const fillBlankQs = require('../services/fillBlankQ.service')

const get = async (req, res) => {
    try{
        const result = await fillBlankQs.getFillBlankQs()

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const post = async (req, res) => {
    try {
        const result = await fillBlankQs.createFillBlankQ(req.body)

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const remove = async (req, res) => {
    try {
      const result = await fillBlankQs.deleteFillBlankQ(req.params.id)
  
      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }
  
  const patch = async (req, res) => {
    try {
      const result = await fillBlankQs.updateFillBlankQs(req.params.id, req.body)
      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }
  
  const getIds = async (req, res) => {
    try {
      const result = await fillBlankQs.getQIDs()
  
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