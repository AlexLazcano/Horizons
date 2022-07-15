import { Select } from 'antd'
import React from 'react'

const { Option } = Select

const DynamicSelect = ({ options }) => {
  if (!options) {
    return null
  }
  return (
    <Select>
      {options.map(option => (
        <Option key={option}>{option}</Option>
      ))}
    </Select>
  )
}

export default DynamicSelect
