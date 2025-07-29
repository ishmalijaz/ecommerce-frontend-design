import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-main">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Latest trending</h1>
            <h2>Electronic items</h2>
            <button className="hero-btn">Learn more</button>
          </div>
          <div className="hero-image">
            <img src="/placeholder.svg?height=300&width=400" alt="Electronic devices" />
          </div>
        </div>
      </div>

      <div className="hero-sidebar">
        <div className="user-info-card">
          <div className="user-avatar">
            <img src="/placeholder.svg?height=50&width=50" alt="User" />
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
          <button className="promo-btn">Sign up</button>
        </div>

        <div className="promo-card teal">
          <h3>Send quotes with supplier preferences</h3>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
