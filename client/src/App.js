import { Button, Form, Row, Space, Table } from 'antd'
import 'antd/dist/antd.min.css'
import React, { useEffect, useRef, useState } from 'react'
import { StyledApp } from './app-styles'
import Controls from './components/Controls'
import EditableCell from './components/editableCell'

import { TABLE_DEPENDENCIES } from './lib/constants'
import requests from './lib/requests'

function App() {
  // TODO: Add change currentTable functionality
  const [currentTable, setCurrentTable] = useState('students')
  const [data, setData] = useState()
  const [editingKey, setEditingKey] = useState('')
  const [form] = Form.useForm()
  const idsRef = useRef({})

  useEffect(() => {
    getAll()
    getDependencies(currentTable)
  }, [currentTable])

  const deleteRecord = (id, id2) => {
    requests[currentTable].delete
      .apply(this, id2 != null ? [id, id2] : [id])
      .then(res => {
        if (res.status === 200) {
          getAll()
        }
      })
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
  const getIds = async table => {
    await requests[table]
      ?.getIds()
      .then(res => {
        idsRef.current[table] = res?.data.map(id => {
          return Object.values(id)[0]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getDependencies = async table => {
    TABLE_DEPENDENCIES[table]?.forEach(async dependency => {
      await getIds(dependency)
    })
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
          hidden: true,
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
          hidden: true,
          width: '10%',
          render: (text, record) => (
            <Space size='middle'>
              <Button onClick={() => console.log(record)}>Edit</Button>
              <Button danger onClick={() => deleteRecord(record?.IID)}>
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
          hidden: true,
          width: '10%',
          render: (text, record) => (
            <Space size='middle'>
              <Button onClick={() => console.log(record)}>Edit</Button>
              <Button danger onClick={() => deleteRecord(record?.LanguageCode)}>
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
            options: idsRef.current?.languages
          }
        },
        {
          title: 'IID',
          dataIndex: 'IID',
          key: 'IID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current?.instructors
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
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => (
            <Space size='middle'>
              <Button onClick={() => console.log(record)}>Edit</Button>
              <Button danger onClick={() => deleteRecord(record?.QuizID)}>
                Delete
              </Button>
            </Space>
          )
        }
      ]
    },
    studyplans: {
      TableName: 'Study Plans',
      Columns: [
        {
          title: 'SPID',
          dataIndex: 'SPID',
          key: 'SPID',
          hidden: true
        },
        {
          title: 'Rubric',
          dataIndex: 'Rubric',
          key: 'Rubric',
          type: 'input'
        },
        {
          title: 'LanguageCode',
          dataIndex: 'LanguageCode',
          key: 'LanguageCode',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current['languages']
          }
        },
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current['students']
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => (
            <Space size='middle'>
              <Button onClick={() => console.log(record)}>Edit</Button>
              <Button danger onClick={() => deleteRecord(record?.SPID)}>
                Delete
              </Button>
            </Space>
          )
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
          type: 'input',
          editable: true
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            const editable = isEditing(record)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button type='primary' onClick={() => saveEdit(record.GID)}>
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button danger onClick={() => deleteRecord(record?.GID)}>
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    lessons: {
      TableName: 'Lessons',
      Columns: [
        {
          title: 'LID',
          dataIndex: 'LID',
          key: 'LID',
          hidden: true,
          type: 'input'
        },
        {
          title: 'IID',
          dataIndex: 'IID',
          key: 'IID',
          type: 'input',
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
          title: 'Date',
          dataIndex: 'Date',
          key: 'Date',
          type: 'date',
          editable: true
        },
        {
          title: 'Time',
          dataIndex: 'Time',
          key: 'Time',
          type: 'time',
          editable: true
        },
        {
          title: 'Topic',
          dataIndex: 'Topic',
          key: 'Topic',
          type: 'input',
          editable: true
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
                <Button type='primary' onClick={() => saveEdit(record.LID)}>
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button danger onClick={() => deleteRecord(record?.LID)}>
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    multiplechoiceqs: {
      TableName: 'Multiple Choice Questions',
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
          type: 'input',
          editable: true
        },
        {
          title: 'QuizID',
          dataIndex: 'QuizID',
          key: 'QuizID',
          type: 'input',
          editable: true
        },
        {
          title: 'Prompt',
          dataIndex: 'Prompt',
          key: 'Prompt',
          type: 'input',
          editable: true
        },
        {
          title: 'Choice1',
          dataIndex: 'Choice1',
          key: 'Choice1',
          type: 'input',
          editable: true
        },
        {
          title: 'Choice2',
          dataIndex: 'Choice2',
          key: 'Choice2',
          type: 'input',
          editable: true
        },
        {
          title: 'Choice3',
          dataIndex: 'Choice3',
          key: 'Choice3',
          type: 'input',
          editable: true
        },
        {
          title: 'Choice4',
          dataIndex: 'Choice4',
          key: 'Choice4',
          type: 'input',
          editable: true
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            const editable = isEditing(record)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button type='primary' onClick={() => saveEdit(record.QID)}>
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button danger onClick={() => deleteRecord(record?.QID)}>
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    shortanswerqs: {
      TableName: 'Short Answer Questions',
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
          hidden: true,
          width: '10%',
          render: (text, record) => (
            <Space size='middle'>
              <Button onClick={() => console.log(record)}>Edit</Button>
              <Button danger onClick={() => deleteRecord(record?.QID)}>
                Delete
              </Button>
            </Space>
          )
        }
      ]
    },
    listeningqs: {
      TableName: 'Listening Questions',
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
          type: 'select',
          inputProps: {
            showSearch: true,
            options: ['1', '3', '7']
          }
        },
        {
          title: 'Prompt',
          dataIndex: 'Prompt',
          key: 'Prompt',
          type: 'input'
        },
        {
          title: 'Audio',
          dataIndex: 'Audio',
          key: 'Audio',
          type: 'input'
        },
        {
          title: 'Text',
          dataIndex: 'Text',
          key: 'Text',
          type: 'input'
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => (
            <Space size='middle'>
              <Button onClick={() => console.log(record)}>Edit</Button>
              <Button danger onClick={() => deleteRecord(record?.QID)}>
                Delete
              </Button>
            </Space>
          )
        }
      ]
    },
    countries: {
      TableName: 'Countries',
      Columns: [
        {
          title: 'CountryID',
          dataIndex: 'CountryID',
          key: 'CountryID',
          hidden: true
        },
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
          type: 'input',
          editable: true
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            const editable = isEditing(record)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button
                  type='primary'
                  onClick={() => saveEdit(record.CountryID)}
                >
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button danger onClick={() => deleteRecord(record?.CountryID)}>
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    students_in_countries: {
      TableName: 'Students In Countries',
      Columns: [
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: ['1', '3', '4']
          }
        },
        {
          title: 'CountryID',
          dataIndex: 'CountryID',
          key: 'CountryID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: ['1']
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            const editable = isEditing(record)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button
                  type='primary'
                  onClick={() => saveEdit(record.CountryID)}
                >
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button
                  danger
                  onClick={() => deleteRecord(record?.SID, record?.CountryID)}
                >
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    taught_by: {
      TableName: "Taught By",
      Columns: [
        {
          title: 'IID',
          dataIndex: 'IID',
          key: 'IID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: ['1', '3', '4']
          }
        },
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: ['1', '4']
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            const editable = isEditing(record)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button type='primary' onClick={() => saveEdit(record.CountryID)}>
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button danger onClick={() => deleteRecord(record?.IID, record?.SID)}>
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    lessons_contain_students:{
      TableName: 'Lessons Contain Students',
      Columns: [
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: ['1', '2', '3', '4']
          }
        },
        {
          title: 'LID',
          dataIndex: 'LID',
          key: 'LID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: ['1', '4']
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            const editable = isEditing(record)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button type='primary' onClick={() => saveEdit(record.CountryID)}>
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button danger onClick={() => deleteRecord(record?.SID, record?.LID)}>
                  Delete
                </Button>
              </Space>
            )
          }
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
