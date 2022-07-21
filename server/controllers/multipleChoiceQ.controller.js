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

module.exports = {
    get,
    post
}