const listeningqs = require('../services/listeningQ.service')

const get = async (req, res) => {
    try{
        const result = await listeningqs.getListeningQs()

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const post = async (req, res) => {
    try {
        const result = await listeningqs.createListeningQ(req.body)

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}
const remove = async (req, res) => {
    try {
      const result = await listeningqs.deleteListeningQ(req.params.id)
  
      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }

module.exports = {
    get,
    post,
    remove
}