import { Button, Col, Form } from 'antd'
import moment from 'moment'
import React from 'react'
import { TABLE_COLUMNS, TABLE_NAMES } from '../lib/constants'
import requests from '../lib/requests'
import DynamicInput from './DynamicInput' 

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
    console.log(currentTable)
    const { BirthDate } = values
    const date = BirthDate ? moment(BirthDate)?.format('YYYY-MM-DD') : null

    requests[currentTable].create({
      ...values,
      BirthDate: date
    })
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
