import "./RecommendedItems.css"

const RecommendedItems = () => {
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

  return (
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
  )
}

export default RecommendedItems
