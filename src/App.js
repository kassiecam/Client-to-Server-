import './App.css';
import React, { useState } from 'react';

function App() {
  const [returnedData, setReturnedData] = useState(['Hi there']);
  const getData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json());
    console.log(newData);
    setReturnedData(newData.result)
  }
  return (
    <div className="App">
      <button onClick={() => getData('/api')}>Welcome Greeting</button>
      <button onClick={() => getData('/quit')}>Quit</button>
      <p>{returnedData}</p>
    </div>
  );
}

export default App;
