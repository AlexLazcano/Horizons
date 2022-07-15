import React from 'react'
import { DatePicker, Input, Checkbox } from 'antd'
import DynamicSelect from './DynamicSelect'

const INPUTS = {
  date: () => <DatePicker />,
  input: () => <Input />,
  checkbox: () => <Checkbox />,
  select: props => <DynamicSelect {...props} />
}

const DynamicInput = ({ type, inputProps }) => {
  console.log(type)
  if (type === 'select') {
    console.log(type, inputProps)
  }

  const props = inputProps || {}
  const InputComponent = INPUTS[type]

  return <InputComponent {...props} />
}

export default DynamicInput
