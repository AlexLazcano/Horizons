import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const interestedInRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/interestedin`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  create: async ({ SID, LanguageCode, SkillLevel }) => {
    console.log('create', { SID, LanguageCode, SkillLevel })
    if (!SID || !LanguageCode) {
      console.error('Missing required fields for interestedin creation')
    }
    const res = await axios
      .post(`${BACKEND_URL}/interestedin`, {
        SID,
        LanguageCode,
        SkillLevel
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
  delete: async (SID, LanguageCode) => {
    console.log('delete', { SID, LanguageCode })
    if (!SID || !LanguageCode) {
      console.error('Missing required fields for interestedin deletion')
    }
    const res = await axios
      .delete(`${BACKEND_URL}/interestedin/${SID}/${LanguageCode}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })

    return res
  },
  update: async (SID, LanguageCode, data) => {
    console.log('update', { SID, LanguageCode, data })
    if (!SID || !LanguageCode) {
      console.error('Missing required fields for interestedin update')
    }

    const res = await axios
      .patch(`${BACKEND_URL}/interestedin/${SID}/${LanguageCode}`, {
        newLanguageCode: data.LanguageCode,
        SkillLevel: data.SkillLevel
      })
      .then(res => {
        console.log('patch response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })

    return res
  },
  getRows: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/interestedin/rows`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}

export default interestedInRequests
