import studentRequests from './student'
import languageRequests from './languages'
import quizRequests from './quizzes'
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
  quizzes: {
    ...quizRequests
  },
  groups: {
    ...groupRequests
  },
  studyPlanRequests: {
    ...studyPlanRequests
  }
}

export default requests
