import React, {createContext,useReducer,userReducer } from 'react';


// Es el primer State

const initialstate = {
   transactions:  [
       { id: 1, text:'Coffe', amount: -120},
       { id: 2, text:'Salady', amount: 500},
       { id: 3, text:'chocolate', amount: -200},
       { id: 4, text:'Freelance', amount: 800}

   ]
}


export const Globalcontext = createContext(initialstate);

// Export Components

export const GlobalProvider = ({children})=> {
    const [state , dispath] = useReducer(AppReduce,initialstate);
    
    return (<Globalcontext.Provider>
        {children}
         </Globalcontext.Provider>)
}