// App.js
import React from 'react';
import './App.css';
import CovidData from './CovidData';


function App() {
  return (
    <div className="App container" >
      <header className="App-header"> 
        <CovidData />
      </header>
    </div>
  );
}

export default App;