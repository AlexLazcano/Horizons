import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const languageRequests = {
  getAll: async () => {
    return axios
      .get(`${BACKEND_URL}/languages`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  create: async ({ LanguageCode, Name }) => {
    if (!LanguageCode || !Name) {
      // see if you can add an error message to the screen later
    }
    await axios
      .post(`${BACKEND_URL}/languages`, {
        LanguageCode,
        Name
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
      .delete(`${BACKEND_URL}/languages/${id}`)
      .then(res => {
        console.log('delete response', res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default languageRequests
