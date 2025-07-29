"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./ProductDetail.css"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("M")
  const [loading, setLoading] = useState(true)

  // Mock product data
  const mockProduct = {
    id: 1,
    name: "Premium Smart Watch",
    price: 299,
    originalPrice: 399,
    discount: 25,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Experience the future on your wrist with our Premium Smart Watch. Featuring advanced health monitoring, GPS tracking, and seamless smartphone integration.",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "7-day battery life",
      "Bluetooth connectivity",
    ],
    specifications: {
      Display: '1.4" AMOLED',
      Battery: "300mAh",
      "Water Rating": "IP68",
      Connectivity: "Bluetooth 5.0",
      Compatibility: "iOS & Android",
    },
    rating: 4.5,
    reviews: 128,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
  }

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProduct(mockProduct)
      setLoading(false)
    }, 1000)
  }, [id])

  const handleAddToCart = () => {
    // Add to cart logic
    console.log("Added to cart:", { product, quantity, selectedSize })
    alert("Product added to cart!")
  }

  const handleBuyNow = () => {
    // Buy now logic
    console.log("Buy now:", { product, quantity, selectedSize })
    alert("Redirecting to checkout...")
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="error-container">
        <h2>Product not found</h2>
        <p>The product you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail-layout">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[selectedImage] || "/placeholder.svg"} alt={product.name} />
            </div>
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image || "/placeholder.svg"} alt={`${product.name} view ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>

            <div className="product-rating">
              <div className="stars">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="product-pricing">
              <span className="current-price">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">${product.originalPrice}</span>
                  <span className="discount">-{product.discount}%</span>
                </>
              )}
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-options">
              <div className="size-selector">
                <label>Size:</label>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? "active" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1}>
                    -
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart} disabled={!product.inStock}>
                Add to Cart
              </button>
              <button className="btn btn-secondary buy-now-btn" onClick={handleBuyNow} disabled={!product.inStock}>
                Buy Now
              </button>
            </div>

            {!product.inStock && (
              <div className="out-of-stock">
                <p>This item is currently out of stock</p>
              </div>
            )}
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="product-details-tabs">
          <div className="tabs-header">
            <button className="tab-button active">Features</button>
            <button className="tab-button">Specifications</button>
            <button className="tab-button">Reviews</button>
          </div>

          <div className="tab-content">
            <div className="features-tab">
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
