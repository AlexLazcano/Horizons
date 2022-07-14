import { Button, Col, Row, Table } from 'antd'
import 'antd/dist/antd.min.css'
import axios from 'axios'
import React, { useState } from 'react'
import { StyledApp } from './app-styles'
import { BACKEND_URL } from './lib/constants'

function App() {
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

  const handleGet = async () => {
    await axios
      .get(`${BACKEND_URL}/students`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handlePost = async () => {
    await axios
      .post(`${BACKEND_URL}/students`, {
        FirstName: 'John',
        LastName: 'Doe',
        BirthDate: '2020-01-01',
        Timezone: 'UTC'
      })
      .then(res => {
        console.log('post response', res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <StyledApp>
      <header>CMPT 354 - Horizons</header>
      <div className='content'>
        <Row className='grid'>
          <Col span={24} className='table-header'>
            Table
          </Col>

          <Col span={24}>
            <Table dataSource={data} columns={columns} />
          </Col>
        </Row>
        <div>
          <Button onClick={handleGet}>Get Data</Button>
          <Button onClick={() => setData(null)}>Clear Table</Button>
          <Button onClick={handlePost}>Post</Button>
        </div>
      </div>
    </StyledApp>
  )
}

export default App
