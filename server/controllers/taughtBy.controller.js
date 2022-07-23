const taughtBy = require('../services/taughtBy.service')

const get = async (req, res) => {
    try {
        const result = await taughtBy.getTaughtBys()

        res.json(result)
    }
    catch (err) {
        console.error(err)
    }
}

const post = async (req, res) => {
    try {
        const result = await taughtBy.createTaughtBy(req.body)

        res.json(result)
    }
    catch (err) {
        console.error(err)
    }
}

const remove = async (req, res) => {
    try {
        const result = await taughtBy.deleteTaughtBy(req.params.id, req.params.id2)

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