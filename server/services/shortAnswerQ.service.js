const db = require('./db')

const getShortAnswerQs = async () => {
    try{
        const rows = db.query('SELECT * FROM horizons.shortanswerq')
        return !rows ? [] : rows
    }
    catch (err){
        console.error(err)
    }
}

const createShortAnswerQ = async shortAnswerQ => {
    try {
        const {QuizID, Prompt,Answer} = shortAnswerQ
        const res = await db.query(
            'INSERT INTO horizons.shortanswerq (QuizID, Prompt,Answer) VALUES (?, ?, ?)',
            [QuizID, Prompt,Answer]
        )

        return {
            message: res.affectedRows ? 'shortAnswerQ Created' : 'shortAnswerQ Creation Failed'
        }
    }
    catch (err){
        console.error(err)
    }
}

module.exports = {
    getShortAnswerQs,
    createShortAnswerQ
}


