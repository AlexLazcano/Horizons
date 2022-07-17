const languages = require('../services/languages.service')

const get = async (req, res) => {
    try{
        const result = await languages.getLanguages()

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const post = async (req, res) => {
    try {
        const result = await languages.createLanguage(req.body)

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