import axios from 'axios'
import moment from 'moment'
import { BACKEND_URL } from '../../constants'

const countryRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/countries`)
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
      console.error('Missing required fields for country creation')
    }
    const res = await axios
      .post(`${BACKEND_URL}/countries`, {
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
      .delete(`${BACKEND_URL}/countries/${id}`)
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
      .patch(`${BACKEND_URL}/countries/${id}`, {
        Name
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
      .get(`${BACKEND_URL}/countries/ids`)
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}

export default countryRequests
