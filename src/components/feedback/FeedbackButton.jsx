import React from 'react'

const FeedbackButton = ({ handleGoodClick, handleNeutralClick, handleBadClick }) => {
    return (
        <div className="btn">
            <button className="goodBtn" onClick={handleGoodClick}>Good</button>
            <button className="neutralBtn" onClick={handleNeutralClick}>Neutral</button>
            <button className="badBtn" onClick={handleBadClick}>Bad</button>
        </div>
    )
}

export default FeedbackButton
