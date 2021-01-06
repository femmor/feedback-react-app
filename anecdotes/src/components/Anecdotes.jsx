import React, {useEffect} from 'react'


const Anecdotes = ({ anecdote, selected, showAnecdote }) => {
    useEffect(() => {
        showAnecdote()
    }, [])
    return (
        <div className='anecdote'>
            <p>
                {anecdote}
            </p>
            <p>{selected} Votes</p>
        </div>
    )
}

export default Anecdotes
