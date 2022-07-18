import studentRequests from './student'
import languageRequests from './languages'
import instructorsRequest from './instructors'

const requests = {
  students: {
    ...studentRequests
  },
  languages: {
    ...languageRequests
  },
  instructors: {
    ...instructorsRequest
  }
}

export default requests
