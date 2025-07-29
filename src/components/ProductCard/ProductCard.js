import { Link } from "react-router-dom"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image || "/placeholder.svg"} alt={product.name} />
          {product.discount && <span className="discount-badge">-{product.discount}%</span>}
        </div>
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price">
            <span className="current-price">${product.price}</span>
            {product.originalPrice && <span className="original-price">${product.originalPrice}</span>}
          </div>
          {product.rating && (
            <div className="product-rating">
              <div className="stars">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="reviews">({product.reviews})</span>
            </div>
          )}
        </div>
      </Link>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  )
}

export default ProductCard
