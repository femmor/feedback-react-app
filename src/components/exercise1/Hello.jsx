import React from 'react'

const Hello = ({ name, age }) => {
    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <h2>Welcome {name}!</h2>
            <p>You were probably born in {bornYear()}</p>
        </div>
    )
}

export default Hello
