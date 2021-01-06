import React from 'react'

const Button = ({ increment, decrement, setToZero }) => {
    return (
        <div className="btn">
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Subtract</button>
            <button onClick={setToZero}>Reset</button>
        </div>
    )
}

export default Button
