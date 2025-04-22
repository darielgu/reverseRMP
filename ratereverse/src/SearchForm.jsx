import { Search } from "lucide-react"
import "./SearchForm.css"

export default function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-content">
        <div className="search-header">
          <h2 className="search-title">Search for a Course</h2>
          <p className="search-description">Enter a course code (e.g., CS 310) or course name to find prerequisites</p>
        </div>
        <div className="search-input-container">
          <input type="text" placeholder="e.g., CS 310, Biology 101" className="search-input" />
          <button className="search-button">
            <Search className="search-icon" />
          </button>
        </div>
        <div className="search-popular">
          <span className="popular-label">Popular searches:</span> CS 310, MATH 150, BIOL 203, PSYCH 101
        </div>
      </div>
    </div>
  )
}
