import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const ShortAnswerQRequests = {
    getAll: async () => {
        return axios
            .get(`${BACKEND_URL}/shortanswerq`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    create: async ({ QuizID, Prompt, Answer}) => {
        if (!QuizID || !Prompt || !Answer) {
            console.error('Missing required fields for shortanswerq creation')
        }
        await axios
            .post(`${BACKEND_URL}/shortanswerq`, {
                QuizID,
                Prompt,
                Answer
            })
            .then(res => {
                console.log('post response', res)
            })
            .catch(err => {
                console.log(err)
            })
    },
    delete: async id => {
        await axios
            .delete(`${BACKEND_URL}/shortanswerq/${id}`)
            .then(res => {
                console.log('delete response', res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default ShortAnswerQRequests