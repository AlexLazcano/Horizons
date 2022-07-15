import { Button, Col, Form, Input } from 'antd'
import React from 'react'
import { TABLE_COLUMNS, TABLE_NAMES } from '../lib/constants'
import requests from '../lib/requests'
import { StyledControls } from './styles'

const Controls = ({ currentTable, setTableData, setCurrentTable }) => {
  const getAll = () => {
    requests[currentTable]
      .getAll()
      .then(res => {
        setTableData(res)
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
        <Button type='primary' danger onClick={() => setTableData(null)} block>
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
      <Col span={8} className='table-buttons'>
        <div>Tables</div>
        {TABLE_NAMES.map(({ sqlTable, name }) => (
          <Button onClick={() => setCurrentTable(sqlTable)} key={name}>
            {name}
          </Button>
        ))}
      </Col>
    </StyledControls>
  )
}

export default Controls
