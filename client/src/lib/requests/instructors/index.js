import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const instructorsRequest = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/instructors`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  create: async ({ FirstName, LastName, Biography }) => {
    console.log('create', { FirstName, LastName, Biography })
    if (!FirstName || !LastName || !Biography) {
      console.error('Missing required fields for instructor creation')
    }
    const res = await axios
      .post(`${BACKEND_URL}/instructors`, {
        FirstName,
        LastName,
        Biography
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
    await axios
      .delete(`${BACKEND_URL}/instructors/${id}`)
      .then(res => {
        console.log('delete response', res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default instructorsRequest
