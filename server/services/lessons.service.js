const db = require('./db')

const getLessons = async () => {
  try {
    const rows = db.query('SELECT * FROM horizons.lessons')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}

const createLesson = async lesson => {
  try {
    console.log('creating lesson', lesson)

    const { IID, Timezone, Date, Time, Topic } = lesson
    const result = await db.query(
      'INSERT INTO horizons.lessons (IID, Timezone, Date, Time, Topic) VALUES (?, ?, ?, ?, ?)',
      [IID, Timezone, Date, Time, Topic]
    )

    return {
      message: result.affectedRows ? 'Lesson created' : 'Lesson not created'
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteLesson = async id => {
  try {
    const result = await db.query(
      'DELETE FROM horizons.lessons WHERE LID = ?',
      [id]
    )
    return {
      message: result.affectedRows ? 'Lesson deleted' : 'Lesson not deleted'
    }
  } catch (error) {
    console.log(error)
  }
}
const updateLesson = async (id, lesson) => {
  try {
    const { IID, Timezone, Date, Time, Topic } = lesson
    const result = await db.query(
      'UPDATE horizons.lessons SET IID = ?, Timezone = ?, Date = ?, Time = ?, Topic =? WHERE LID = ?',
      [IID, Timezone, Date, Time, Topic, id]
    )
    return {
      message: result.affectedRows ? 'Lesson updated' : 'Lesson not updated',
      status: result.affectedRows ? 200 : 400
    }
  } catch (error) {
    console.log(error)
  }
}

const getLessonIDs = async () => {
  try {
    const rows = db.query('SELECT LID FROM horizons.lessons')
    return !rows ? [] : rows
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  getLessons,
  createLesson,
  deleteLesson,
  updateLesson,
  getLessonIDs
}
