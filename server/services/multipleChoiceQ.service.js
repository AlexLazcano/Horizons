const db = require('./db')

const getMultipleChoiceQs = async () => {
    try{
        const rows = db.query('SELECT * FROM horizons.multiplechoiceq')
        return !rows ? [] : rows
    }
    catch (err){
        console.error(err)
    }
}

const createMultipleChoiceQ = async multipleChoiceQ => {
    try {
        const {CorrectChoice, QuizID, Prompt, Choice1, Choice2, Choice3, Choice4} = multipleChoiceQ
        const res = await db.query(
            'INSERT INTO horizons.multiplechoiceq (CorrectChoice, QuizID, Prompt, Choice1, Choice2, Choice3, Choice4) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [CorrectChoice, QuizID, Prompt, Choice1, Choice2, Choice3, Choice4]
        )

        return {
            message: res.affectedRows ? 'MultipleChoiceQ Created' : 'MultipleChoiceQ Creation Failed'
        }
    }
    catch (err){
        console.error(err)
    }
}

module.exports = {
    getMultipleChoiceQs,
    createMultipleChoiceQ
}


