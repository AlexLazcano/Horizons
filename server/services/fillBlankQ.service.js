const db = require('./db')

const getFillBlankQs = async () => {
    try{
        const rows = db.query('SELECT * FROM horizons.fillblankq')
        return !rows ? [] : rows
    }
    catch (err){
        console.error(err)
    }
}

const createFillBlankQ = async fillBlankQ => {
    try {
        const {QuizID, Prompt, Text} = fillBlankQ
        const res = await db.query(
            'INSERT INTO horizons.fillblankq (QuizID, Prompt, Text) VALUES (?, ?, ?)',
            [QuizID, Prompt, Text]
        )

        return {
            message: res.affectedRows
                ? 'FillBlankQ Created' 
                : 'FillBlankQ Creation Failed'
        }
    }
    catch (err){
        console.error(err)
    }
}

const deleteFillBlankQ = async id => {
    try {
            const result = await db.query(
                'DELETE FROM horizons.fillblankq WHERE QID = ?',
                [id]
            )
        return {
            message: result.affectedRows
                ? 'FillBlankQ deleted' 
                : 'FillBlankQ not deleted'
      }
    } catch (error) {
        console.log(error)
    }
  }
  const updateFillBlankQ = async (id, fillBlankQ) => {
    try {
        const {QuizID, Prompt,Text } = fillBlankQ
        const result = await db.query(
            'UPDATE horizons.fillblankq SET QuizID = ?, Prompt = ?, Text = ? WHERE QID = ?',
            [QuizID, Prompt, Text, id]
        )
      return {
            message: result.affectedRows ? 'FillBlankQ updated' : 'FillBlankQ not updated',
            status: result.affectedRows ? 200 : 400
      }
    } catch (error) {
        console.log(error)
    }
  }
  
  const getQIDs = async () => {
    try {
        const rows = db.query('SELECT QID FROM horizons.fillblankq')
        return !rows ? [] : rows
    } catch (error) {
        console.log(error)
    }
  }

module.exports = {
    getFillBlankQs,
    createFillBlankQ,
    deleteFillBlankQ,
    updateFillBlankQ,
    getQIDs


}


