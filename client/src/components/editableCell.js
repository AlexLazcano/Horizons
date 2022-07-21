import { Form } from 'antd'
import React from 'react'
import DynamicInput from './DynamicInput'

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  inputProps,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[{ required: true, message: `Please Input ${title}!` }]}
        >
          <DynamicInput inputType={inputType} inputProps={inputProps} />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

export default EditableCell
