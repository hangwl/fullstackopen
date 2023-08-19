import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const FeedbackButtons = ({ handleGood, handleNeutral, handleBad }) => (
  <div>
    <Button handleClick={handleGood} text="Good"></Button>
    <Button handleClick={handleNeutral} text="Neutral"></Button>
    <Button handleClick={handleBad} text="Bad"></Button>
  </div>
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => (
  <div>
    <h2>statistics</h2>
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive.toFixed(2)}%</td>
        </tr>
      </tbody>
    </table>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good+neutral+bad
  const average = (good-bad)/all
  const positive = 100*good/all

  const hasFeedback = all > 0

  return (
    <div>
      <h2>give feedback</h2>
      <FeedbackButtons
        handleGood={() => setGood(good + 1)}
        handleNeutral={() => setNeutral(neutral + 1)}
        handleBad={() => setBad(bad + 1)}
      />
      {hasFeedback ? (<Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />)
      : (<p>No feedback given</p>)}
    </div>
  )
}

export default App