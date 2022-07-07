import './App.css'
import React from 'react'
import 'antd/dist/antd.min.css'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    try{
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }
    catch(error){
      console.log("Error here");
    }
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