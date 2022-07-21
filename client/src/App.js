import { Button, Form, Row, Space, Table } from 'antd'
import 'antd/dist/antd.min.css'
import React, { useEffect, useState } from 'react'
import { StyledApp } from './app-styles'
import Controls from './components/Controls'
import EditableCell from './components/editableCell'
// import { TABLE_COLUMNS } from './lib/constants'
import requests from './lib/requests'

function App() {
  // TODO: Add change currentTable functionality
  const [currentTable, setCurrentTable] = useState('students')
  const [data, setData] = useState()
  const [editingKey, setEditingKey] = useState('')
  const [form] = Form.useForm()

  useEffect(() => {
    getAll()
  }, [currentTable])

  const deleteRecord = id => {
    requests[currentTable].delete(id)
  }
  const updateRecord = (id, data) => {
    return requests[currentTable].update(id, data)
  }
  const editRow = record => {
    form.setFieldsValue({
      ...record
    })
    setEditingKey(record.key)
  }
  const getAll = () => {
    requests[currentTable]
      ?.getAll()
      .then(res => {
        setData(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const isEditing = record => record.key === editingKey
  const cancelEdit = () => setEditingKey('')
  const saveEdit = async key => {
    try {
      const row = await form.validateFields()

      updateRecord(key, row).then(res => {
        if (res?.status === 200) {
          getAll()
        }
      })

      setEditingKey('')
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }
  // Memoize the columns
  const TABLE_COLUMNS = {
    students: {
      TableName: 'Students',
      Columns: [
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'sid',
          hidden: true,
          type: 'input'
        },
        {
          title: 'First Name',
          dataIndex: 'FirstName',
          key: 'FirstName',
          type: 'input',
          editable: true
        },
        {
          title: 'Last Name',
          dataIndex: 'LastName',
          key: 'LastName',
          type: 'input',
          editable: true
        },
        {
          title: 'Birth Date',
          dataIndex: 'BirthDate',
          key: 'BirthDate',
          type: 'date',
          editable: true
        },
        {
          title: 'Time Zone',
          dataIndex: 'Timezone',
          key: 'Timezone',
          type: 'select',
          editable: true,
          inputProps: {
            showSearch: true,
            options: ['America/New_York', 'America/Chicago', 'America/Denver']
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          width: '10%',
          render: (text, record) => {
            const editable = isEditing(record)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button type='primary' onClick={() => saveEdit(record.SID)}>
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button danger onClick={() => deleteRecord(record?.SID)}>
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    instructors: {
      TableName: 'Instructors',
      Columns: [
        {
          title: 'IID',
          dataIndex: 'IID',
          key: 'iid',
          hidden: true
        },
        {
          title: 'First Name',
          dataIndex: 'FirstName',
          key: 'FirstName',
          type: 'input'
        },
        {
          title: 'Last Name',
          dataIndex: 'LastName',
          type: 'input',
          key: 'LastName'
        },
        {
          title: 'Biography',
          dataIndex: 'Biography',
          key: 'Biography',
          type: 'input'
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          width: '10%',
          render: (text, record) => (
            <Space size='middle'>
              <Button onClick={() => console.log(record)}>Edit</Button>
              <Button
                danger
                onClick={() => requests.instructors.delete(record?.IID)}
              >
                Delete
              </Button>
            </Space>
          )
        }
      ]
    },
    languages: {
      TableName: 'Languages',
      Columns: [
        {
          title: 'LanguageCode',
          dataIndex: 'LanguageCode',
          key: 'LanguageCode',
          type: 'input'
        },
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
          type: 'input'
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          width: '10%',
          render: (text, record) => (
            <Space size='middle'>
              <Button onClick={() => console.log(record)}>Edit</Button>
              <Button
                danger
                onClick={() => requests.languages.delete(record?.SID)}
              >
                Delete
              </Button>
            </Space>
          )
        }
      ]
    },
    quizzes: {
      TableName: 'Quizzes',
      Columns: [
        {
          title: 'QuizID',
          dataIndex: 'QuizID',
          key: 'QuizID',
          type: 'input',
          hidden: true
        },
        {
          title: 'LanguageCode',
          dataIndex: 'LanguageCode',
          key: 'LanguageCode',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: ['ES-ES']
          }
        },
        {
          title: 'IID',
          dataIndex: 'IID',
          key: 'IID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: ['1']
          }
        },
        {
          title: 'DateCreated',
          dataIndex: 'DateCreated',
          key: 'DateCreated',
          type: 'input',
          hidden: true
        },
        {
          title: 'DueDate',
          dataIndex: 'DueDate',
          key: 'DueDate',
          type: 'date'
        }
      ]
    },
    groups: {
      TableName: 'Groups',
      Columns: [
        {
          title: 'GID',
          dataIndex: 'GID',
          key: 'gid',
          hidden: true,
          type: 'input'
        },
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
          type: 'input'
        }
      ]
    },

    multiplechoiceqs: {
      TableName: 'MultipleChoiceQ',
      Columns: [
        {
          title: 'QID',
          dataIndex: 'QID',
          key: 'qid',
          hidden: true
        },
        {
          title: 'CorrectChoice',
          dataIndex: 'CorrectChoice',
          key: 'CorrectChoice',
          type: 'input'
        },
        {
          title: 'QuizID',
          dataIndex: 'QuizID',
          key: 'QuizID',
          type: 'input'
        },
        {
          title: 'Prompt',
          dataIndex: 'Prompt',
          key: 'Prompt',
          type: 'input'
        },
        {
          title: 'Choice1',
          dataIndex: 'Choice1',
          key: 'Choice1',
          type: 'input'
        },
        {
          title: 'Choice2',
          dataIndex: 'Choice2',
          key: 'Choice2',
          type: 'input'
        },
        {
          title: 'Choice3',
          dataIndex: 'Choice3',
          key: 'Choice3',
          type: 'input'
        },
        {
          title: 'Choice4',
          dataIndex: 'Choice4',
          key: 'Choice4',
          type: 'input'
        }
      ]
    },
    shortanswerqs: {
      TableName: 'ShortAnswerQ',
      Columns: [
        {
          title: 'QID',
          dataIndex: 'QID',
          key: 'qid',
          hidden: true
        },
        {
          title: 'QuizID',
          dataIndex: 'QuizID',
          key: 'QuizID',
          type: 'input'
        },
        {
          title: 'Prompt',
          dataIndex: 'Prompt',
          key: 'Prompt',
          type: 'input'
        },
        {
          title: 'Answer',
          dataIndex: 'Answer',
          key: 'Answer',
          type: 'input'
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          width: '10%',
          render: (text, record) => (
            <Space size='middle'>
              <Button onClick={() => console.log(record)}>Edit</Button>
              <Button
                danger
                onClick={() => requests.shortanswerqs.delete(record?.QID)}
              >
                Delete
              </Button>
            </Space>
          )
        }
      ]
    }
  }

  const columns = TABLE_COLUMNS[currentTable]?.Columns

  const mergedColumns = columns?.map(col => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.type,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
        inputProps: col.inputProps
      })
    }
  })

  return (
    <StyledApp>
      <header>Horizons</header>
      <h1 className='header'>{currentTable}</h1>
      <Row className='grid'>
        <Form form={form} component={false}>
          <Table
            components={{ body: { cell: EditableCell } }}
            className='data-table'
            dataSource={data}
            columns={mergedColumns}
            scroll={{ y: 400 }}
          />
        </Form>
      </Row>
      <Controls
        className='control-panel'
        setTableData={setData}
        currentTable={currentTable}
        setCurrentTable={setCurrentTable}
        getAllUpdate={getAll}
        columns={columns}
      />
    </StyledApp>
  )
}

export default App
