import "./Cart.css"

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Smart Watch",
      price: 299,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 199,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const total = subtotal + shipping

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-price">${item.price}</p>
                  </div>
                  <div className="quantity-controls">
                    <button className="qty-btn">-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="qty-btn">+</button>
                  </div>
                  <div className="item-total">${item.price * item.quantity}</div>
                  <button className="remove-btn">Remove</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>${shipping}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button className="continue-shopping-btn">Continue Shopping</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
