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
    const res = await axios
      .post(`${BACKEND_URL}/languages`, {
        LanguageCode,
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
  delete: async code => {
    const res = await axios
      .delete(`${BACKEND_URL}/languages/${code}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  getIds: async () => {
    return await axios
      .get(`${BACKEND_URL}/languages/ids`)
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default languageRequests
