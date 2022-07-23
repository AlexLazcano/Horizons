export const BACKEND_URL = process.env.REACT_APP_BACKEND
export const TABLE_DEPENDENCIES = {
  student: [],
  instructor: [],
  countries: [],
  studyplans: ['students', 'languages'],
  quizzes: ['instructors', 'languages']
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
  }
]
