import React from 'react'

const Statistics = ({ good, neutral, bad, averageHandler, allVotes, positiveVotes }) => {
    return (
        <div>
            <h2>Statistics </h2>
            {
                allVotes() <= 0 ? (<h4>No feedback given...</h4>) : (
                    <div className="statistics">
                        <span className="good">Good: {good}</span>
                        <span className="neutral">Neutral: {neutral}</span>
                        <span className="bad">Bad: {bad}</span>
                        <span>Average: {averageHandler()}</span>
                        <span>All Votes: {allVotes()}</span>
                        <span>Positive Votes: {`${positiveVotes()}%`}</span>
                    </div>
                )
            }
        </div>
    )
}

export default Statistics
