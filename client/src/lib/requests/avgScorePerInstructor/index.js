import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const avgScorePerInstructorRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/avgscoreperinstructor`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  getNested: async min => {
    const res = await axios
      .get(`${BACKEND_URL}/avgscoreperinstructor/${min}`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}

export default avgScorePerInstructorRequests
