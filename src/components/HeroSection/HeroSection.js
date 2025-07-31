import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-main">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Latest trending</h1>
            <h2>Electronic items</h2>
            <button className="hero-btn">Learn more</button>
          </div>
          <div className="hero-image">
            <img src="/placeholder.svg?height=200&width=300" alt="Electronic devices" />
          </div>
        </div>
      </div>

      <div className="hero-sidebar">
        <div className="user-info-card">
          <div className="user-avatar">
            <span className="avatar-text">User</span>
          </div>
          <div className="user-details">
            <p>Hi, user</p>
            <p>let's get started</p>
            <button className="join-btn">Join now</button>
            <button className="login-btn">Log in</button>
          </div>
        </div>

        <div className="promo-card orange">
          <h3>Get US $10 off with a new supplier</h3>
        </div>

        <div className="promo-card teal">
          <h3>Send quotes with supplier preferences</h3>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
