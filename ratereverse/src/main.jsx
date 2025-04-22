import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import Search from './Search.jsx'
import './Hero.css'
import './SearchForm.css'
import './CourseDisplay.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>

    <Search/>
  </StrictMode>,
)
