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
  divide: async GID => {
    const res = await axios
      .post(`${BACKEND_URL}/studentsingroups/divide`, {
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
  }
}

export default divisionGroupsRequests
