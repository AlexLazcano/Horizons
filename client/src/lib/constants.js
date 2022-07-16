export const BACKEND_URL = process.env.REACT_APP_BACKEND

export const TABLE_NAMES = [
  {
    name: 'Students',
    sqlTable: 'students'
  },
  {
    name: 'Instructors',
    sqlTable: 'instructors'
  }
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
        key: 'FirstName'
      },
      {
        title: 'Last Name',
        dataIndex: 'LastName',
        key: 'LastName'
      },
      {
        title: 'Biography',
        dataIndex: 'Biography',
        key: 'Biography'
      }
    ]
  }
}
