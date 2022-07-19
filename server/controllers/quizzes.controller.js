const quizzes = require('../services/quizzes.service')

const get = async (req, res) => {
    try{
        const result = await quizzes.getQuizzes()

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const post = async (req, res) => {
    try {
        const result = await quizzes.createQuiz(req.body)

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