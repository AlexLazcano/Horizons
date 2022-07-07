import './App.css'
import React from 'react'
import axios from 'axios'
import 'antd/dist/antd.min.css'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get('/api').then(res =>{
      setData(res.data.message);
    })
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{!data ? 'Loading...' : data}</p>
      </header>
    </div>
  )
}

export default App