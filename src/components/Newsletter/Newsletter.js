import "./Newsletter.css"

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Subscribe on our newsletter</h2>
        <p>Get daily news on upcoming offers from many suppliers all over the world</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Email" className="newsletter-input" required />
          <button type="submit" className="newsletter-btn">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
