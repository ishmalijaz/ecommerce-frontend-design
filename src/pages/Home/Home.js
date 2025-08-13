"use client"

import { Link } from "react-router-dom"
import "./Home.css"
import { FaSearch, FaEdit, FaShippingFast, FaShieldAlt } from "react-icons/fa";

import homeWatch from "../../images/homeWatch.png";
import homeCamera from "../../images/homecamera.png";
import homeLaptop from "../../images/homelaptop.png";
import homeheadphone from "../../images/homeheadphone.png";
import homecanon from "../../images/homecanon.png";
import ae from "../../images/ae.png"
import america from "../../images/america.png"
import aus from "../../images/aus.png"
import Britain from "../../images/britian.png"
import china from "../../images/china.png"
import denmark from "../../images/denmark.png"
import france from "../../images/france.png"
import italy from "../../images/italy.png"
import russia from "../../images/russia.png"
import image108 from "../../images/image108.png"
import image107 from "../../images/image107.png"
import image106 from "../../images/image106.png"
import image104 from "../../images/image104.png"
import sofaone from "../../images/sofaOne.png"
import sofaTwo from "../../images/sofaTwo.png"
import juicemaker from "../../images/juiceMaker.png"
import lamp from "../../images/lamp.png"
import bed from "../../images/comfortBed.png"
import mtka from "../../images/brownMtka.png"
import Coffeemaker from "../../images/coffeeMaker.png"
import plant from "../../images/plant.png"
import washingMachine from "../../images/washingMachine.png"
import homeapp from "../../images/homeapp.png"
import headphone from "../../images/headphone.png"
import kettle from "../../images/kettle.png"
import gamingset from "../../images/gamingset.png"
import redphone from "../../images/redphone.png"
import greentablet from "../../images/greentablet.png"
import homeandoutdoor from "../../images/homeandoutdoor.png"
import { Laptop } from "lucide-react";


const Home = () => {
  // Category data
  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ]

  // Deals products data
   const dealsProducts = [
    { id: 1, name: "Smart watches", discount: "-25%", image: homeWatch },
    { id: 2, name: "Laptops", discount: "-15%", image: homeLaptop },
    { id: 3, name: "GoPro cameras", discount: "-40%", image: homeCamera },
    { id: 4, name: "Headphones", discount: "-25%", image: homeheadphone },
    { id: 5, name: "Canon cameras", discount: "-25%", image: homecanon },
  ];

  // Product grid data
  const homeProducts = [
  { id: 1, name: "Soft chairs", price: "From USD 19", image: sofaone },
  { id: 2, name: "Lamp", price: "From USD 19", image: lamp },
  { id: 3, name: "Comfort bed", price: "From USD 19", image: bed },
  { id: 4, name: "Brown Pot", price: "From USD 19", image: mtka },
  { id: 5, name: "Juice Maker", price: "From USD 100", image: juicemaker },
  { id: 6, name: "Coffee Maker", price: "From USD 39", image: Coffeemaker },
  { id: 7, name: "Home appliance", price: "From USD 19", image: homeapp},
  { id: 8, name: "Plant", price: "From USD 10", image: plant },
];

const consumerProducts = [
  { id: 9, name: "Smart watches", price: "From USD 19", image: homeWatch },
  { id: 10, name: "Cameras", price: "From USD 89", image: homecanon },
  { id: 11, name: "Headphones", price: "From USD 10", image: headphone },
  { id: 12, name: "Electric Kettle", price: "From USD 90", image: kettle },
  { id: 13, name: "Gaming set", price: "From USD 35", image: gamingset },
  { id: 14, name: "Laptops & PC", price: "From USD 340", image: homeLaptop },
  { id: 16, name: "Tablets", price: "From USD 240", image: greentablet },
];


  // Recommended products data
  const recommendedProducts = [
    {
      id: 1,
      name: "T-shirts with multiple colors, for men",
      price: "$10.30",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 2,
      name: "Jeans shorts for men blue color",
      price: "$10.30",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 3,
      name: "Brown winter coat medium size",
      price: "$12.50",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 4,
      name: "Jeans bag for travel for men",
      price: "$34.00",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 5,
      name: "Leather wallet",
      price: "$99.00",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 6,
      name: "Canon camera black, 100x zoom",
      price: "$9.99",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 7,
      name: "Headset for gaming with mic",
      price: "$8.99",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 8,
      name: "Smart watch silver color modern",
      price: "$10.30",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 9,
      name: "Blue wallet for men leather material",
      price: "$10.30",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 10,
      name: "Jeans bag for travel for men",
      price: "$80.95",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  // Services data
  const services = [
  {
    id: 1,
    title: "Source from Industry Hubs",
    image: image108,
    Icon: FaSearch,
  },
  {
    id: 2,
    title: "Customize Your Products",
    image: image104,
    Icon: FaEdit,
  },
  {
    id: 3,
    title: "Fast, reliable shipping by ocean or air",
    image: image106,
    Icon: FaShippingFast,
  },
  {
    id: 4,
    title: "Product monitoring and inspection",
    image: image107,
    Icon: FaShieldAlt,
  },
];

  // Regions data
  const regions = [
  { name: "Arabic Emirates", image: ae, domain: "shopname.ae" },
  { name: "Australia", image: aus, domain: "shopname.au" },
  { name: "United States", image: america, domain: "shopname.com" },
  { name: "Russia", image: russia, domain: "shopname.ru" }, 
  { name: "Italy", image: italy, domain: "shopname.it" },
  { name: "Denmark", image: france, domain: "denmark.com.dk" },
  { name: "France", image: denmark, domain: "shopname.com.fr" },
  { name: "China", image: china, domain: "shopname.ae" },
  { name: "Great Britain", image: Britain, domain: "shopname.co.uk" },
];

  return (
    <div className="home-page">
      <div className="container">
        {/* Main Unified Container */}
        <div className="main-hero-container">
          {/* Category Sidebar */}
          <div className="category-section">
            <ul className="category-list">
              {categories.map((category, index) => (
                <li key={index} className="category-item">
                  <Link to={`/products/${category.toLowerCase().replace(/\s+/g, "-")}`} className="category-link">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Section */}
          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-overlay">
              <div className="hero-text">
                <h1>Latest trending</h1>
                <h2>Electronic items</h2>
                <button className="hero-btn">Learn more</button>
              </div>
            </div>
          </div>


          {/* Right Sidebar Cards */}
          <div className="sidebar-cards">
            <div className="user-card">
              <div className="user-avatar">
                <span className="avatar-icon">👤</span>
              </div>
              <div className="user-info">
                <p className="user-greeting">Hi, user</p>
                <p className="user-subtitle">let's get started</p>
                <button className="join-btn">Join now</button>
                <button className="login-btn">Log in</button>
              </div>
            </div>

            <div className="promo-card orange-card">
              <h3>Get US $10 off with a new supplier</h3>
            </div>

            <div className="promo-card teal-card">
              <h3>Send quotes with supplier preferences</h3>
            </div>
          </div>
        </div>

        {/* Rest of the content below the main container */}
        <div className="content-sections">
          {/* Deals Section */}
          <section className="deals-section">
            <div className="deals-header">
              <div className="deals-title">
                <h2>Deals and offers</h2>
                <p className="deals-subtitle">Hygiene equipments</p>
              </div>
              <div className="countdown">
                <div className="time-unit">
                  <span className="time-number">04</span>
                  <span className="time-label">Days</span>
                </div>
                <div className="time-unit">
                  <span className="time-number">13</span>
                  <span className="time-label">Hour</span>
                </div>
                <div className="time-unit">
                  <span className="time-number">34</span>
                  <span className="time-label">Min</span>
                </div>
                <div className="time-unit">
                  <span className="time-number">56</span>
                  <span className="time-label">Sec</span>
                </div>
              </div>
            </div>
            <div className="deals-grid">
              {dealsProducts.map((product) => (
                <div key={product.id} className="deal-card">
                  <div className="deal-image">
                    <img src={product.image || "/placeholder.svg"} alt={product.name} />
                  </div>
                  <h3 className="deal-name">{product.name}</h3>
                  <div className="discount-badge">{product.discount}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Product Grid */}
          <div className="product-grid-container">
            <section className="product-section home-outdoor">
              <div className="section-left with-bg">
                <div className="overlay-content">
                  <h2>Home and outdoor</h2>
                  <button className="source-btn">Source now</button>
                </div>
              </div>
              <div className="products-grid">
                {homeProducts.map((product) => (
                  <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="product-section consumer-electronics">
              <div className="section-left with-consumer-bg">
                <div className="overlay-content">
                  <h2>Consumer electronics and gadgets</h2>
                  <button className="source-btn">Source now</button>
                </div>
              </div>

              <div className="products-grid">
                {consumerProducts.map((product) => (
                  <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Quote Section */}
          <section className="quote-section">
            <div className="quote-content">
              <div className="quote-left">
                <h2>An easy way to send requests to all suppliers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <div className="quote-form">
                <h3>Send quote to suppliers</h3>
                <form className="supplier-form">
                  <input type="text" placeholder="What item you need?" className="form-input" />
                  <textarea placeholder="Type more details" className="form-textarea" rows="3"></textarea>
                  <div className="form-row">
                    <input type="number" placeholder="Quantity" className="form-input quantity-input" />
                    <select className="form-select">
                      <option>Pcs</option>
                      <option>Kg</option>
                      <option>Tons</option>
                    </select>
                  </div>
                  <button type="submit" className="send-inquiry-btn">
                    Send inquiry
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* Full width sections */}
        {/* Recommended Items */}
        <section className="recommended-section">
          <div className="container">
            <h2>Recommended items</h2>
            <div className="recommended-grid">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="recommended-card">
                  <div className="recommended-image">
                    <img src={product.image || "/placeholder.svg"} alt={product.name} />
                  </div>
                  <div className="recommended-info">
                    <p className="recommended-price">{product.price}</p>
                    <h3 className="recommended-name">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2>Our extra services</h2>
            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-image">
                    <img src={service.image || "/placeholder.svg"} alt={service.title} />
                    <div className="service-icon">{services.Icon}</div>
                  </div>
                  <h3>{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Region Section */}
        <section className="region-section">
          <div className="container">
            <h2>Suppliers by region</h2>
            <div className="regions-grid">
              {regions.map((region, index) => (
                <div key={index} className="region-item">
                  <img src={region.image} alt={region.name} className="region-flag" />
                  <div className="region-info">
                    <span className="region-name">{region.name}</span>
                    <span className="region-domain">{region.domain}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
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
      </div>
    </div>
  )
}

export default Home
