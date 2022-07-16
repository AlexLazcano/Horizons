import { Col, Row, Table } from 'antd'
import 'antd/dist/antd.min.css'
import React, { useState } from 'react'
import { StyledApp } from './app-styles'
import Controls from './components/Controls'

function App() {
  // TODO: Add change currentTable functionality
  const [currentTable, setCurrentTable] = useState('Students')
  const [data, setData] = useState()
  const columns = [
    {
      title: 'SID',
      dataIndex: 'SID',
      key: 'sid'
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

  return (
    <StyledApp>
      <header>CMPT 354 - Horizons</header>
      <div className='content'>
        <Row className='grid'>
          <Col span={24} className='table-header'>
            {currentTable} Table
          </Col>

          <Col span={24}>
            <Table dataSource={data} columns={columns} scroll={{ y: 400 }} />
          </Col>
        </Row>
        <Controls setTableData={setData} currentTable={currentTable.toLowerCase() } setCurrentTable={setCurrentTable} />
      </div>
    </StyledApp>
  )
}

export default App
