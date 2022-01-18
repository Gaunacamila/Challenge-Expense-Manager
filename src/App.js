import React from 'react';
import { Header } from './componentes/Header';
import { Balance } from './componentes/Balance';
import { IncomeExpenses } from './componentes/IncomeExpenses';
import { Transaction } from './componentes/Transaction';
import { Addmytransaction } from './componentes/Addmytransaction';

import { GlobalProvider } from './context/State';

import './App.css';


function App() {
  return (
    <GlobalProvider>
    <div>
      <Header />
      <div className='container'>
        <Balance /> 
        <IncomeExpenses />     
        <Transaction />  
        <Addmytransaction />  

      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;


