import studentRequests from './student'
import languageRequests from './languages'
import quizRequests from './quizzes'
import instructorsRequest from './instructors'
import groupRequests from './groups'
import studyPlanRequests from './studyplans'
import multipleChoiceQRequests from './multipleChoiceQ'
import shortAnswerQRequests from './shortAnswerQ'
import listeningQRequests from './listeningQ'


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
  studyplans: {
    ...studyPlanRequests
  },
  multiplechoiceqs: {
    ...multipleChoiceQRequests
  },
  shortanswerqs: {
    ...shortAnswerQRequests
  },
  listeningqs: {
    ...listeningQRequests
  } 
}

export default requests
