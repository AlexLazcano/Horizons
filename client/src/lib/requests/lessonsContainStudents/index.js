import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const lessonStudentRequests = {
  getAll: async () => {
    return axios
      .get(`${BACKEND_URL}/lessonscontainstudents`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  create: async ({ SID, LID }) => {
    if (!SID || !LID) {
      // see if you can add an error message to the screen later
    }
    const res = await axios
      .post(`${BACKEND_URL}/lessonscontainstudents`, {
        SID,
        LID
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
  delete: async (id, id2) => {
    const res = await axios
      .delete(`${BACKEND_URL}/lessonscontainstudents/${id}/${id2}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
      return res
  },
  getTotalRows: async () => {
    return axios
      .get(`${BACKEND_URL}/lessonscontainstudents/rows`)
      .then(res => {
        return res.data[0].rowCount
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default lessonStudentRequests
