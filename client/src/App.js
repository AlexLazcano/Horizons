import { Col, Row, Table } from 'antd'
import 'antd/dist/antd.min.css'
import React, { useState } from 'react'
import { StyledApp } from './app-styles'
import Controls from './components/Controls'
import { TABLE_COLUMNS } from './lib/constants'

function App() {
  // TODO: Add change currentTable functionality
  const [currentTable, setCurrentTable] = useState('students')
  const [data, setData] = useState()
  // const columns = [
  //   {
  //     title: 'SID',
  //     dataIndex: 'SID',
  //     key: 'sid'
  //   },
  //   {
  //     title: 'First Name',
  //     dataIndex: 'FirstName',
  //     key: 'FirstName'
  //   },
  //   {
  //     title: 'Last Name',
  //     dataIndex: 'LastName',
  //     key: 'LastName'
  //   },
  //   {
  //     title: 'Birth Date',
  //     dataIndex: 'BirthDate',
  //     key: 'BirthDate'
  //   },
  //   {
  //     title: 'Time Zone',
  //     dataIndex: 'Timezone',
  //     key: 'Timezone'
  //   }
  // ]

  const columns = TABLE_COLUMNS[currentTable].Columns
  return (
    <StyledApp>
      <header>Horizons</header>
      <h1 className='header'>{currentTable}</h1>
      <Row className='grid'>
          <Table className='data-table' dataSource={data} columns={columns} scroll={{ y: 400 }} />
      </Row>
      <Controls className='control-panel'
          setTableData={setData}
          currentTable={currentTable}
          setCurrentTable={setCurrentTable}
        />
    </StyledApp>
  )
}

export default App
