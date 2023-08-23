const Course = (props) => {
    const Header = ({ name }) => {
      return <h2>{name}</h2>
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

export default Course