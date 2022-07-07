import 'antd/dist/antd.min.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { BACKEND_URL } from './lib/constants'

function App() {
  // use state to store the data from the server
  // can use data to render components on the client
  const [data, setData] = useState([])

  // gets data when component mounts
  useEffect(() => {
    getData()
  }, [])

  // function to get data from users endpoint
  const getData = async () => {
    await Axios.get(`${BACKEND_URL}/users`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Horizons - CMPT 354</p>
      </header>
    </div>
  )
}

export default App
