
const Course = (props) => {
  const Header = ({ name }) => {
    return <h1>{name}</h1>
  }

  const Content = ({ parts }) => {
    const Total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
      <div>
      {parts.map(part => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p><b>Total Number of Exercises {Total}</b></p>
      </div>
    )
  }

  return (
    <div>
      <Header name={props.course.name}/>
      <Content parts={props.course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App