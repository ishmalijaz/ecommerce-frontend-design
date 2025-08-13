"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "T-shirts with multiple colors, for men and lady",
      price: 78.99,
      quantity: 9,
      size: "medium",
      color: "teal",
      material: "Cotton",
      seller: "Artel Market",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tshirtone-2CJPATlmJyjvYaoymIovVNy8Xvnt3Y.png",
    },
    {
      id: 2,
      name: "T-shirts with multiple colors, for men and lady",
      price: 39.0,
      quantity: 3,
      size: "medium",
      color: "blue",
      material: "Cotton",
      seller: "Best factory LLC",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tshirttwo-MLUEAUKotDS35xLyyL2h5TefvSRY9h.png",
    },
    {
      id: 3,
      name: "Business suit jacket for professional wear",
      price: 170.5,
      quantity: 1,
      size: "medium",
      color: "navy blue",
      material: "Wool blend",
      seller: "Artel Market",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coat-SIAHZpxI8M82UOslYZhB9Fb1ttIz4K.png",
    },
  ])

  const [savedItems] = useState([
    {
      id: 4,
      name: "Canon EOS 2000D DSLR Camera",
      price: 399.5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dslr-3FQA4EBamriAEO0D1htmySan4YW54K.png",
    },
    {
      id: 5,
      name: "Xiaomi Mi 9 Smartphone - Black",
      price: 299.5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homecanon-Q6r7RmQAA2ecJorXaGUPVKtbY5EhJ2.png",
    },
    {
      id: 6,
      name: "Smart Watch with Gray Band",
      price: 199.5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homeWatch-MuWIEMq5rsQ9M5MLRHt4ZS3l3t4oqp.png",
    },
    {
      id: 7,
      name: "Premium Wireless Headphones",
      price: 149.5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headphone-gNPxnAMZ3UKHpnoJpIab6DwWKTUsqJ.png",
    },
    {
      id: 8,
      name: "Denim Backpack - Blue",
      price: 89.5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bag-YNHYDX3qrmkzwhwdwtejfOTdDkczbv.png",
    },
    {
      id: 9,
      name: "Modern Table Lamp",
      price: 79.5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lamp-NwnUFr7oNOfSSQrAl44uAdklsipcGn.png",
    },
  ])

  const [couponCode, setCouponCode] = useState("")

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = 60.0
  const tax = 14.0
  const total = subtotal - discount + tax

  const updateQuantity = (id, newQuantity) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item)),
    )
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const removeAllItems = () => {
    setCartItems([])
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-layout">
          {/* Main Cart Content */}
          <div className="cart-main">
            <div className="cart-header">
              <h1>My cart ({cartItems.length})</h1>
            </div>

            {cartItems.length > 0 ? (
              <div className="cart-items-container">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <div className="item-specs">
                        <span>
                          Size: {item.size}, Color: {item.color}, Material: {item.material}
                        </span>
                      </div>
                      <div className="item-seller">
                        <span>Seller: {item.seller}</span>
                      </div>
                      <div className="item-actions">
                        <button className="action-btn remove-btn" onClick={() => removeItem(item.id)}>
                          Remove
                        </button>
                        <button className="action-btn save-btn">Save for later</button>
                      </div>
                    </div>
                    <div className="item-price">
                      <span className="price">${item.price.toFixed(2)}</span>
                    </div>
                    <div className="item-quantity">
                      <label>Qty:</label>
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                        className="quantity-select"
                      >
                        {[...Array(20)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}

                <div className="cart-actions">
                  <Link to="/" className="back-to-shop-btn">
                    ← Back to shop
                  </Link>
                  <button className="remove-all-btn" onClick={removeAllItems}>
                    Remove all
                  </button>
                </div>
              </div>
            ) : (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <Link to="/" className="continue-shopping-btn">
                  Continue Shopping
                </Link>
              </div>
            )}

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-item">
                <div className="trust-icon">🔒</div>
                <div className="trust-content">
                  <h4>Secure payment</h4>
                  <p>Have you ever finally just</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">💬</div>
                <div className="trust-content">
                  <h4>Customer support</h4>
                  <p>Have you ever finally just</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">🚚</div>
                <div className="trust-content">
                  <h4>Free delivery</h4>
                  <p>Have you ever finally just</p>
                </div>
              </div>
            </div>

            {/* Saved for Later */}
            <div className="saved-section">
              <h2>Saved for later</h2>
              <div className="saved-items-grid">
                {savedItems.map((item) => (
                  <div key={item.id} className="saved-item">
                    <div className="saved-item-image">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} />
                    </div>
                    <div className="saved-item-info">
                      <div className="saved-item-price">${item.price.toFixed(2)}</div>
                      <h4 className="saved-item-name">{item.name}</h4>
                      <button className="move-to-cart-btn">🛒 Move to cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promotional Banner */}
            <div className="promo-banner">
              <div className="promo-content">
                <h3>Super discount on more than 100 USD</h3>
                <p>Have you ever finally just write dummy info</p>
              </div>
              <button className="shop-now-btn">Shop now</button>
            </div>
          </div>

          {/* Cart Summary Sidebar */}
          <div className="cart-sidebar">
            <div className="coupon-section">
              <h3>Have a coupon?</h3>
              <div className="coupon-input-group">
                <input
                  type="text"
                  placeholder="Add coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="coupon-input"
                />
                <button className="apply-btn">Apply</button>
              </div>
            </div>

            <div className="order-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row discount">
                <span>Discount:</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="summary-row tax">
                <span>Tax:</span>
                <span>+${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="checkout-btn">Checkout</button>

              <div className="payment-methods">
                <img src="/placeholder.svg?height=32&width=50&text=AMEX" alt="American Express" />
                <img src="/placeholder.svg?height=32&width=50&text=MC" alt="Mastercard" />
                <img src="/placeholder.svg?height=32&width=50&text=PP" alt="PayPal" />
                <img src="/placeholder.svg?height=32&width=50&text=VISA" alt="Visa" />
                <img src="/placeholder.svg?height=32&width=50&text=PAY" alt="Apple Pay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
