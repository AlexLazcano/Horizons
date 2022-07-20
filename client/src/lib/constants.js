import { Button, Space } from 'antd'
import requests from './requests'

export const BACKEND_URL = process.env.REACT_APP_BACKEND

export const TABLE_NAMES = [
  {
    name: 'Students',
    sqlTable: 'students'
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
    name: 'Quizzes',
    sqlTable: 'quizzes'
  },
  {
    name: 'Groups',
    sqlTable: 'groups'
  },
  {
    name: 'MultipleChoiceQ',
    sqlTable: 'multiplechoiceqs'
  },
  {
    name: 'ShortAnswerQ',
    sqlTable: 'shortanswerqs'
  },
]

export const TABLE_COLUMNS = {
  students: {
    TableName: 'Students',
    Columns: [
      {
        title: 'SID',
        dataIndex: 'SID',
        key: 'sid',
        hidden: true,
        type: 'input'
      },
      {
        title: 'First Name',
        dataIndex: 'FirstName',
        key: 'FirstName',
        type: 'input'
      },
      {
        title: 'Last Name',
        dataIndex: 'LastName',
        key: 'LastName',
        type: 'input'
      },
      {
        title: 'Birth Date',
        dataIndex: 'BirthDate',
        key: 'BirthDate',
        type: 'date'
      },
      {
        title: 'Time Zone',
        dataIndex: 'Timezone',
        key: 'Timezone',
        type: 'select',
        inputProps: {
          showSearch: true,
          options: ['America/New_York', 'America/Chicago', 'America/Denver']
        }
      },
      {
        title: 'Controls',
        key: 'key',
        dataIndex: 'key',
        width: '10%',
        render: (text, record) => (
          <Space size='middle'>
            <Button onClick={() => console.log(record)}>Edit</Button>
            <Button
              danger
              onClick={() => requests.students.delete(record?.SID)}
            >
              Delete
            </Button>
          </Space>
        )
      }
    ]
  },
  instructors: {
    TableName: 'Instructors',
    Columns: [
      {
        title: 'IID',
        dataIndex: 'IID',
        key: 'iid',
        hidden: true
      },
      {
        title: 'First Name',
        dataIndex: 'FirstName',
        key: 'FirstName',
        type: 'input'
      },
      {
        title: 'Last Name',
        dataIndex: 'LastName',
        type: 'input',
        key: 'LastName'
      },
      {
        title: 'Biography',
        dataIndex: 'Biography',
        key: 'Biography',
        type: 'input'
      },
      {
        title: 'Controls',
        key: 'key',
        dataIndex: 'key',
        width: '10%',
        render: (text, record) => (
          <Space size='middle'>
            <Button onClick={() => console.log(record)}>Edit</Button>
            <Button
              danger
              onClick={() => requests.instructors.delete(record?.IID)}
            >
              Delete
            </Button>
          </Space>
        )
      }
    ]
  },
  languages: {
    TableName: 'Languages',
    Columns: [
      {
        title: 'LanguageCode',
        dataIndex: 'LanguageCode',
        key: 'LanguageCode',
        type: 'input'
      },
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        type: 'input'
      },
      {
        title: 'Controls',
        key: 'key',
        dataIndex: 'key',
        width: '10%',
        render: (text, record) => (
          <Space size='middle'>
            <Button onClick={() => console.log(record)}>Edit</Button>
            <Button
              danger
              onClick={() => requests.languages.delete(record?.SID)}
            >
              Delete
            </Button>
          </Space>
        )
      }
    ]
  },
  quizzes:{
    TableName: 'Quizzes',
    Columns: [
      {
        title: 'QuizID',
        dataIndex: 'QuizID',
        key: 'QuizID',
        type: 'input',
        hidden: true
      },
      {
        title: 'LanguageCode',
        dataIndex: 'LanguageCode',
        key: 'LanguageCode',
        type: 'select',
        inputProps: {
          showSearch: true,
          options: ['ES-ES']
        }
      },
      {
        title: 'IID',
        dataIndex: 'IID',
        key: 'IID',
        type: 'select',
        inputProps: {
          showSearch: true,
          options: ['1']
        }
      },
      {
        title: 'DateCreated',
        dataIndex: 'DateCreated',
        key: 'DateCreated',
        type: 'input',
        hidden: true
      },
      {
        title: 'DueDate',
        dataIndex: 'DueDate',
        key: 'DueDate',
        type: 'date'
      }
    ]
  },
  groups:{
    TableName: 'Groups',
    Columns:[
      {
        title: 'GID',
        dataIndex: 'GID',
        key: 'gid',
        hidden: true,
        type: 'input'
      },
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        type: 'input',
      }
    ]
  },

  multiplechoiceqs: {
    TableName: 'MultipleChoiceQ',
    Columns: [
      {
        title: 'QID',
        dataIndex: 'QID',
        key: 'qid',
        hidden: true
      },
      {
        title: 'CorrectChoice',
        dataIndex: 'CorrectChoice',
        key: 'CorrectChoice',
        type: 'input'
      },
      {
        title: 'QuizID',
        dataIndex: 'QuizID',
        key: 'QuizID',
        type: 'input'
      },
      {
        title: 'Prompt',
        dataIndex: 'Prompt',
        key: 'Prompt',
        type: 'input'
      },
      {
        title: 'Choice1',
        dataIndex: 'Choice1',
        key: 'Choice1',
        type: 'input'
      },
      {
        title: 'Choice2',
        dataIndex: 'Choice2',
        key: 'Choice2',
        type: 'input'
      },
      {
        title: 'Choice3',
        dataIndex: 'Choice3',
        key: 'Choice3',
        type: 'input'
      },
      {
        title: 'Choice4',
        dataIndex: 'Choice4',
        key: 'Choice4',
        type: 'input'
      }
    ]
  },
  shortanswerqs: {
    TableName: 'ShortAnswerQ',
    Columns: [
      {
        title: 'QID',
        dataIndex: 'QID',
        key: 'qid',
        hidden: true
      },
      {
        title: 'QuizID',
        dataIndex: 'QuizID',
        key: 'QuizID',
        type: 'input'
      },
      {
        title: 'Prompt',
        dataIndex: 'Prompt',
        key: 'Prompt',
        type: 'input'
      },
      {
        title: 'Answer',
        dataIndex: 'Answer',
        key: 'Answer',
        type: 'input'
      },
      {
        title: 'Controls',
        key: 'key',
        dataIndex: 'key',
        width: '10%',
        render: (text, record) => (
          <Space size='middle'>
            <Button onClick={() => console.log(record)}>Edit</Button>
            <Button
              danger
              onClick={() => requests.shortanswerqs.delete(record?.QID)}
            >
              Delete
            </Button>
          </Space>
        )
      }
    ]
  }
}

