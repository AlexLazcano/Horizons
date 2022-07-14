import { Button, Col, Form, Input } from 'antd'
import React from 'react'
import { TABLE_COLUMNS } from '../lib/constants'
import requests from '../lib/requests'
import { StyledControls } from './styles'

const Controls = ({ currentTable, setTable }) => {
  const getAll = () => {
    requests[currentTable]
      .getAll()
      .then(res => {
        setTable(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const create = values => {
    requests[currentTable].create({ ...values })
  }

  return (
    <StyledControls>
      <Col span={8} className='buttons'>
        <Button type='primary' danger onClick={() => setTable(null)} block>
          Clear Table
        </Button>
        <Button type='primary' onClick={getAll} block>
          Get Data
        </Button>
      </Col>
      <Col span={8} className='form'>
        <Form onFinish={create} layout='vertical'>
          {TABLE_COLUMNS[currentTable].Columns.map(
            ({ title, dataIndex, key, hidden }) =>
              hidden ? null : (
                <Form.Item key={key} label={title} name={dataIndex}>
                  <Input />
                </Form.Item>
              )
          )}
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Create
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </StyledControls>
  )
}

export default Controls
