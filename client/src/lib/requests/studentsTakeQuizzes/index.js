import axios from 'axios'
import moment from 'moment'
import { BACKEND_URL } from '../../constants'

const studentTakeQuizzesRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/studentstakequizzes`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  create: async ({ SID, QuizID }) => {
    console.log('create', { SID, QuizID })
    if (!SID || !QuizID) {
      console.error('Missing required fields for studentTakeQuizzes creation')
    }
    const res = await axios
      .post(`${BACKEND_URL}/studentstakequizzes`, {
        SID,
        QuizID
      })
      .then(res => {
        console.log('post response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  delete: async (SID, QuizID) => {
    console.log('delete', { SID, QuizID })
    const res = await axios
      .delete(`${BACKEND_URL}/studentstakequizzes/${SID}/${QuizID}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })

    return res
  },
  update: async (SID, QuizID, data) => {
    // rename quizID to newQuizID
    const newQuizID = data.QuizID
    console.log('update', { SID, QuizID, newQuizID })

    const res = await axios
      .patch(`${BACKEND_URL}/studentstakequizzes/${SID}/${QuizID}`, {
        newQuizID
      })
      .then(res => {
        console.log('patch response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })

    return res
  },
  getTotalRows: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/studentstakequizzes/rows`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}

export default studentTakeQuizzesRequests
