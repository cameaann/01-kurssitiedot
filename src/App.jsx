import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total";

function App() {
  const courses = [
    {
      name:'Half Stack application development',
      parts:[
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]   
    }
  ]

  console.log(courses[0].parts);

  return (
    <div>
     <Header name = {courses[0].name}/>
     <Content part = {courses[0].parts} />
     <Total ex = {courses[0].parts}/>

    </div>
  )
}

export default App
