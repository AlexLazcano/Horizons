import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const MultipleChoiceQRequests = {
  getAll: async () => {
    const res = await axios
      .get(`${BACKEND_URL}/multiplechoiceq`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
    return res
  },
  create: async ({
    CorrectChoice,
    QuizID,
    Prompt,
    Choice1,
    Choice2,
    Choice3,
    Choice4
  }) => {
    if (
      !CorrectChoice ||
      !QuizID ||
      !Prompt ||
      !Choice1 ||
      !Choice2 ||
      !Choice3 ||
      !Choice4
    ) {
      console.error('Missing required fields for multiplechoiceq creation')
    }
    const res = await axios
      .post(`${BACKEND_URL}/multiplechoiceq`, {
        CorrectChoice,
        QuizID,
        Prompt,
        Choice1,
        Choice2,
        Choice3,
        Choice4
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
      .delete(`${BACKEND_URL}/multiplechoiceq/${id}`)
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
      CorrectChoice,
      QuizID,
      Prompt,
      Choice1,
      Choice2,
      Choice3,
      Choice4 } = data
      
    const res = await axios
      .patch(`${BACKEND_URL}/multiplechoiceq/${id}`, {
        CorrectChoice,
        QuizID,
        Prompt,
        Choice1,
        Choice2,
        Choice3,
        Choice4
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
      .get(`${BACKEND_URL}/multiplechoiceq/ids`)
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
      })
    return res
  }

}

export default MultipleChoiceQRequests
