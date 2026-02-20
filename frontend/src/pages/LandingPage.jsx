function LandingPage({ onStart }) {
  return (
    <div className="landing">
      <div className="landing-content">

        <div className="landing-header">
          <h1 className="app-name">DayPlanner</h1>
          <p className="app-tagline">Plan your day. One day at a time.</p>
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