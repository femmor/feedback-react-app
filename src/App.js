
import { useState } from "react"
import FeedbackButton from "./components/feedback/FeedbackButton";
import Statistics from "./components/feedback/Statistics";

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const averageHandler = () => {
    const average = (good + neutral + bad) / 3
    return average.toFixed(2)
  }

  const allVotes = () => {
    return good + neutral + bad
  }

  const positiveVotes = () => {
    const partialValue = good + neutral
    const totalValue = good + neutral + bad
    const positivePercentage = (100 * partialValue) / totalValue
    return positivePercentage.toFixed()
  }


  return (
    <div className="counter-container">
      <h1>Give your feedback</h1>
      <FeedbackButton handleGoodClick={handleGoodClick} handleNeutralClick={handleNeutralClick} handleBadClick={handleBadClick}/>
      <Statistics good={good} neutral={neutral} bad={bad} averageHandler={averageHandler} allVotes={allVotes} positiveVotes={positiveVotes}/>
    </div>
  );
}

export default App;
