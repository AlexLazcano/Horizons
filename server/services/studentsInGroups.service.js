const db = require('./db')

const getStudentsInGroups = async () => {
  try {
    const rows = db.query('SELECT * FROM students_in_groups')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createStudentsInGroups = async studentsInGroups => {
  try {
    console.log('creating students_in_groups', studentsInGroups)

    const { SID, GID } = studentsInGroups
    const result = await db.query(
      'INSERT INTO students_in_groups (SID, GID) VALUES (?, ?)',
      [SID, GID]
    )

    return {
      message: result.affectedRows
        ? 'StudentsInGroups created'
        : 'StudentsInGroups not created'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteStudentsInGroups = async (SID, GID) => {
  try {
    const result = await db.query(
      'DELETE FROM students_in_groups WHERE SID = ? AND GID = ?',
      [SID, GID]
    )
    return {
      message: result.affectedRows
        ? 'StudentsInGroups deleted'
        : 'StudentsInGroups not deleted'
    }
  } catch (error) {
    console.log(error)
  }
}

const updateStudentInGroups = async (SID, GID, newGID) => {
  try {
    const result = await db.query(
      'UPDATE students_in_groups SET SID = ?, GID = ? WHERE SID = ? AND GID = ?',
      [SID, newGID, SID, GID]
    )
    return {
      message: result.affectedRows
        ? 'StudentsInGroups updated'
        : 'StudentsInGroups not updated',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}

const getRows = async () => {
  try {
    const rows = db.query('SELECT COUNT(*) AS rowCount FROM students_in_groups')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}
const divide = async () => {
  try {
    const rows = db.query(`SElECT DISTINCT *
    FROM (
            SELECT SID
            FROM students_in_groups
        ) AS ALLSIDS
    WHERE (SID) NOT IN (
            SELECT SID
            FROM (
                    SELECT B.GID AS GID,
                        A.SID AS SID
                    FROM (horizons.students_in_groups as A)
                        CROSS JOIN (horizons.groups AS B)
                ) AS CR
            WHERE NOT EXISTS (
                    SELECT *
                    FROM students_in_groups
                    WHERE students_in_groups.SID = CR.SID
                        AND students_in_groups.GID = CR.GID
                )
        )`)
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getStudentsInGroups,
  createStudentsInGroups,
  deleteStudentsInGroups,
  updateStudentInGroups,
  getRows,
  divide
}
