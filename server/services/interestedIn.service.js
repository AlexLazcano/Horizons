const db = require('./db')

const getInterestedIn = async () => {
  try {
    const rows = db.query('SELECT * FROM interested_in')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createInterestedIn = async interestedIn => {
  try {
    console.log('creating interested_in', interestedIn)

    const { SID, LanguageCode, SkillLevel } = interestedIn
    const result = await db.query(
      'INSERT INTO interested_in (SID, LanguageCode, SkillLevel) VALUES (?, ?, ?)',
      [SID, LanguageCode, SkillLevel]
    )

    return {
      message: result.affectedRows
        ? 'InterestedIn created'
        : 'InterestedIn not created',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteInterestedIn = async (SID, LanguageCode) => {
  try {
    const result = await db.query(
      'DELETE FROM interested_in WHERE SID = ? AND LanguageCode = ?',
      [SID, LanguageCode]
    )
    return {
      message: result.affectedRows
        ? 'InterestedIn deleted'
        : 'InterestedIn not deleted',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}

const updateInterestedIn = async (
  SID,
  LanguageCode,
  newLanguageCode,
  SkillLevel
) => {
  try {
    const result = await db.query(
      'UPDATE interested_in SET SID = ?, LanguageCode = ?, SkillLevel = ? WHERE SID = ? AND LanguageCode = ?',
      [SID, newLanguageCode, SkillLevel, SID, LanguageCode]
    )
    return {
      message: result.affectedRows
        ? 'InterestedIn updated'
        : 'InterestedIn not updated',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}
const getRows = async () => {
  try {
    const rows = db.query(
      'SELECT COUNT(*) as rowCount FROM students_take_quizzes'
    )
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getInterestedIn,
  createInterestedIn,
  deleteInterestedIn,
  updateInterestedIn,
  getRows
}
