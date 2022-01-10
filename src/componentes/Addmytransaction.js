import React, {useState} from 'react'

export const Addmytransaction = () => {
    const [text,setText] = useState('');
    const [amount,setTAmount] = useState(0);

    return (
        <div>
            <h3>Add my new transaction</h3>
            <form>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input type="text" value={Text} onChange={(e)=> setText(e.target.value)} placeholder='Enter text..'/>
                    </div>
                    <div className='form-control'>
                        <label form='amount'>Amount<br />
                        (negative - expense, positive - income)
                        </label>
                    <input type="number" value={amount} onChange={(e)=> setTAmount(e.target.value)}placeholder='Enter amount...'></input>
                </div>
                <button class='btn'>Add transaction</button>
            </form>
        </div>
    )
}
