import React from 'react'

const Part = ({part}) => {
    return (
        <>
           <h3>Part: {part.name}</h3>
           <p>Exercises: {part.exercises}</p>
        </>
    )
}

export default Part
