import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const taughtByRequests = {
  getAll: async () => {
    return axios
      .get(`${BACKEND_URL}/taughtby`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  create: async ({ IID, SID }) => {
    if (!IID || !SID) {
      // see if you can add an error message to the screen later
    }
    const res = await axios
      .post(`${BACKEND_URL}/taughtby`, {
        IID,
        SID
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
      .delete(`${BACKEND_URL}/taughtby/${id}/${id2}`)
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
      .get(`${BACKEND_URL}/taughtby/rows`)
      .then(res => {
        return res.data[0].rowCount
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default taughtByRequests
