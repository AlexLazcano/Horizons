import studentRequests from './student'
import languageRequests from './languages'
import instructorsRequest from './instructors'
import groupRequests from './groups'
import studyPlanRequests from './studyplans'


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
  },
  studyPlanRequests: {
    ...studyPlanRequests
  }
}

export default requests
