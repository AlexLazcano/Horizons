import studentRequests from './student'
import languageRequests from './languages'
import instructorsRequest from './instructors'
import groupRequests from './groups'


const requests = {
  students: {
    ...studentRequests
  },
  languages: {
    ...languageRequests
  },
  instructors: {
    ...instructorsRequest
  },
  groups: {
    ...groupRequests
  }
}

export default requests
