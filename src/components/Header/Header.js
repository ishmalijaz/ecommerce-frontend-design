"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Header.css"
import logoimage from "../../images/image1.png"
import germnayflag from "../../images/germanyFlag.png"
import {
  UserIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/solid';

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
              <img src={logoimage} alt="Brand Logo" className="logo-image" />
              <span className="logo-text">Brand</span>
            </Link>

            {/* Search Bar */}
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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
              <button type="submit" className="search-btn">
                Search
              </button>
            </form>

            {/* User Actions */}
            <div className="user-actions">
              <div className="user-icons">
                <Link to="/profile" className="user-icon" title="Profile">
                  <UserIcon />
                  <span>Profile</span>
                </Link>

                <Link to="/messages" className="user-icon" title="Message">
                  <ChatBubbleLeftEllipsisIcon />
                  <span>Message</span>
                </Link>

                <Link to="/orders" className="user-icon" title="Orders">
                  <HeartIcon />
                  <span>Orders</span>
                </Link>

                <Link to="/cart" className="user-icon" title="My cart">
                  <ShoppingCartIcon />
                  <span>My cart</span>
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
            <div className="nav-left">
              <button className="categories-btn">
                <span className="hamburger-icon">☰</span>
                All category
              </button>
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
                <li className="nav-dropdown">
                  <Link to="/help">Help ▼</Link>
                </li>
              </ul>
            </div>

            <div className="nav-right">
              <div className="language-currency">
                <select className="language-select">
                  <option>English, USD </option>
                  <option>Spanish, EUR</option>
                </select>
              </div>
              <div className="ship-to">
                <span>Ship to</span>
                <img src={germnayflag} alt="Germany Flag" className="country-flag" />
                <span>▼</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
