import React from 'react'
import { DatePicker, Input, Checkbox } from 'antd'
import DynamicSelect from './DynamicSelect'

const INPUTS = {
  date: props => <DatePicker {...props} />,
  input: props => <Input {...props} />,
  checkbox: props => <Checkbox {...props} />,
  select: props => <DynamicSelect {...props} />
}

const DynamicInput = ({ type, onChange, inputProps }) => {
  const props = { onChange, ...inputProps }
  const InputComponent = INPUTS[type]

  return <InputComponent {...props} />
}

export default DynamicInput
