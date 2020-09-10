import React, { useState, useEffect } from "react";
import PhotoObject from './components/photoObject'
import axios from 'axios';
import "./App.css";

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=O4hble5uDb3ttkobcS2N8F4JKeuLMxY8RjzeXHoA')
      .then(response => {
        setData(response.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  return (
    <div className="App">
      <h1>NASA Photo of The Day!</h1>
      <PhotoObject data={data} />
    </div>
  );
}

export default App;
