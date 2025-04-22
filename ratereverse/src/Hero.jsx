import SearchForm from "./SearchForm"
import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Find Course Prerequisites at San Diego State University</h1>
            <p className="hero-description">
              Easily check prerequisites for any SDSU course. Plan your academic journey with confidence.
            </p>
            <div className="hero-buttons">
              <button className="button primary">Get Started</button>
              <button className="button outline-light">Learn More</button>
            </div>
          </div>
          <SearchForm />
        </div>
      </div>
    </section>
  )
}
