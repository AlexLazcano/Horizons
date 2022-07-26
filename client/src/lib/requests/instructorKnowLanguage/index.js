import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const instructorKnowLanguageRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/instructorknowlanguage`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  create: async ({ IID, LanguageCode }) => {
    console.log('create', { IID, LanguageCode })
    if (!IID || !LanguageCode) {
      console.error('Missing required fields for InstructorKnowLanguage creation')
    }
    const res = await axios
      .post(`${BACKEND_URL}/instructorknowlanguage`, {
        IID,
        LanguageCode
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
  delete: async (IID, LanguageCode) => {
    console.log('delete', { IID, LanguageCode })
    const res = await axios
      .delete(`${BACKEND_URL}/instructorknowlanguage/${IID}/${LanguageCode}`)
      .then(res => {
        console.log('delete response', res)
        return res
      })
      .catch(err => {
        console.log(err)
      })

    return res
  },
  update: async (IID, LanguageCode, data) => {
    const newLanguageCode = data.LanguageCode
    console.log('update', { IID, LanguageCode, newLanguageCode })

    const res = await axios
      .patch(`${BACKEND_URL}/instructorknowlanguage/${IID}/${LanguageCode}`, {
        newLanguageCode
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
  getTotalRows: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/instructorknowlanguage/rows`)
      .then(res => {
        console.log('getTotalRows response', res)
        return res.data[0].rowCount
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }
}

export default instructorKnowLanguageRequests
