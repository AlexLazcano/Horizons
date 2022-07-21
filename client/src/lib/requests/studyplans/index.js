import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const studyPlanRequests = {
  getAll: async () => {
    return axios
      .get(`${BACKEND_URL}/studyplans`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  create: async ({ Rubric, LanguageCode, SID }) => {
    if (!Rubric || !LanguageCode || !SID) {
      // see if you can add an error message to the screen later
    }
    const res = await axios
      .post(`${BACKEND_URL}/studyplans`, {
        Rubric,
        LanguageCode,
        SID
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
      .delete(`${BACKEND_URL}/studyplans/${id}`)
      .then(res => {
        console.log('delete response', res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default studyPlanRequests
