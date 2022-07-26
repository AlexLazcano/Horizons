import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const divisionGroupsRequests = {
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
  divide: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/studentsingroups/divide`)
      .then(res => {
        console.log('post response', res)
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}

export default divisionGroupsRequests
