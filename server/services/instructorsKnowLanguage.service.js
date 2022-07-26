const db = require('./db')

const getInstructorsKnowLanguage = async () => {
  try {
    const rows = db.query('SELECT * FROM instructor_know_language')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createInstructorsKnowLanguage = async instructorsKnowLanguage => {
  try {
    console.log('creating instructor_know_language', instructorsKnowLanguage)

    const { IID, LanguageCode } = instructorsKnowLanguage
    const result = await db.query(
      'INSERT INTO instructor_know_language (IID, LanguageCode) VALUES (?, ?)',
      [IID, LanguageCode]
    )

    return {
      message: result.affectedRows
        ? 'InstructorsKnowLanguage created'
        : 'InstructorsKnowLanguage not created'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteInstructorsKnowLanguage = async (IID, LanguageCode) => {
  try {
    const result = await db.query(
      'DELETE FROM instructor_know_language WHERE IID = ? AND LanguageCode = ?',
      [IID, LanguageCode]
    )
    return {
      message: result.affectedRows
        ? 'InstructorsKnowLanguage deleted'
        : 'InstructorsKnowLanguage not deleted'
    }
  } catch (error) {
    console.log(error)
  }
}

const updateInstructorsKnowLanguage = async (IID, LanguageCode, newLanguageCode) => {
  try {
    const result = await db.query(
      'UPDATE instructor_know_language SET IID = ?, LanguageCode = ? WHERE IID = ? AND LanguageCode = ?',
      [IID, newLanguageCode, IID, LanguageCode]
    )
    return {
      message: result.affectedRows
        ? 'InstructorsKnowLanguage updated'
        : 'InstructorsKnowLanguage not updated',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM instructor_know_language')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}



module.exports = {
    getInstructorsKnowLanguage,
    createInstructorsKnowLanguage,
    deleteInstructorsKnowLanguage,
    updateInstructorsKnowLanguage,
    getRows
}
