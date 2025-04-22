import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './Hero.jsx'
import './Hero.css'
import './App.css'
import './SearchForm.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
  </StrictMode>,
)
