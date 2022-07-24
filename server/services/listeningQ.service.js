const db = require('./db')

const getListeningQs = async () => {
  try {
    const rows = db.query('SELECT * FROM listeningq')
    return !rows ? [] : rows
  } catch (err) {
    console.error(err)
  }
}

const createListeningQ = async listeningQ => {
  try {
    const { QuizID, Prompt, Audio, Text } = listeningQ
    const res = await db.query(
      'INSERT INTO listeningq(`QuizID`, `Prompt`, `Audio`, `Text`) VALUES (?, ?, ?, ?)',
      [QuizID, Prompt, Audio, Text]
    )

    return {
      message: res.affectedRows
        ? 'Listening question created'
        : 'Question creation Failed'
    }
  } catch (err) {
    console.error(err)
  }
}
const deleteListeningQ = async id => {
  try {
    const result = await db.query(
      'DELETE FROM listeningq WHERE QID = ?',
      [id]
    )
    return {
      message: result.affectedRows ? 'Question deleted' : 'Question not deleted'
    }
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM listeningq')
    return !rows ? [] : rows
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = {
  getListeningQs,
  createListeningQ,
  deleteListeningQ,
  getRows
}
