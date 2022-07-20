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

module.exports = {
    get,
    post
}