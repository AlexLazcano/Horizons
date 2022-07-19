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

module.exports = {
  getStudyPlans,
  createStudyPlans
}
