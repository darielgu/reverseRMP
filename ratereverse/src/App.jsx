import { useState } from 'react'
import './App.css'

function App() {
  const [department, setDepartment] = useState('') // using react useState for user input
  const [courseID, setID] = useState('')
  const [results, setResults] = useState([])


  const handleSubmit = async (e) => { // handling user clicking enter button
  e.preventDefault()
  const prof = await fetchProfessor();
  setResults(prof)
  }

  const fetchProfessor = async (e) => { // this is where we will be making our api call 
    const mockData = [
      { name: "Dr. Smith", rating: 4.7 },
      { name: "Prof. Lee", rating: 4.3 },
      { name: "Dr. Johnson", rating: 3.9 },
    ];

    //simulating a network delay
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(mockData)
      },1000)
    })
  }
  return (
    <div id =''>
      <div style = {{padding : '2rem'}}></div>
      <h1>Reverse Rate My Professor SDSU</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        placeholder='Department'
        value = {department}
        onChange={(e) => setDepartment(e.target.value)}>
        </input>
        <br/>
        <input
        type='text'
        placeholder='Course ID'
        value={courseID}
        onChange={(e) => setID(e.target.value)}
        >
        </input>
        <br/>
        <button type='submit'>Search</button>
      </form>
     
        <h2>Results</h2>
        <ul>
          {results.map((prof,index) =>(
            <li key={index}>
              {prof.name} -- {prof.rating}
            </li>
            
          ))}
        </ul>

 
    </div>
  )
}

export default App
