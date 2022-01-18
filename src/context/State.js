import React, {createContext,useReducer,userReducer } from 'react';
import Appreducer from './Appreducer';


// Es el primer State

const initialstate = {
   transactions:  [
       { id: 1, text:'Coffe', amount: -120},
       { id: 2, text:'Salady', amount: 500},
       { id: 3, text:'chocolate', amount: -200},
       { id: 4, text:'Freelance', amount: 800}

   ]
}

//Crear context
export const Globalcontext = createContext(initialstate);

// Export Components

export const GlobalProvider = ({children})=> {
    const [state , dispatch] = useReducer(Appreducer,initialstate);
    
    return (<Globalcontext.Provider value={{
        transactions:state.transactions
    } }>
        {children}
         </Globalcontext.Provider>)
}