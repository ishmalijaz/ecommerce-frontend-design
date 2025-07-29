import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/find-store">Find store</a>
              </li>
              <li>
                <a href="/categories">Categories</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Partnership</h3>
            <ul>
              <li>
                <a href="/about-us">About us</a>
              </li>
              <li>
                <a href="/find-store">Find store</a>
              </li>
              <li>
                <a href="/categories">Categories</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li>
                <a href="/help">Help center</a>
              </li>
              <li>
                <a href="/money-refund">Money refund</a>
              </li>
              <li>
                <a href="/shipping">Shipping info</a>
              </li>
              <li>
                <a href="/refunds">Refunds</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>For users</h3>
            <ul>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/settings">Settings</a>
              </li>
              <li>
                <a href="/orders">My Orders</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Get app</h3>
            <div className="app-downloads">
              <a href="#" className="app-store-btn">
                <img src="/placeholder.svg?height=40&width=120" alt="Download on App Store" />
              </a>
              <a href="#" className="google-play-btn">
                <img src="/placeholder.svg?height=40&width=120" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="logo-text">Brand</span>
            <p>Best information about the company goes here but now lorem ipsum is</p>
          </div>

          <div className="footer-social">
            <a href="#" className="social-link">
              Facebook
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              Instagram
            </a>
            <a href="#" className="social-link">
              YouTube
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2023 Ecommerce. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
