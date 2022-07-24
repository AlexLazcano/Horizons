const db = require('./db')

const getStudentCountries = async () => {
  try {
    const rows = db.query('SELECT * FROM students_in_countries')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createStudentCountry = async student_in_country => {
  console.log('creating student country relationship', student_in_country)
  try {
    const { SID, CountryID } = student_in_country

    const result = await db.query(
      'INSERT INTO students_in_countries( SID, CountryID) VALUES (?, ?)',
      [SID, CountryID]
    )

    return {
      message: result.affectedRows ? 'Relation created' : 'Relation creation failed'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteStudentCountry = async (id, id2) => {
  try {
    const result = await db.query('DELETE FROM students_in_countries WHERE SID = ? AND CountryID = ?', [id, id2])
    return {
      message: result.affectedRows ? 'Relation deleted' : 'Relation deletion failed'
    }
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM students_in_countries')
    return !rows ? [] : rows
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = {
    getStudentCountries,
    createStudentCountry,
    deleteStudentCountry,
    getRows
}
