const db = require('./db')

const getCountries = async () => {
  try {
    const rows = db.query('SELECT * FROM horizons.countries')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createCountry = async country => {
  try {
    console.log('creating country', country)

    const { Name } = country
    const result = await db.query(
      'INSERT INTO horizons.countries (Name) VALUES (?)',
      [Name]
    )

    return {
      message: result.affectedRows ? 'Country created' : 'Country not created'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteCountry = async id => {
  try {
    const result = await db.query(
      'DELETE FROM horizons.countries WHERE CountryID = ?',
      [id]
    )
    return {
      message: result.affectedRows ? 'Country deleted' : 'Country not deleted'
    }
  } catch (error) {
    console.log(error)
  }
}
const updateCountry = async (id, country) => {
  try {
    const { Name } = country
    const result = await db.query(
      'UPDATE horizons.countries SET Name = ? WHERE CountryID = ?',
      [Name, id]
    )
    return {
      message: result.affectedRows ? 'Country updated' : 'Country not updated',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}
const getCountryIDs = async () => {
  try {
    const rows = db.query('SELECT CountryID FROM horizons.countries')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM countries')
    return !rows ? [] : rows
  }
  catch (err) {
    console.log(err)
  }
}


module.exports = {
    getCountries,
    createCountry,
    deleteCountry,
    updateCountry,
    getCountryIDs,
    getRows
}
