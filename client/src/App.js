import 'antd/dist/antd.min.css'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Row, Col, Button } from 'antd'
import { BACKEND_URL } from './lib/constants'
import { StyledApp } from './app-styles'

function App() {
  const [data, setData] = React.useState(null)

 

  async function handleClick() {
    await axios
      .get(`${BACKEND_URL}/students`)
      .then(res => {
        console.log(res.data);
       
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
          <Col span={12}>Column 1</Col>
          <Col span={12}>Column 2</Col>
        </Row>
        <div>
          <Button onClick={handleClick}>Click me</Button>
          <Button onClick={() => setData('')}>Delete</Button>
          {data && <div>{data}</div>}
        </div>
      </div>
    </StyledApp>
  )
}

export default App
