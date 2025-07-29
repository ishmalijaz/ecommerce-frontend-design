"use client"

import { useState, useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import ProductCard from "../../components/ProductCard/ProductCard"
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar"
import "./ProductList.css"

const ProductList = () => {
  const { category } = useParams()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get("search")

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("name")

  // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: "Smart Watch",
      price: 299,
      originalPrice: 399,
      discount: 25,
      image: "/placeholder.svg?height=200&width=200",
      category: "electronics",
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 2,
      name: "Laptop",
      price: 899,
      originalPrice: 1199,
      discount: 25,
      image: "/placeholder.svg?height=200&width=200",
      category: "electronics",
      rating: 4.3,
      reviews: 89,
    },
    {
      id: 3,
      name: "Camera",
      price: 599,
      originalPrice: 799,
      discount: 25,
      image: "/placeholder.svg?height=200&width=200",
      category: "electronics",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Headphones",
      price: 199,
      originalPrice: 249,
      discount: 20,
      image: "/placeholder.svg?height=200&width=200",
      category: "electronics",
      rating: 4.4,
      reviews: 203,
    },
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts)
      setFilteredProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = [...products]

    if (category) {
      filtered = filtered.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    }

    if (searchQuery) {
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(filtered)
  }, [products, category, searchQuery, sortBy])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    )
  }

  return (
    <div className="product-list-page">
      <div className="container">
        <div className="page-header">
          <h1>
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : "All Products"}
            {searchQuery && ` - Search results for "${searchQuery}"`}
          </h1>
          <div className="sort-controls">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="product-list-layout">
          <aside className="filters-sidebar">
            <FilterSidebar />
          </aside>

          <main className="products-grid">
            {filteredProducts.length > 0 ? (
              <>
                <div className="products-container">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="pagination">
                  <button className="btn btn-secondary">Previous</button>
                  <span className="page-info">Page 1 of 5</span>
                  <button className="btn btn-primary">Next</button>
                </div>
              </>
            ) : (
              <div className="no-products">
                <p>No products found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default ProductList
