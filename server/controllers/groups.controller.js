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

module.exports = {
    get,
    post
} 