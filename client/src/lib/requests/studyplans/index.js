import axios from 'axios'
import { BACKEND_URL } from '../../constants'

const studyPlanRequests = {
    getAll: async () => {
        return axios
            .get(`${BACKEND_URL}/studyplans`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    create: async ({ Rubric, LanguageCode, SID }) => {
        console.log("hello")
        if (!Rubric || !LanguageCode || !SID) {
            // see if you can add an error message to the screen later
        }
        await axios
            .post(`${BACKEND_URL}/studyplans`, {
                Rubric,
                LanguageCode,
                SID
            })
            .then(res => {
                console.log('post response', res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default studyPlanRequests