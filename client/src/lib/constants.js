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
  interested_in: ['students', 'languages'],
  students_in_groups: ['students', 'groups'],
  students_connected_with: ['students'],
  instructor_grade_student_quiz: ['students', 'instructors', 'quizzes'],
  instructor_know_language: ['instructors', 'languages']
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
  },
  {
    name: 'StudentsInGroups',
    sqlTable: 'students_in_groups'
  },
  {
    name: 'StudentsConnectedWith',
    sqlTable: 'students_connected_with'
  },
  {
    name: 'InstructorGradeStudentQuiz',
    sqlTable: 'instructor_grade_student_quiz'
  },
  {
    name: 'InstructorKnowLanguage',
    sqlTable: 'instructor_know_language'
  }
]

export const DIVISION_TABLE_NAMES = [
  {
    name: 'Groups',
    sqlTable: 'division_groups'
  }
]
export const JOINED_TABLE_NAMES = [
  {
    name: 'StudentsJoinCountries',
    sqlTable: 'students_join_countries'
  }
]

export const PROJECTION_TABLE_NAMES = [
  {
    name: 'Students',
    sqlTable: 'students'
  }
]

export const NESTED_TABLE_NAMES = [
  {
    name: 'AVG Score Per Instructor',
    sqlTable: 'avg_score_per_instructor'
  }
]
