import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const MultipleChoiceQRequests = {
    getAll: async () => {
        return axios
            .get(`${BACKEND_URL}/multiplechoiceq`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    create: async ({ CorrectChoice, QuizID, Prompt, Choice1, Choice2, Choice3, Choice4 }) => {
        if (!CorrectChoice || !QuizID || !Prompt || !Choice1 || !Choice2 || !Choice3 || !Choice4) {
            console.error('Missing required fields for multiplechoiceq creation')
        }
        await axios
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
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default MultipleChoiceQRequests