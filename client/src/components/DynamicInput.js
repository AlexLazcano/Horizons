import React from 'react'
import { DatePicker, Input, Checkbox, TimePicker } from 'antd'
import DynamicSelect from './DynamicSelect'

const INPUTS = {
  date: props => <DatePicker {...props} />,
  input: props => <Input {...props} />,
  checkbox: props => <Checkbox {...props} />,
  select: props => <DynamicSelect {...props} />,
  time: props => <TimePicker minuteStep={5} {...props} />
}

const DynamicInput = ({ inputType, onChange, inputProps }) => {
  if (inputType === undefined) {
    return null
  }

  const props = inputProps ? { onChange, ...inputProps } : { onChange }
  const inputComponent = INPUTS[inputType]

  return inputComponent(props)
}

export default DynamicInput
