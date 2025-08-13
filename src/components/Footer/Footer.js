import "./Footer.css"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import image1 from "../../images/image1.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              <img src={image1} alt="Brand Logo" className="logo-image" />
              <span className="logo-text">Brand</span>
            </div>
            <p className="brand-description">Best information about the company gies here but now lorem ipsum is</p>
            <div className="social-links">
              <a href="#" className="social-link facebook">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link twitter">
                <Twitter className="social-icon" />
              </a>
              <a href="#" className="social-link linkedin">
                <Linkedin className="social-icon" />
              </a>
              <a href="#" className="social-link instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="#" className="social-link youtube">
                <Youtube className="social-icon" />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
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

          {/* Partnership Section */}
          <div className="footer-section">
            <h3>Partnership</h3>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
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

          {/* Information Section */}
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li>
                <a href="/help-center">Help Center</a>
              </li>
              <li>
                <a href="/money-refund">Money Refund</a>
              </li>
              <li>
                <a href="/shipping">Shipping</a>
              </li>
              <li>
                <a href="/contact-us">Contact us</a>
              </li>
            </ul>
          </div>

          {/* For Users Section */}
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
                <a href="/my-orders">My Orders</a>
              </li>
            </ul>
          </div>

          {/* Get App Section */}
          <div className="footer-section get-app">
            <h3>Get app</h3>
            <div className="app-buttons">
              <a href="#" className="store-button">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="store-img"
                />
              </a>
              <a href="#" className="store-button">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="store-img"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>© 2023 Ecommerce.</p>
            </div>
            <div className="language-selector">
              <img src="/placeholder.svg?height=16&width=24" alt="US Flag" className="flag-image" />
              <span className="language">English</span>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
