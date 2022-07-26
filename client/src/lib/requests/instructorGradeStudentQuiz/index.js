import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const instructorGradeStudentQuizRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/instructorgradestudentquiz`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },

  create: async ({ SID, IID, QuizID, Score }) => {
    console.log('create', { SID, IID, QuizID, Score })
    if (!SID || !IID || !QuizID || !Score ) {
      console.error('Missing required fields for instructorGradeStudentQuiz creation')
    }
    const res = await axios
      .post(`${BACKEND_URL}/instructorgradestudentquiz`, {
        SID,
        IID,
        QuizID,
        Score
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
  delete: async (SID, IID, QuizID,) => {
    console.log('delete', { SID, IID, QuizID })
    if (!SID || !IID || !QuizID) {
      console.error('Missing required fields for instructorGradeStudentQuiz deletion')
    }
    const res = await axios
      .delete(`${BACKEND_URL}/instructorgradestudentquiz/${SID}/${IID}/${QuizID}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })

    return res
  },
  update: async (SID, IID, QuizID, data) => {
    const newScore = data.Score
    console.log('update', { SID, IID, QuizID, newScore })

    const res = await axios
      .patch(`${BACKEND_URL}/instructorgradestudentquiz/${SID}/${IID}/${QuizID}`, {
        newScore
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

  getRows: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/instructorgradestudentquiz/rows`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}


export default instructorGradeStudentQuizRequests
