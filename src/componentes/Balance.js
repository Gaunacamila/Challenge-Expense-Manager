import React , { useContext} from 'react'
import { Globalcontext} from '../context/State';

export const Balance = () => {
    const {transactions} = useContext(Globalcontext);

    const amount= transactions.map(transactions => transactions.amount);
    const total = amount.reduce(( acc, item) => (acc +=item ),0).toFixed(2);
    return (
        <div> 
            <h4>Your current balance
</h4>   
        <h1>${total}</h1>
        </div>
    )
}
      