const groups = require('../services/groups.service')

const get = async (req, res) => {
    try{
        const result = await groups.getGroups()

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const post = async (req, res) => {
    try {
        const result = await groups.createGroup(req.body)

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const remove = async (req, res) => {
    try {
      const result = await groups.deleteGroup(req.params.id)
  
      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }
  
  const patch = async (req, res) => {
    try {
      const result = await groups.updateGroup(req.params.id, req.body)
      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }
  
  const getIds = async (req, res) => {
    try {
      const result = await groups.getGIDs()
  
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