function LandingPage({ onStart }) {
  return (
    <div className="landing">
      <div className="landing-content">

        <div className="landing-header">
          <h1 className="app-name">DayPlanner</h1>
          <p className="app-tagline">Plan your day. One day at a time.</p>
        </div>

       <div className="tortoise-section">
        <div className="tortoise-walk">
          <div className="sky">
            <span className="sun">☀️</span>
            <span className="cloud cloud1">☁️</span>
            <span className="cloud cloud2">☁️</span>
          </div>
          <div className="ground">
            <span className="grass">🌿</span>
            <span className="grass">🌱</span>
            <span className="grass">🌿</span>
            <span className="grass">🌸</span>
            <span className="grass">🌱</span>
            <span className="grass">🌿</span>
            <span className="grass">🌸</span>
            <span className="grass">🌱</span>
          </div>
          <span className="flag">🚩</span>
          <span className="tortoise-emoji">🐢</span>
        </div>
         <p className="tortoise-quote">
           "It does not matter how slowly you go, as long as you do not stop."
         </p>
         <p className="quote-author">— Confucius</p>
       </div>

        <div className="landing-actions">
          <button className="btn-primary" onClick={onStart}>
            Start Planning
          </button>
          <button className="btn-secondary">
            Sign Up
          </button>
          <p className="no-signup">No signup required</p>
        </div>

      </div>
    </div>
  )
}

export default LandingPage