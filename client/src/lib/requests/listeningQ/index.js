import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const listeningQRequests = {
  getAll: async () => {
    return axios
      .get(`${BACKEND_URL}/listeningQ`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  create: async ({ QuizID, Prompt, Audio, Text }) => {
    if (!QuizID || !Prompt || !Audio || !Text) {
      // see if you can add an error message to the screen later
    }
    return axios
      .post(`${BACKEND_URL}/listeningQ`, {
        QuizID,
        Prompt,
        Audio,
        Text
      })
      .then(res => {
        console.log('post response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
  },
  delete: async id => {
    return axios
      .delete(`${BACKEND_URL}/listeningQ/${id}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default listeningQRequests
