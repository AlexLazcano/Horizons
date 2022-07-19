import { Row, Table } from 'antd'
import 'antd/dist/antd.min.css'
import React, { useEffect, useState } from 'react'
import { StyledApp } from './app-styles'
import Controls from './components/Controls'
import { TABLE_COLUMNS } from './lib/constants'
import requests from './lib/requests'

function App() {
  // TODO: Add change currentTable functionality
  const [currentTable, setCurrentTable] = useState('students')
  const [data, setData] = useState()
  useEffect(() => {
    getAll()
  }, [currentTable])

  // const deleteRecord = id => {
  //   requests[currentTable].delete(id)
  // }
  const getAll = () => {
    requests[currentTable]
      ?.getAll()
      .then(res => {
        setData(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const columns = TABLE_COLUMNS[currentTable]?.Columns

  return (
    <StyledApp>
      <header>Horizons</header>
      <h1 className='header'>{currentTable}</h1>
      <Row className='grid'>
        <Table
          className='data-table'
          dataSource={data}
          columns={columns}
          scroll={{ y: 400 }}
        />
      </Row>
      <Controls
        className='control-panel'
        setTableData={setData}
        currentTable={currentTable}
        setCurrentTable={setCurrentTable}
        getAllUpdate={getAll}
      />
    </StyledApp>
  )
}

export default App
