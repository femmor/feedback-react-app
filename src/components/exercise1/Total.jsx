import React from 'react'

const Total = ({parts}) => {

    const exercises = parts.map(part => part.exercises)
    const total = exercises.reduce((acc, item) => (acc + item), 0)

    return (
        <div>
            <hr/>
            <h4>Total Exercises: {total}</h4>
        </div>
    )
}

export default Total
