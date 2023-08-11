const Header = (props) => {
  console.log(props)
  return (
        <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
      <div>
        <Part part={props.parts[0].part} exercises={props.parts[0].exercises} />
        <Part part={props.parts[1].part} exercises={props.parts[1].exercises} />
        <Part part={props.parts[2].part} exercises={props.parts[2].exercises} />
      </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14  
  
  const parts = [
    { part: part1, exercises: exercises1 },
    { part: part2, exercises: exercises2 },
    { part: part3, exercises: exercises3 },
  ]

  const total = exercises1 + exercises2 + exercises3;
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={total} />
    </div>
  )
}

export default App