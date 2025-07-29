import "./ProductGrid.css"

const ProductGrid = () => {
  const homeProducts = [
    { id: 1, name: "Soft chairs", price: "From USD 19", image: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Sofa & chair", price: "From USD 19", image: "/placeholder.svg?height=80&width=80" },
    { id: 3, name: "Kitchen dishes", price: "From USD 19", image: "/placeholder.svg?height=80&width=80" },
    { id: 4, name: "Smart watches", price: "From USD 19", image: "/placeholder.svg?height=80&width=80" },
    { id: 5, name: "Kitchen mixer", price: "From USD 100", image: "/placeholder.svg?height=80&width=80" },
    { id: 6, name: "Blenders", price: "From USD 39", image: "/placeholder.svg?height=80&width=80" },
    { id: 7, name: "Home appliance", price: "From USD 19", image: "/placeholder.svg?height=80&width=80" },
    { id: 8, name: "Coffee maker", price: "From USD 10", image: "/placeholder.svg?height=80&width=80" },
  ]

  const consumerProducts = [
    { id: 9, name: "Smart watches", price: "From USD 19", image: "/placeholder.svg?height=80&width=80" },
    { id: 10, name: "Cameras", price: "From USD 89", image: "/placeholder.svg?height=80&width=80" },
    { id: 11, name: "Headphones", price: "From USD 10", image: "/placeholder.svg?height=80&width=80" },
    { id: 12, name: "Smart watches", price: "From USD 90", image: "/placeholder.svg?height=80&width=80" },
    { id: 13, name: "Gaming set", price: "From USD 35", image: "/placeholder.svg?height=80&width=80" },
    { id: 14, name: "Laptops & PC", price: "From USD 340", image: "/placeholder.svg?height=80&width=80" },
    { id: 15, name: "Smartphones", price: "From USD 19", image: "/placeholder.svg?height=80&width=80" },
    { id: 16, name: "Electric kettle", price: "From USD 240", image: "/placeholder.svg?height=80&width=80" },
  ]

  return (
    <div className="product-grid-container">
      <section className="product-section home-outdoor">
        <div className="section-content">
          <div className="section-header">
            <h2>Home and outdoor</h2>
            <button className="source-btn">Source now</button>
          </div>
          <div className="products-grid">
            {homeProducts.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-image">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-decoration">
          <img src="/placeholder.svg?height=200&width=150" alt="Plant decoration" />
        </div>
      </section>

      <section className="product-section consumer-electronics">
        <div className="section-content">
          <div className="section-header">
            <h2>Consumer electronics and gadgets</h2>
            <button className="source-btn">Source now</button>
          </div>
          <div className="products-grid">
            {consumerProducts.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-image">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-decoration">
          <img src="/placeholder.svg?height=200&width=150" alt="Electronic gadgets" />
        </div>
      </section>
    </div>
  )
}

export default ProductGrid
