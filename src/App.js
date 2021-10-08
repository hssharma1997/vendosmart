import Header from './components/Header.js'
import Body from './components/Body.js'
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [city,setCity]=useState([]);
  useEffect(()=>{
    fetch('http://apitest.vendosmart.com/model/city/').then(response => response.json())
    .then(data => setCity(data));
    
  },[])
  return (
    <div className="App">
      <Header/>
      <Body city={city}/>
    
    </div>
  );
}

export default App;
