export const BACKEND_URL = process.env.REACT_APP_BACKEND

export const TABLE_COLUMNS = {
  students: {
    TableName: 'Students',
    Columns: [
      {
        title: 'SID',
        dataIndex: 'SID',
        key: 'sid',
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
        title: 'Birth Date',
        dataIndex: 'BirthDate',
        key: 'BirthDate'
      },
      {
        title: 'Time Zone',
        dataIndex: 'Timezone',
        key: 'Timezone'
      }
    ]
  }
}
