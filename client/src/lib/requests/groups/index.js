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
  },
  delete: async id => {
    const res = await axios
      .delete(`${BACKEND_URL}/groups/${id}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })

    return res
  },
  update: async (id, data) => {
    const { Name } = data
    const res = await axios
      .patch(`${BACKEND_URL}/groups/${id}`, {
        Name,
      })
      .then(res => {
        console.log('patch response', res)
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  getIds: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/groups/ids`)
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}

export default groupRequests
