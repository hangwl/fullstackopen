import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (<div>{props.label} {props.value}</div>)

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
      <Button handleClick={() => setGood(good+1)} text="Good"></Button>
      <Button handleClick={() => setNeutral(neutral+1)} text="Neutral"></Button>
      <Button handleClick={() => setBad(bad+1)} text="Bad"></Button>
      <h2>statistics</h2>
      {hasFeedback ?(
        <>
          <Statistics label="good" value={good}></Statistics>
          <Statistics label="neutral" value={neutral}></Statistics>
          <Statistics label="bad" value={bad}></Statistics>
          <Statistics label="all" value={all}></Statistics>
          <Statistics label="average" value={average}></Statistics>
          <Statistics label="positive" value={positive + '%'}></Statistics>
        </>
      ) : (
        <p>No feedback given</p>
      )}

    </div>
  )
}

export default App