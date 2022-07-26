import { Button, Col, Form, Popover } from 'antd'
import React from 'react'
import {
  DIVISION_TABLE_NAMES,
  JOINED_TABLE_NAMES,
  TABLE_NAMES
} from '../lib/constants'
import requests from '../lib/requests'
import DynamicInput from './DynamicInput'
import { StyledControls } from './styles'

const Controls = ({
  currentTable,
  setTableData,
  setCurrentTable,
  setTotalRows,
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

  const onDivide = () => {
    requests[currentTable].divide().then(res => {
      console.log('onDivide', res)
      setTableData(res)
    })
  }
  const onTableChange = sqlTable => {
    setCurrentTable(sqlTable)
    setTotalRows('...')
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
        {currentTable === 'students' && (
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
        )}
        {currentTable === 'division_groups' && (
          <Popover
            content={
              <Form layout='vertical' onFinish={onDivide}>
                <Button type='primary' htmlType='submit'>
                  Get Students that are in ALL Groups
                </Button>
              </Form>
            }
            trigger='click'
          >
            <Button>Division</Button>
          </Popover>
        )}
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
            {TABLE_NAMES.find(({ sqlTable }) => sqlTable === currentTable) && (
              <Button type='primary' htmlType='submit'>
                Create
              </Button>
            )}
          </Form.Item>
        </Form>
      </Col>
      <Col span={8} className='table-buttons'>
        <div>
          <h3>Tables</h3>
          {TABLE_NAMES.map(({ sqlTable, name }) => (
            <Button onClick={() => onTableChange(sqlTable)} key={name}>
              {name}
            </Button>
          ))}
        </div>
        <div>
          <h3>Division</h3>
          {DIVISION_TABLE_NAMES.map(({ sqlTable, name }) => (
            <Button onClick={() => onTableChange(sqlTable)}>{name}</Button>
          ))}
        </div>
        <div>
          <h3>Joined Tables</h3>
          {JOINED_TABLE_NAMES.map(({ sqlTable, name }) => (
            <Button onClick={() => onTableChange(sqlTable)} key={name}>
              {name}
            </Button>
          ))}
        </div>
      </Col>
    </StyledControls>
  )
}

export default Controls
