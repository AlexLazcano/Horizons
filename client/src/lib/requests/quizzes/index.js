import axios from 'axios'
import { BACKEND_URL } from '../../constants'
import moment from 'moment'

const quizRequests = {
  getAll: async () => {
    return axios
      .get(`${BACKEND_URL}/quizzes`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  create: async ({ LanguageCode, IID, DueDate }) => {
    if (!LanguageCode || !IID || !DueDate) {
      // see if you can add an error message to the screen later
    }
    const DueDateFormatted = moment(DueDate)?.format('YYYY-MM-DD')

    const res = await axios
      .post(`${BACKEND_URL}/quizzes`, {
        LanguageCode,
        IID,
        DueDate: DueDateFormatted
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
  delete: async id => {
    const res = await axios
      .delete(`${BACKEND_URL}/quizzes/${id}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  getIds: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/quizzes/ids`)
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}

export default quizRequests
