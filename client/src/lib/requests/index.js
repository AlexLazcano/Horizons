import studentRequests from './student'
import instructorsRequest from './instructors'
import languageRequests from './languages'
import countryRequests from './countries'
import studyPlanRequests from './studyplans'
import groupRequests from './groups'
import lessonRequests from './lessons'
import quizRequests from './quizzes'
import multipleChoiceQRequests from './multipleChoiceQ'
import fillBlankQRequests from './fillBlankQ'
import shortAnswerQRequests from './shortAnswerQ'
import studentCountryRequests from './studentsInCountries'
import listeningQRequests from './listeningQ'
import taughtByRequests from './taughtBy'
import lessonsStudentsRequests from './lessonsContainStudents'
import studentsTakeQuizzesRequests from './studentsTakeQuizzes'
import interestedInRequests from './interestedIn'
import studentsInGroupsRequests from './studentsInGroups'
import divisionGroupsRequests from './divisionGroups'

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
  lessons: {
    ...lessonRequests
  },
  quizzes: {
    ...quizRequests
  },
  multiplechoiceqs: {
    ...multipleChoiceQRequests
  },
  fillblankqs: {
    ...fillBlankQRequests
  },
  shortanswerqs: {
    ...shortAnswerQRequests
  },
  students_in_countries: {
    ...studentCountryRequests
  },
  listeningqs: {
    ...listeningQRequests
  },
  taught_by: {
    ...taughtByRequests
  },
  lessons_contain_students: {
    ...lessonsStudentsRequests
  },
  students_take_quizzes: {
    ...studentsTakeQuizzesRequests
  },
  interested_in: {
    ...interestedInRequests
  },
  students_in_groups: {
    ...studentsInGroupsRequests
  },
  division_groups: {
    ...divisionGroupsRequests
  }
}

export default requests
