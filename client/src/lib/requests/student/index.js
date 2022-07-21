import axios from 'axios'
import moment from 'moment'
import { BACKEND_URL } from '../../constants'

const studentRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/students`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  create: async ({ FirstName, LastName, BirthDate, Timezone }) => {
    console.log('create', { FirstName, LastName, BirthDate, Timezone })
    if (!FirstName || !LastName || !BirthDate || !Timezone) {
      console.error('Missing required fields for student creation')
    }
    await axios
      .post(`${BACKEND_URL}/students`, {
        FirstName,
        LastName,
        BirthDate,
        Timezone
      })
      .then(res => {
        console.log('post response', res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  delete: async id => {
    await axios
      .delete(`${BACKEND_URL}/students/${id}`)
      .then(res => {
        console.log('delete response', res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  update: async (id, data) => {
    const { FirstName, LastName, BirthDate, Timezone } = data
    const res = await axios
      .patch(`${BACKEND_URL}/students/${id}`, {
        FirstName,
        LastName,
        BirthDate: BirthDate ? moment(BirthDate)?.format('YYYY-MM-DD') : null,
        Timezone
      })
      .then(res => {
        console.log('patch response', res)
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}

export default studentRequests
