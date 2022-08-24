import React from 'react';
import './App.css';
import { BasicTable } from './components/BasicTable';
import Countries from './components/Countries';


function App() {
  return (
    <div className="App">
      <Countries/>
      <BasicTable/>
    </div>
  );
}

export default App;
