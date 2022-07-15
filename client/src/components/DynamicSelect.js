import { Select } from 'antd'
import React from 'react'

const { Option } = Select

const DynamicSelect = ({ options, onChange }) => {
  if (!options) {
    return null
  }
  return (
    <Select onChange={onChange}>
      {options.map(option => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  )
}

export default DynamicSelect
