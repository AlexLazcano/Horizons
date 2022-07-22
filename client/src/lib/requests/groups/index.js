import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const groupRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/groups`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  create: async ({ Name }) => {
    console.log('create', { Name })
    if (!Name) {
      console.error('Missing required fields for group creation')
    }
    const res = await axios
      .post(`${BACKEND_URL}/groups`, {
        Name
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

export default groupRequests
