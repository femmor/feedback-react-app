import React from 'react'

const Clicker = ({ handleLeftClick, handleRightClick }) => {
    return (
        <div className="btn">
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleLeftClick}>Right</button>
        </div>
    )
}

export default Clicker
