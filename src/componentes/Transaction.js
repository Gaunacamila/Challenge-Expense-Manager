import React, { useContext } from 'react';
import { Movimientos } from './Movimientos';
import { Globalcontext} from '../context/State';

export const Transaction = () => {
    const {transactions} = useContext(Globalcontext);
    
    return (
        <>
            <h3>History</h3>
            <ul  className='list'>
                { transactions.map(transaction => ( <Movimientos key={transaction.id} transaction={transaction}/>))}
            
              
            </ul>  
        </>
    )
}
