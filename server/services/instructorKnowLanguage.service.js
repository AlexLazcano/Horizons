const db = require('./db')

const getInstructorKnowLanguage = async () => {
  try {
    const rows = db.query('SELECT * FROM instructor_know_language')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createInstructorKnowLanguage = async instructorKnowLanguage => {
  try {
    console.log('creating instructor_know_language', instructorKnowLanguage)

    const { IID, LanguageCode } = instructorKnowLanguage
    const result = await db.query(
      'INSERT INTO instructor_know_language (IID, LanguageCode) VALUES (?, ?)',
      [IID, LanguageCode]
    )

    return {
      message: result.affectedRows
        ? 'InstructorKnowLanguage created'
        : 'InstructorKnowLanguage not created'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteInstructorKnowLanguage = async (IID, LanguageCode) => {
  try {
    const result = await db.query(
      'DELETE FROM instructor_know_language WHERE IID = ? AND LanguageCode = ?',
      [IID, LanguageCode]
    )
    return {
      message: result.affectedRows
        ? 'InstructorKnowLanguage deleted'
        : 'InstructorKnowLanguage not deleted'
    }
  } catch (error) {
    console.log(error)
  }
}

const updateInstructorKnowLanguage = async (IID, LanguageCode, newLanguageCode) => {
  try {
    const result = await db.query(
      'UPDATE instructor_know_language SET IID = ?, LanguageCode = ? WHERE IID = ? AND LanguageCode = ?',
      [IID, newLanguageCode, IID, LanguageCode]
    )
    return {
      message: result.affectedRows
        ? 'InstructorKnowLanguage updated'
        : 'InstructorKnowLanguage not updated',
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
    getInstructorKnowLanguage,
    createInstructorKnowLanguage,
    deleteInstructorKnowLanguage,
    updateInstructorKnowLanguage,
    getRows
}
