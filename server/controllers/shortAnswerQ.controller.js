const shortAnswerQs = require('../services/shortAnswerQ.service')

const get = async (req, res) => {
    try{
        const result = await shortAnswerQs.getShortAnswerQs()

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const post = async (req, res) => {
    try {
        const result = await shortAnswerQs.createShortAnswerQ(req.body)

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const remove = async (req, res) => {
    try {
        const result = await shortAnswerQs.deleteShortAnswerQ(req.params.id)
  
        res.json(result)
    }
    catch (error) {
        console.log(error)
    }
  }

module.exports = {
    get,
    post,
    remove
}