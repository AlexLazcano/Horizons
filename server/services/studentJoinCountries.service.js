const db = require('./db')

const getStudentsJoinCountries = async () => {
  try {
    const rows = db.query(
      `SELECT FirstName,
      LastName,
      countries.name AS Country
        FROM students,
      students_in_countries,
      countries
        WHERE students_in_countries.CountryID = countries.CountryID
      AND students.SID = students_in_countries.SID;`
    )
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getStudentsJoinCountries
}
