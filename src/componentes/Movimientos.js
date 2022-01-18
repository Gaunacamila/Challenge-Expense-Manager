import React from 'react'

export const Movimientos = ({transaction}) => {
    return (
        <li className='minus'>
                
                {transaction.text} <span>$400</span><button className='delete-btn'>x</button>
                
        </li>  
    )
}
