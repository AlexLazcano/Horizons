import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const quizRequests = {
    getAll: async () => {
        return axios
            .get(`${BACKEND_URL}/quizzes`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    create: async ({ LanguageCode, IID, DueDate }) => {
        if (!LanguageCode || !IID || !DueDate) {
            // see if you can add an error message to the screen later
        }
        await axios
            .post(`${BACKEND_URL}/quizzes`, {
                LanguageCode,
                IID,
                DueDate
            })
            .then(res => {
                console.log('post response', res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default quizRequests