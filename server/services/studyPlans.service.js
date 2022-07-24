const db = require('./db')

const getStudyPlans = async () => {
  try {
    const rows = db.query('SELECT * FROM studyplans')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createStudyPlans = async studyPlan => {
  try {
    console.log('creating study plan', studyPlan)

    const { Rubric, LanguageCode, SID } = studyPlan
    const result = await db.query(
      'INSERT INTO studyplans (Rubric, LanguageCode, SID) VALUES (?, ?, ?)',
      [Rubric, LanguageCode, SID]
    )

    return {
      message: result.affectedRows ? 'Study plan created' : 'Study plan creation failed'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteStudyPlan = async id => {
  try {
    const result = await db.query('DELETE FROM studyplans WHERE SPID = ?', [id])
    return {
      message: result.affectedRows ? 'Plan deleted' : 'Plan deletion failed'
    }
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM studyplans')
    return !rows ? [] : rows
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = {
  getStudyPlans,
  createStudyPlans,
  deleteStudyPlan,
  getRows
}
