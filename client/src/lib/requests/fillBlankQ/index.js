import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const fillBlankQRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/fillblankq`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  create: async ({
    QuizID,
    Prompt,
    Text
  }) => {
    if (
      !QuizID ||
      !Prompt ||
      !Text 
    ) {
      console.error('Missing required fields for fillblankq creation')
    }
    const res = await axios
      .post(`${BACKEND_URL}/fillblankq`, {
        QuizID,
        Prompt,
        Text
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
      .delete(`${BACKEND_URL}/fillblankq/${id}`)
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
    const {         
      QuizID,
      Prompt,
      Text } = data
      
    const res = await axios
      .patch(`${BACKEND_URL}/fillblankq/${id}`, {
        QuizID,
        Prompt,
        Text
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
      .get(`${BACKEND_URL}/fillblankq/ids`)
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }

}

export default fillBlankQRequests
