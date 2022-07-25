import { Button, Col, Form, Row, Popover } from 'antd'
import React from 'react'
import { TABLE_NAMES } from '../lib/constants'
import requests from '../lib/requests'
import DynamicInput from './DynamicInput'
import { StyledControls } from './styles'

const Controls = ({
  currentTable,
  setTableData,
  setCurrentTable,
  getAllUpdate,
  columns
}) => {
  const create = values => {
    requests[currentTable]
      .create({
        ...values
      })
      .then(res => {
        if (res.status === 200) {
          getAllUpdate()
        }
      })
  }
  const onProject = values => {
    console.log('onProject', values)
    requests[currentTable].getProjections(values).then(res => {
      setTableData(res)
    })
  }
  return (
    <StyledControls>
      <Col span={8} className='buttons'>
        <Button type='primary' danger onClick={() => setTableData(null)} block>
          Clear Table
        </Button>
        <Button type='primary' onClick={getAllUpdate} block>
          Get Data
        </Button>
        <Popover
          content={
            <Form layout='vertical' onFinish={onProject}>
              {columns.map(({ dataIndex, key, onChange, title }) => {
                return title === 'Controls' ? null : (
                  <Form.Item
                    key={key}
                    label={title}
                    name={dataIndex}
                    valuePropName={dataIndex}
                  >
                    <DynamicInput inputType='checkbox' onChange={onChange} />
                  </Form.Item>
                )
              })}
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form>
          }
          trigger='click'
        >
          <Button>Projection</Button>
        </Popover>
      </Col>
      <Col span={8} className='form'>
        <Form onFinish={create} layout='vertical'>
          {columns.map(
            ({ title, dataIndex, key, hidden, type, inputProps, onChange }) => {
              return hidden ? null : (
                <Form.Item key={key} label={title} name={dataIndex}>
                  <DynamicInput
                    inputType={type}
                    inputProps={inputProps}
                    onChange={onChange}
                  />
                </Form.Item>
              )
            }
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
