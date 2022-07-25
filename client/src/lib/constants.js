export const BACKEND_URL = process.env.REACT_APP_BACKEND
export const TABLE_DEPENDENCIES = {
  student: [],
  instructor: [],
  countries: [],
  groups: [],
  studyplans: ['students', 'languages'],
  quizzes: ['instructors', 'languages'],
  lessons: ['instructors'],
  multiplechoiceqs: ['quizzes'],
  fillblankqs: ['quizzes'],
  shortanswerqs: ['quizzes'],
  listeningqs: ['quizzes'],
  students_in_countries: ['students', 'countries'],
  taught_by: ['instructors', 'students'],
  lessons_contain_students: ['lessons', 'students'],
  students_take_quizzes: ['students', 'quizzes'],
  interested_in: ['students', 'languages']
}
export const TABLE_NAMES = [
  {
    name: 'Students',
    sqlTable: 'students',
    dependencies: []
  },
  {
    name: 'Instructors',
    sqlTable: 'instructors'
  },
  {
    name: 'Languages',
    sqlTable: 'languages'
  },
  {
    name: 'Countries',
    sqlTable: 'countries'
  },
  {
    name: 'Study Plans',
    sqlTable: 'studyplans'
  },
  {
    name: 'Groups',
    sqlTable: 'groups'
  },
  {
    name: 'Lessons',
    sqlTable: 'lessons'
  },
  {
    name: 'Quizzes',
    sqlTable: 'quizzes'
  },
  {
    name: 'MultipleChoiceQ',
    sqlTable: 'multiplechoiceqs'
  },
  {
    name: 'FillBlankQ',
    sqlTable: 'fillblankqs'
  },
  {
    name: 'ShortAnswerQ',
    sqlTable: 'shortanswerqs'
  },
  {
    name: 'ListeningQ',
    sqlTable: 'listeningqs'
  },
  {
    name: 'StudentsInCountries',
    sqlTable: 'students_in_countries'
  },
  {
    name: 'TaughtBy',
    sqlTable: 'taught_by'
  },
  {
    name: 'LessonsContainStudents',
    sqlTable: 'lessons_contain_students'
  },
  {
    name: 'StudentsTakeQuizzes',
    sqlTable: 'students_take_quizzes'
  },
  {
    name: 'InterestedIn',
    sqlTable: 'interested_in'
  }
]
