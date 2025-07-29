import "./DealsSection.css"

const DealsSection = () => {
  const dealsProducts = [
    {
      id: 1,
      name: "Smart watches",
      discount: "-25%",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 2,
      name: "Laptops",
      discount: "-15%",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 3,
      name: "GoPro cameras",
      discount: "-40%",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 4,
      name: "Headphones",
      discount: "-25%",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 5,
      name: "Canon cameras",
      discount: "-25%",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  return (
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
              <span className="discount-badge">{product.discount}</span>
            </div>
            <h3 className="deal-name">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DealsSection
