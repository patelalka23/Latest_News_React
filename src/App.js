
// import { useState } from 'react';
import './App.css';
import Fetchapi from './Fetchapi';
import Header from './Header';


function App() {
 

  return (
    <div className="App">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
    <h1> Latest News World-Wide </h1>
</div>
      <Fetchapi />
    </div>
  );
}

export default App;
