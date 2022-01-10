import React from 'react';
import { Header } from './componentes/Header';
import { Balance } from './componentes/Balance';
import { IncomeExpenses } from './componentes/IncomeExpenses';
import { Transaction } from './componentes/Transaction';
import { Addmytransaction } from './componentes/Addmytransaction';

import './App.css';


function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance /> 
        <IncomeExpenses />     
        <Transaction />  
        <Addmytransaction />  

      </div>
    </div>
  );
}

export default App;


