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

const deleteMultipleChoiceQ = async id => {
    try {
            const result = await db.query('DELETE FROM horizons.multiplechoiceq WHERE QID = ?', [id])
        return {
            message: result.affectedRows ? 'MultipleChoiceQ deleted' : 'MultipleChoiceQ not deleted'
      }
    } catch (error) {
        console.log(error)
    }
  }
  const updateMultipleChoiceQ = async (id, multipleChoiceQ) => {
    try {
        const { CorrectChoice, QuizID, Prompt, Choice1, Choice2, Choice3, Choice4 } = multipleChoiceQ
        const result = await db.query(
            'UPDATE horizons.multiplechoiceq SET CorrectChoice = ?, QuizID = ?, Prompt = ?, Choice1 = ?, Choice2 = ?, Choice3 = ?,Choice4 = ? WHERE QID = ?',
            [CorrectChoice, QuizID, Prompt, Choice1, Choice2, Choice3, Choice4, id]
        )
      return {
            message: result.affectedRows ? 'MultipleChoiceQ updated' : 'MultipleChoiceQ not updated',
            status: result.affectedRows ? 200 : 400
      }
    } catch (error) {
        console.log(error)
    }
  }
  
  const getQIDs = async () => {
    try {
        const rows = db.query('SELECT QID FROM horizons.multiplechoiceq')
        return !rows ? [] : rows
    } catch (error) {
        console.log(error)
    }
  }

module.exports = {
    getMultipleChoiceQs,
    createMultipleChoiceQ,
    deleteMultipleChoiceQ,
    updateMultipleChoiceQ,
    getQIDs


}


