import { useState } from 'react'
import './App.css'

function App() {
  const [department, setDepartment] = useState('')
  const [courseID, setID] = useState('')
  const handleSubmit = (e) => {
  e.preventDefault()
  const query = `${department} ${courseID}`
  alert(`searching for: ${query}`)
  }

  const fetchProfessor = async () => {
    
  }
  return (
    <div id ='root'>
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
    </div>
  )
}

export default App
