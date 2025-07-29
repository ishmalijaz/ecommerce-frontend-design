"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All category")
  const navigate = useNavigate()

  const categories = ["All category", "Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Toys"]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`)
    }
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <span className="logo-text">Brand</span>
            </Link>

            {/* Search Bar */}
            <form className="search-form" onSubmit={handleSearch}>
              <select
                className="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">
                Search
              </button>
            </form>

            {/* User Actions */}
            <div className="user-actions">
              <div className="language-currency">
                <select className="language-select">
                  <option>English | USD</option>
                  <option>Spanish | EUR</option>
                </select>
              </div>
              <div className="user-menu">
                <Link to="/account" className="user-link">
                  <i className="icon-user"></i>
                </Link>
                <Link to="/favorites" className="user-link">
                  <i className="icon-heart"></i>
                </Link>
                <Link to="/cart" className="user-link cart-link">
                  <i className="icon-cart"></i>
                  <span className="cart-count">0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-categories">
              <button className="categories-btn">
                <span className="hamburger-icon">☰</span>
                All category
              </button>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/products/hot-offers">Hot offers</Link>
              </li>
              <li>
                <Link to="/products/gift-boxes">Gift boxes</Link>
              </li>
              <li>
                <Link to="/products">Projects</Link>
              </li>
              <li>
                <Link to="/menu">Menu item</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
            <div className="nav-right">
              <span>Ship to 🇮🇳</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
