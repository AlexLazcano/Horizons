import axios from 'axios'
import moment from 'moment'
import { BACKEND_URL } from '../../constants'

const lessonRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/lessons`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  create: async ({  IID, Timezone, Date, Time, Topic }) => {
    console.log('create', { IID, Timezone, Date, Time, Topic })
    if (!IID || !Timezone || !Date || !Time || !Topic) {
      console.error('Missing required fields for student creation')
    }
    const date = Date ? moment(Date)?.format('YYYY-MM-DD') : null
    const res = await axios
      .post(`${BACKEND_URL}/lessons`, {
        IID,
        Timezone,
        Date: date,
        Time, //////ASK
        Topic
        
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
    const res = await axios
      .delete(`${BACKEND_URL}/lessons/${id}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })

    return res
  },
  update: async (id, data) => {
    const { IID, Timezone, Date, Time, Topic } = data
    const res = await axios
      .patch(`${BACKEND_URL}/lessons/${id}`, {
        IID,
        Timezone,
        Date: Date ? moment(Date)?.format('YYYY-MM-DD') : null,
        Time,
        Topic
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

export default lessonRequests
