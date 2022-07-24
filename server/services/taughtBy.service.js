const db = require('./db')

const getTaughtBys = async () => {
  try {
    const rows = db.query('SELECT * FROM taught_by')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createTaughtBy = async taught_by => {
  console.log('creating student country relationship', taught_by)
  try {
    const { IID, SID } = taught_by

    const result = await db.query(
      'INSERT INTO taught_by( IID, SID) VALUES (?, ?)',
      [IID, SID]
    )

    return {
      message: result.affectedRows ? 'Relation created' : 'Relation creation failed'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteTaughtBy = async (id, id2) => {
  try {
    const result = await db.query('DELETE FROM taught_by WHERE IID = ? AND SID = ?', [id, id2])
    return {
      message: result.affectedRows ? 'Relation deleted' : 'Relation deletion failed'
    }
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM taught_by')
    return !rows ? [] : rows
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = {
    getTaughtBys,
    createTaughtBy,
    deleteTaughtBy,
    getRows
}
