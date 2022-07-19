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
    name: 'Groups',
    sqlTable: 'groups'
  },
  {
    name: 'Study Plans',
    sqlTable: 'studyplans'
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
        type: 'input',
        dataIndex: 'Biography',
        key: 'Biography',
        //type: 'input'
      }
    ]
  },
  languages:{
    TableName: 'Languages',
    Columns:[
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
        type: 'input',
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
  studyplans:{
    TableName: 'Study Plans',
    Columns:[
      {
        title: 'SPID',
        dataIndex: 'SPID',
        key: 'SPID',
        hidden: true
      },
      {
        title: 'Rubric',
        dataIndex: 'Rubric',
        key: 'Rubric',
        type: 'input'
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
        title: 'SID',
        dataIndex: 'SID',
        key: 'SID',
        type: 'select',
        inputProps: {
          showSearch: true,
          options: ['1']
        }
      }
    ]
  }
  
}
