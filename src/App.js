import React from 'react';
import { Header } from './componentes/Header';
import { Balance } from './componentes/Balance';
import './App.css';
//import { Balance } from './componentes/Balance';
//import './App.css';


function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />          

      </div>
    </div>
  );
}

export default App;


