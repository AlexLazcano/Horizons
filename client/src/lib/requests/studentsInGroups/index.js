import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const studentsInGroupsRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/studentsingroups`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  create: async ({ SID, GID }) => {
    console.log('create', { SID, GID })
    if (!SID || !GID) {
      console.error('Missing required fields for studentsInGroups creation')
    }
    const res = await axios
      .post(`${BACKEND_URL}/studentsingroups`, {
        SID,
        GID
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
  delete: async (SID, GID) => {
    console.log('delete', { SID, GID })
    const res = await axios
      .delete(`${BACKEND_URL}/studentsingroups/${SID}/${GID}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })

    return res
  },
  update: async (SID, GID, data) => {
    // rename quizID to newQuizID
    const newGID = data.GID
    console.log('update', { SID, GID, newGID })

    const res = await axios
      .patch(`${BACKEND_URL}/studentsingroups/${SID}/${GID}`, {
        newGID
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
      .get(`${BACKEND_URL}/studentsingroups/rows`)
      .then(res => {
        console.log('getTotalRows response', res)
        return res.data[0].rowCount
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}

export default studentsInGroupsRequests
