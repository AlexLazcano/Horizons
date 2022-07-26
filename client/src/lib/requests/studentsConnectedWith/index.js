import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const studentsConnectedWithRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/studentsconnectedwith`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  
  create: async ({ SIDA, SIDB }) => {
    console.log('create', { SIDA, SIDB })
    if (!SIDA || !SIDB) {
      console.error('Missing required fields for studentsConnectedWith creation')
    }
    const res = await axios
      .post(`${BACKEND_URL}/studentsconnectedwith`, {
        SIDA,
        SIDB
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

  delete: async (SIDA, SIDB) => {
    console.log('delete', { SIDA, SIDB })
    const res = await axios
      .delete(`${BACKEND_URL}/studentsconnectedwith/${SIDA}/${SIDB}`)
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
    const res = await axios
      .get(`${BACKEND_URL}/studentsconnectedwith/rows`)
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

export default studentsConnectedWithRequests
