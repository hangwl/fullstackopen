import { useState } from 'react'

const Display = props => <div>{props.label} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good+1)} text="Good"></Button>
      <Button handleClick={() => setNeutral(neutral+1)} text="Neutral"></Button>
      <Button handleClick={() => setBad(bad+1)} text="Bad"></Button>
      <h2>statistics</h2>
      <Display label="good" value={good}></Display>
      <Display label="neutral" value={neutral}></Display>
      <Display label="bad"value={bad}></Display>
    </div>
  )
}

export default App