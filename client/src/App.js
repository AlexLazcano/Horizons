import './App.css'
import React from 'react'
import axios from 'axios'
import 'antd/dist/antd.min.css'
import { BACKEND_URL } from './lib/constants'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${BACKEND_URL}/api`).then(res =>{
      setData(res.data.message);
    })
  }, []);

  async function handleClick(){
    await axios.get(`${BACKEND_URL}/course`).then(res =>{
      console.log(res.data[0]);
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{!data ? 'Loading...' : data}</p>
        <button onClick={handleClick}>Test</button>
      </header>
    </div>
  )
}

export default App