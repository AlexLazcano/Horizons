import studentRequests from './student'
import languageRequests from './languages'
import quizRequests from './quizzes'

const requests = {
  students: {
    ...studentRequests
  },
  languages: {
    ...languageRequests
  },
  quizzes: {
    ...quizRequests
  }
}


export default requests