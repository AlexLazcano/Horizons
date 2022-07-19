import axios from 'axios'
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
  }
}

export default studentRequests
