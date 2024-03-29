import axios from 'axios'
import moment from 'moment'
import { BACKEND_URL } from '../../constants'

const studentRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/students`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  create: async ({ FirstName, LastName, BirthDate, Timezone }) => {
    console.log('create', { FirstName, LastName, BirthDate, Timezone })
    if (!FirstName || !LastName || !BirthDate || !Timezone) {
      console.error('Missing required fields for student creation')
    }
    const date = BirthDate ? moment(BirthDate)?.format('YYYY-MM-DD') : null
    const res = await axios
      .post(`${BACKEND_URL}/students`, {
        FirstName,
        LastName,
        BirthDate: date,
        Timezone
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
      .delete(`${BACKEND_URL}/students/${id}`)
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
    const { FirstName, LastName, BirthDate, Timezone } = data
    const res = await axios
      .patch(`${BACKEND_URL}/students/${id}`, {
        FirstName,
        LastName,
        BirthDate: BirthDate ? moment(BirthDate)?.format('YYYY-MM-DD') : null,
        Timezone
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
      .get(`${BACKEND_URL}/students/ids`)
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  getTotalRows: async () => {
    return axios
      .get(`${BACKEND_URL}/students/rows`)
      .then(res => {
        return res.data[0].rowCount
      })
      .catch(err => {
        console.log(err)
      })
  },
  getProjections: async ({ SID, FirstName, LastName, BirthDate, Timezone }) => {
    const SIDvalue = SID?.target.checked || false
    const FirstNameValue = FirstName?.target.checked || false
    const LastNameValue = LastName?.target.checked || false
    const BirthDateValue = BirthDate?.target.checked || false
    const TimezoneValue = Timezone?.target.checked || false
    if (
      !SIDvalue &&
      !FirstNameValue &&
      !LastNameValue &&
      !BirthDateValue &&
      !TimezoneValue
    ) {
      return []
    }

    const columns = [
      {
        name: 'SID',
        enabled: SIDvalue
      },
      {
        name: 'FirstName',
        enabled: FirstNameValue
      },
      {
        name: 'LastName',
        enabled: LastNameValue
      },
      {
        name: 'BirthDate',
        enabled: BirthDateValue
      },
      {
        name: 'Timezone',
        enabled: TimezoneValue
      }
    ]

    const res = await axios
      .get(`${BACKEND_URL}/students/projections`, {
        params: {
          columns: JSON.stringify(columns)
        }
      })
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}

export default studentRequests
