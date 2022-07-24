const db = require('./db')

const getLanguages = async () => {
  try {
    const rows = db.query('SELECT * FROM languages')
    return !rows ? [] : rows
  } catch (err) {
    console.error(err)
  }
}

const createLanguage = async language => {
  try {
    const { LanguageCode, Name } = language
    const res = await db.query(
      'INSERT INTO languages (LanguageCode, Name) VALUES (?, ?)',
      [LanguageCode, Name]
    )

    return {
      message: res.affectedRows
        ? 'Language Created'
        : 'Language Creation Failed'
    }
  } catch (err) {
    console.error(err)
  }
}
const deleteLanguage = async id => {
  try {
    const result = await db.query(
      'DELETE FROM languages WHERE LanguageCode = ?',
      [id]
    )
    return {
      message: result.affectedRows ? 'Language deleted' : 'Language not deleted'
    }
  } catch (error) {
    console.log(error)
  }
}

const getLanguageCodes = async () => {
  try {
    const rows = db.query('SELECT LanguageCode FROM languages')
    return !rows ? [] : rows
  } catch (err) {
    console.error(err)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM languages')
    return !rows ? [] : rows
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = {
  getLanguages,
  createLanguage,
  deleteLanguage,
  getLanguageCodes,
  getRows
}
