import studentRequests from './student'
import instructorsRequest from './instructors'
import languageRequests from './languages'
import countryRequests from './countries'
import studyPlanRequests from './studyplans'
import groupRequests from './groups'
import quizRequests from './quizzes'
import multipleChoiceQRequests from './multipleChoiceQ'
import shortAnswerQRequests from './shortAnswerQ'
import studentCountryRequests from './studentsInCountries'
import listeningQRequests from './listeningQ'
import taughtByRequests from './taughtBy'


const requests = {
  students: {
    ...studentRequests
  },
  instructors: {
    ...instructorsRequest
  },
  languages: {
    ...languageRequests
  },
  countries: {
    ...countryRequests
  },
  studyplans: {
    ...studyPlanRequests
  },
  groups: {
    ...groupRequests
  },
  quizzes: {
    ...quizRequests
  },
  multiplechoiceqs: {
    ...multipleChoiceQRequests
  },
  shortanswerqs: {
    ...shortAnswerQRequests
  },
  students_in_countries:{
    ...studentCountryRequests
  },  
  listeningqs: {
    ...listeningQRequests
  },
  taught_by:{
    ...taughtByRequests
  }
}

export default requests
