import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const studentCountryRequests = {
  getAll: async () => {
    return axios
      .get(`${BACKEND_URL}/studentsincountries`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  create: async ({ SID, CountryID }) => {
    if (!SID || !CountryID) {
      // see if you can add an error message to the screen later
    }
    const res = await axios
      .post(`${BACKEND_URL}/studentsincountries`, {
        SID,
        CountryID
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
  delete: async (id, id2) => {
    const res = await axios
      .delete(`${BACKEND_URL}/studentsincountries/${id}/${id2}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
      return res
  }
}

export default studentCountryRequests
