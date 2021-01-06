import { useState } from 'react';
import './App.css';
import Anecdotes from './components/Anecdotes';
import Button from './components/Button';

const App = () => {

  const [selected, setSelected] = useState(0)
  const [anecdote, setAnecdote] = useState('')

  const points = []

  const showAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    const item = anecdotes[randomAnecdote]
    setAnecdote(item)
    points.push(anecdote)
    console.log(points)
    selected > 0 ? setSelected(0) : setSelected(selected)
  }

  const handleSelected = () => {
    // Check if selected else setSelected to 0
    setSelected(selected + 1)
  }


  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  return (
    <div className="app">
      <div className="app-container">
        <h1>Anecdotes</h1>
        <Anecdotes anecdote={anecdote} selected={selected} showAnecdote={showAnecdote}/>
        <Button anecdote={anecdote} handleSelected={handleSelected} selected={selected} showAnecdote={showAnecdote}/>
      </div>
    </div>
  );
}

export default App;
