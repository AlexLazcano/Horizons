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
  create: async ({ IID, Timezone, Date, Time, Topic }) => {
    console.log('create', { IID, Timezone, Date, Time, Topic })
    if (!IID || !Timezone || !Date || !Time || !Topic) {
      console.error('Missing required fields for student creation')
    }
    const date = Date ? moment(Date)?.format('YYYY-MM-DD') : null
    // format time to HH:mm:ss
    const time = Time ? moment(Time).format('HH:mm') : null
    const res = await axios
      .post(`${BACKEND_URL}/lessons`, {
        IID,
        Timezone,
        Date: date,
        Time: time,
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

    // format time to HH:mm:ss
    const time = Time ? moment(Time).format('HH:mm') : null
    const res = await axios
      .patch(`${BACKEND_URL}/lessons/${id}`, {
        IID,
        Timezone,
        Date: Date ? moment(Date)?.format('YYYY-MM-DD') : null,
        Time: time,
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
  },
  getIds: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/lessons/ids`)
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
      })
    console.log('getIDs response', res)
    return res
  },
  getTotalRows: async () => {
    return axios
      .get(`${BACKEND_URL}/lessons/rows`)
      .then(res => {
        return res.data[0].rowCount
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default lessonRequests
