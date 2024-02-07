import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total";

function App() {
  const courses = [
    {
      name:'Half Stack application development',
      parts:[
        {
          title: 'Fundamentals of React',
          exercises: 10
        },
        {
          title: 'Using props to pass data',
          exercises: 7
        },
        {
          title: 'State of a component',
          exercises: 14
        }
      ]   
    }
  ]

  console.log(courses[0].parts);
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
     <Header name = {courses[0].name}/>
     <Content part = {courses[0].parts} />
     <Total ex = {courses[0].parts}/>

    </div>
  )
}

export default App
