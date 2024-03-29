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
  const [editingKey, setEditingKey] = useState({
    key1: '',
    key2: '',
    key3: ''
  })
  const [form] = Form.useForm()
  const [totalRows, setTotalRows] = useState('...')
  const [filters, setFilters] = useState([])
  const idsRef = useRef({})

  useEffect(() => {
    getAll()
    getDependencies(currentTable)
    clearFilters()
  }, [currentTable])

  const deleteRecord = (id, id2, id3) => {
    const ids = [id, id2, id3]
    // filter out empty ids
    const filteredIds = ids.filter(id => id !== undefined)

    requests[currentTable].delete.apply(this, filteredIds).then(res => {
      if (res.status === 200) {
        getAll()
      }
    })
  }

  const editRow = record => {
    form.setFieldsValue({
      ...record
    })
    setEditingKey({
      key1: record?.key1,
      key2: record?.key2,
      key3: record?.key3
    })
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
  const isEditing = (key1, key2, key3) => {
    if (key3) {
      return (
        editingKey.key1 === key1 &&
        editingKey.key2 === key2 &&
        editingKey.key3 === key3
      )
    }
    if (key2) {
      return editingKey.key1 === key1 && editingKey.key2 === key2
    }
    return editingKey.key1 === key1
  }
  const cancelEdit = () =>
    setEditingKey({
      key1: '',
      key2: '',
      key3: ''
    })
  const saveEdit = async (id, id2, id3) => {
    try {
      const ids = [id, id2, id3]

      const filteredIds = ids.filter(id => id !== undefined)
      const row = await form.validateFields()
      filteredIds.push(row)
      console.log(filteredIds)

      requests[currentTable].update.apply(this, filteredIds).then(res => {
        if (res?.status === 200) {
          getAll()
        }
      })

      setEditingKey({
        key1: '',
        key2: '',
        key3: ''
      })
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

  const getTotalRows = () => {
    requests[currentTable]
      ?.getTotalRows()
      .then(res => {
        setTotalRows(res + ' total ' + currentTable.toLowerCase())
      })
      .catch(err => {
        console.log(err)
      })
  }

  const clearFilters = () => {
    setFilters([])
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
            record.key1 = record.SID
            const editable = isEditing(record.key1)
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
          type: 'input',
          editable: true
        },
        {
          title: 'Last Name',
          dataIndex: 'LastName',
          type: 'input',
          key: 'LastName',
          editable: true
        },
        {
          title: 'Biography',
          dataIndex: 'Biography',
          key: 'Biography',
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
            record.key1 = record.IID
            const editable = isEditing(record.key1)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button type='primary' onClick={() => saveEdit(record.IID)}>
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button danger onClick={() => deleteRecord(record?.IID)}>
                  Delete
                </Button>
              </Space>
            )
          }
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
          type: 'input',
          // TODO: EDIT functionality
          editable: false
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            record.key1 = record.LanguageCode
            const editable = isEditing(record.key1)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button
                  type='primary'
                  onClick={() => saveEdit(record.LanguageCode)}
                >
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button
                  danger
                  onClick={() => deleteRecord(record?.LanguageCode)}
                >
                  Delete
                </Button>
              </Space>
            )
          }
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
          // TODO: EDIT functionality
          editable: false,
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
          render: (text, record) => {
            record.key1 = record.QuizID
            const editable = isEditing(record.key1)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button type='primary' onClick={() => saveEdit(record.QuizID)}>
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button danger onClick={() => deleteRecord(record?.QuizID)}>
                  Delete
                </Button>
              </Space>
            )
          }
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
            options: idsRef.current.languages
          }
        },
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.students
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
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.instructors
          },
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
    fillblankqs: {
      TableName: 'Fill in the Blanks Questions',
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
          editable: true,
          inputProps: {
            showSearch: true,
            options: idsRef.current.quizzes
          }
        },
        {
          title: 'Prompt',
          dataIndex: 'Prompt',
          key: 'Prompt',
          type: 'input',
          editable: true
        },
        {
          title: 'Text',
          dataIndex: 'Text',
          key: 'Text',
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
            record.key1 = record.QID
            record.key2 = record.QuizID
            const editable = isEditing(record.key1, record.key2)
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
          type: 'select',
          editable: true,
          inputProps: {
            showSearch: true,
            options: idsRef.current.quizzes
          }
        },
        {
          title: 'Prompt',
          dataIndex: 'Prompt',
          key: 'Prompt',
          type: 'input',
          editable: true
        },
        {
          title: 'Answer',
          dataIndex: 'Answer',
          key: 'Answer',
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
            record.key1 = record.QID
            record.key2 = record.QuizID
            const editable = isEditing(record.key1, record.key2)
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
          editable: true,
          inputProps: {
            showSearch: true,
            options: idsRef.current.quizzes
          }
        },
        {
          title: 'Prompt',
          dataIndex: 'Prompt',
          key: 'Prompt',
          editable: false,
          type: 'input'
        },
        {
          title: 'Audio',
          dataIndex: 'Audio',
          key: 'Audio',
          editable: false,
          type: 'input'
        },
        {
          title: 'Text',
          dataIndex: 'Text',
          key: 'Text',
          editable: false,
          type: 'input'
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            record.key1 = record.QID
            record.key2 = record.QuizID
            // TODO: Editable Functionality
            const editable = isEditing(record.key1, record.key2)
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
            record.key1 = record.CountryID
            const editable = isEditing(record.key1)
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
            options: idsRef.current.students
          }
        },
        {
          // TODO: EDIT Functionality
          title: 'CountryID',
          dataIndex: 'CountryID',
          key: 'CountryID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.countries
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            record.key1 = record.SID
            record.key2 = record.CountryID
            const editable = isEditing(record.key1, record.key2)
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
      TableName: 'Taught By',
      Columns: [
        {
          title: 'IID',
          dataIndex: 'IID',
          key: 'IID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.instructors
          }
        },
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          type: 'select',
          editable: true,
          inputProps: {
            showSearch: true,
            options: idsRef.current.students
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            record.key1 = record.IID
            record.key2 = record.SID
            const editable = isEditing(record.key1, record.key2)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button
                  type='primary'
                  onClick={() => saveEdit(record.IID, record.SID)}
                >
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button
                  danger
                  onClick={() => deleteRecord(record?.IID, record?.SID)}
                >
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    lessons_contain_students: {
      TableName: 'Lessons Contain Students',
      Columns: [
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.students
          }
        },
        {
          title: 'LID',
          dataIndex: 'LID',
          key: 'LID',
          editable: true,
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.lessons
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            record.key1 = record.SID
            record.key2 = record.LID
            const editable = isEditing(record.key1, record.key2)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button
                  type='primary'
                  onClick={() => saveEdit(record.SID, record.LID)}
                >
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button
                  danger
                  onClick={() => deleteRecord(record?.SID, record?.LID)}
                >
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    students_take_quizzes: {
      TableName: 'Students Take Quizzes',
      Columns: [
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.students
          }
        },
        {
          title: 'QuizID',
          dataIndex: 'QuizID',
          editable: true,
          key: 'QuizID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.quizzes
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            record.key1 = record.SID
            record.key2 = record.QuizID
            const editable = isEditing(record.key1, record.key2)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button
                  type='primary'
                  onClick={() => saveEdit(record.SID, record.QuizID)}
                >
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button
                  danger
                  onClick={() => deleteRecord(record?.SID, record?.QuizID)}
                >
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    interested_in: {
      TableName: 'Interested In',
      Columns: [
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.students
          }
        },
        {
          title: 'LanguageCode',
          dataIndex: 'LanguageCode',
          key: 'LanguageCode',
          editable: true,
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current?.languages
          }
        },
        {
          title: 'SkillLevel',
          editable: true,
          dataIndex: 'SkillLevel',
          key: 'skillLevel',
          type: 'input'
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            record.key1 = record.SID
            record.key2 = record.LanguageCode
            const editable = isEditing(record.key1, record.key2)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button
                  type='primary'
                  onClick={() => saveEdit(record?.SID, record?.LanguageCode)}
                >
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button
                  danger
                  onClick={() =>
                    deleteRecord(record?.SID, record?.LanguageCode)
                  }
                >
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    students_in_groups: {
      TableName: 'Students In Groups',
      Columns: [
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.students
          }
        },
        {
          title: 'GID',
          dataIndex: 'GID',
          key: 'GID',
          editable: true,
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.groups
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            record.key1 = record.SID
            record.key2 = record.GID
            const editable = isEditing(record.key1, record.key2)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button
                  type='primary'
                  onClick={() => saveEdit(record.SID, record.GID)}
                >
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button
                  danger
                  onClick={() => deleteRecord(record?.SID, record?.GID)}
                >
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    division_groups: {
      TableName: 'Division Groups',
      Columns: [
        {
          title: 'GID',
          dataIndex: 'GID',
          key: 'GID',
          hidden: true,
          type: 'select'
        },
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          hidden: true,
          type: 'select'
        }
      ]
    },
    students_connected_with: {
      TableName: 'Students Connected With',
      Columns: [
        {
          title: 'SIDA',
          dataIndex: 'SIDA',
          key: 'SIDA',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.students
          }
        },
        {
          title: 'SIDB',
          dataIndex: 'SIDB',
          key: 'SIDB',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.students
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            record.key1 = record.SIDA
            record.key2 = record.SIDB
            const editable = isEditing(record.key1, record.key2)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button
                  type='primary'
                  onClick={() => saveEdit(record.SIDA, record.SIDB)}
                >
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button
                  danger
                  onClick={() => deleteRecord(record?.SIDA, record?.SIDB)}
                >
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    students_join_countries: {
      TableName: 'Students Join Countries',
      Columns: [
        {
          title: 'First Name',
          dataIndex: 'FirstName',
          key: 'FirstName',
          hidden: true
        },
        {
          title: 'Last Name',
          dataIndex: 'LastName',
          key: 'LastName',
          hidden: true
        },
        {
          title: 'Country',
          dataIndex: 'Country',
          key: 'Country',
          hidden: true
        }
      ]
    },

    instructor_grade_student_quiz: {
      TableName: 'Instructor Grade Student Quiz',
      Columns: [
        {
          title: 'SID',
          dataIndex: 'SID',
          key: 'SID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.students
          }
        },
        {
          title: 'IID',
          dataIndex: 'IID',
          key: 'IID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.instructors
          }
        },
        {
          title: 'QuizID',
          dataIndex: 'QuizID',
          key: 'QuizID',
          type: 'select'
        },
        {
          title: 'Score',
          dataIndex: 'Score',
          key: 'Score',
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
            record.key1 = record.SID
            record.key2 = record.IID
            record.key3 = record.QuizID
            const editable = isEditing(record.key1, record.key2, record.key3)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button
                  type='primary'
                  onClick={() =>
                    saveEdit(record?.SID, record?.IID, record?.QuizID)
                  }
                >
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button
                  danger
                  onClick={() =>
                    deleteRecord(record?.SID, record?.IID, record?.QuizID)
                  }
                >
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },

    instructor_know_language: {
      TableName: 'Instructor Know Language',
      Columns: [
        {
          title: 'IID',
          dataIndex: 'IID',
          key: 'IID',
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.instructors
          }
        },
        {
          title: 'LanguageCode',
          dataIndex: 'LanguageCode',
          key: 'LanguageCode',
          editable: true,
          type: 'select',
          inputProps: {
            showSearch: true,
            options: idsRef.current.languages
          }
        },
        {
          title: 'Controls',
          key: 'key',
          dataIndex: 'key',
          hidden: true,
          width: '10%',
          render: (text, record) => {
            record.key1 = record.IID
            record.key2 = record.LanguageCode
            record.key3 = record.QuizID
            const editable = isEditing(record.key1, record.key2)
            return editable ? (
              <Space size='middle'>
                <Button onClick={cancelEdit}>Cancel</Button>
                <Button
                  type='primary'
                  onClick={() => saveEdit(record.IID, record.LanguageCode)}
                >
                  Save
                </Button>
              </Space>
            ) : (
              <Space size='middle'>
                <Button onClick={() => editRow(record)}>Edit</Button>
                <Button
                  danger
                  onClick={() =>
                    deleteRecord(record?.IID, record?.LanguageCode)
                  }
                >
                  Delete
                </Button>
              </Space>
            )
          }
        }
      ]
    },
    avg_score_per_instructor: {
      TableName: 'Avg Student Score Per Instructor',
      Columns: [
        {
          title: 'IID',
          dataIndex: 'IID',
          key: 'IID'
        },
        {
          title: 'First Name',
          dataIndex: 'FirstName',
          key: 'FirstName'
        },
        {
          title: 'Last Name',
          dataIndex: 'LastName',
          key: 'LastName'
        },
        {
          title: 'Student AVG Score',
          dataIndex: 'avg_score',
          key: 'avg_score'
        }
      ]
    }
  }

  const columns = TABLE_COLUMNS[currentTable]?.Columns

  const mergedColumns = columns
    ?.filter(col => {
      if (filters.length === 0) return true

      return filters.includes(col.dataIndex)
    })
    ?.map(col => {
      if (!col.editable) {
        return col
      }

      return {
        ...col,
        onCell: (record, row) => {
          return {
            record,
            inputType: col.type,
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record.key1, record.key2, record.key3),
            inputProps: col.inputProps
          }
        }
      }
    })

  return (
    <StyledApp>
      <header>Horizons</header>
      <h1 className='header'>{TABLE_COLUMNS[currentTable]?.TableName}</h1>
      <Row className='count-label'>
        <Button onClick={() => getTotalRows()}>Get Total Rows</Button>
        <h2>{totalRows}</h2>
      </Row>
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
        setTotalRows={setTotalRows}
        getAllUpdate={getAll}
        columns={columns}
        setFilters={setFilters}
        filters={filters}
        clearFilters={clearFilters}
      />
    </StyledApp>
  )
}

export default App
