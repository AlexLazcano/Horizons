import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const studentJoinCountryRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/studentjoincountries`)
      .then(res => {
        return res.data
      })
      .catch(err => console.error(err))
    return res
  }
}

export default studentJoinCountryRequests
