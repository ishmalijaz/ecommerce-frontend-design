"use client"

import { useState, useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./ProductList.css"

const ProductList = () => {
  const { category } = useParams()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get("search")

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedCondition, setSelectedCondition] = useState("any")
  const [selectedRating, setSelectedRating] = useState([])

  // Mock product data with real images
  const mockProducts = [
    {
      id: 1,
      name: "iPhone 12 Red 128GB",
      price: 998.0,
      originalPrice: 1128.0,
      discount: 12,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/redphone-zlXPiu4zGwg0AD6qjxmmDInbqLiuRy.png",
      category: "smartphones",
      brand: "Apple",
      rating: 4.5,
      reviews: 154,
      features: ["128GB Storage", "5G Ready", "Face ID"],
      condition: "brand new",
      freeShipping: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 2,
      name: "Xiaomi Mi 9 Smartphone Black",
      price: 998.0,
      originalPrice: 1128.0,
      discount: 12,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bluepinkphone-Q6XFnWrU6sHaWlfFcoQMt8f5Syd0zt.png",
      category: "smartphones",
      brand: "Xiaomi",
      rating: 4.5,
      reviews: 154,
      features: ["64GB Storage", "Dual Camera", "Fast Charging"],
      condition: "brand new",
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 3,
      name: "Xiaomi Pro Tablet - Black",
      price: 998.0,
      originalPrice: 1128.0,
      discount: 12,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/greentablet-gK6DUz0EMX01lBihhkheXyA9vTmlla.png",
      category: "tablets",
      brand: "Xiaomi",
      rating: 4.5,
      reviews: 154,
      features: ["11 inch Display", "256GB Storage", "Stylus Support"],
      condition: "brand new",
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 4,
      name: "MacBook Pro 16-inch Space Gray",
      price: 998.0,
      originalPrice: 1128.0,
      discount: 12,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homelaptop-sOgWLIcqBb9R2rHewmIzWcGU2rkLoV.png",
      category: "laptops",
      brand: "Apple",
      rating: 4.5,
      reviews: 154,
      features: ["M1 Chip", "16GB RAM", "512GB SSD"],
      condition: "brand new",
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 5,
      name: "Smart Watch Silver Modern",
      price: 998.0,
      originalPrice: 1128.0,
      discount: 12,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homeWatch-MuWIEMq5rsQ9M5MLRHt4ZS3l3t4oqp.png",
      category: "wearables",
      brand: "Samsung",
      rating: 4.5,
      reviews: 154,
      features: ["Heart Rate Monitor", "GPS", "Water Resistant"],
      condition: "brand new",
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 6,
      name: "Premium Wireless Headphones",
      price: 998.0,
      originalPrice: 1128.0,
      discount: 12,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headphone-gNPxnAMZ3UKHpnoJpIab6DwWKTUsqJ.png",
      category: "audio",
      brand: "Sony",
      rating: 4.5,
      reviews: 154,
      features: ["Noise Cancelling", "30hr Battery", "Wireless"],
      condition: "brand new",
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 7,
      name: "Gaming Headset with RGB",
      price: 998.0,
      originalPrice: 1128.0,
      discount: 12,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gamingset-LNHiaFS9xJrAyfGI1mFNPcYYH87MXD.png",
      category: "gaming",
      brand: "Razer",
      rating: 4.5,
      reviews: 154,
      features: ["RGB Lighting", "7.1 Surround", "Detachable Mic"],
      condition: "brand new",
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 8,
      name: "Canon EOS 2000D DSLR Camera",
      price: 998.0,
      originalPrice: 1128.0,
      discount: 12,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homecamera-koN2GJqmSYpWs0kEchroOdsRTuZ3Yw.png",
      category: "cameras",
      brand: "Canon",
      rating: 4.5,
      reviews: 154,
      features: ["24.1MP", "Full HD Video", "WiFi Enabled"],
      condition: "brand new",
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ]

  const categories = ["Mobile accessory", "Electronics", "Smartphones", "Modern tech", "Laptops", "Cameras", "Gaming"]

  const brands = ["Samsung", "Apple", "Huawei", "Xiaomi", "Lenovo", "Sony", "Canon", "Razer"]

  const features = [
    "Metallic",
    "Plastic cover",
    "8GB RAM",
    "Super power",
    "Large memory",
    "Fast charging",
    "Wireless",
    "RGB Lighting",
  ]

  const conditions = [
    { value: "any", label: "Any" },
    { value: "refurbished", label: "Refurbished" },
    { value: "brand new", label: "Brand new" },
    { value: "old items", label: "Old items" },
  ]

  const ratings = [5, 4, 3, 2, 1]

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

    if (category && category !== "all") {
      // Map certain categories to show electronics since we have electronics images
      const categoryMappings = {
        automobiles: ["smartphones", "electronics", "laptops", "cameras"],
        "clothes-and-wear": ["smartphones", "electronics"],
        "home-interiors": ["electronics", "laptops"],
        "computer-and-tech": ["laptops", "smartphones", "tablets", "cameras"],
        "tools-equipments": ["cameras", "gaming"],
        "sports-and-outdoor": ["wearables", "cameras"],
        "animal-and-pets": ["electronics"],
        "machinery-tools": ["cameras", "laptops"],
      }

      if (categoryMappings[category.toLowerCase()]) {
        // Show mapped categories
        filtered = filtered.filter((product) =>
          categoryMappings[category.toLowerCase()].includes(product.category.toLowerCase()),
        )
      } else {
        // Original filtering logic
        filtered = filtered.filter(
          (product) =>
            product.category.toLowerCase() === category.toLowerCase() ||
            product.brand.toLowerCase() === category.toLowerCase(),
        )
      }
    }

    if (searchQuery) {
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand))
    }

    // Features filter
    if (selectedFeatures.length > 0) {
      filtered = filtered.filter((product) => product.features.some((feature) => selectedFeatures.includes(feature)))
    }

    // Price range filter
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Condition filter
    if (selectedCondition !== "any") {
      filtered = filtered.filter((product) => product.condition === selectedCondition)
    }

    // Rating filter
    if (selectedRating.length > 0) {
      filtered = filtered.filter((product) => selectedRating.includes(Math.floor(product.rating)))
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
        case "featured":
        default:
          return 0
      }
    })

    setFilteredProducts(filtered)
  }, [
    products,
    category,
    searchQuery,
    selectedBrands,
    selectedFeatures,
    priceRange,
    selectedCondition,
    selectedRating,
    sortBy,
  ])

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const handleFeatureChange = (feature) => {
    setSelectedFeatures((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]))
  }

  const handleRatingChange = (rating) => {
    setSelectedRating((prev) => (prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]))
  }

  const getCategoryDisplayName = (category) => {
    const categoryNames = {
      automobiles: "Automobiles",
      "clothes-and-wear": "Clothes and wear",
      "home-interiors": "Home interiors",
      "computer-and-tech": "Computer and tech",
      "tools-equipments": "Tools, equipments",
      "sports-and-outdoor": "Sports and outdoor",
      "animal-and-pets": "Animal and pets",
      "machinery-tools": "Machinery tools",
    }
    return categoryNames[category] || category
  }

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
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/products">Electronics</Link>
          <span>›</span>
          <span>{category ? getCategoryDisplayName(category) : "Mobile accessory"}</span>
        </div>

        <div className="product-list-layout">
          {/* Sidebar Filters */}
          <aside className="filters-sidebar">
            {/* Category Filter */}
            <div className="filter-section">
              <h3>Category</h3>
              <ul className="filter-list">
                {categories.map((cat, index) => (
                  <li key={index}>
                    <label className="filter-item">
                      <input type="checkbox" />
                      <span>{cat}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand Filter */}
            <div className="filter-section">
              <h3>Brands</h3>
              <ul className="filter-list">
                {brands.map((brand, index) => (
                  <li key={index}>
                    <label className="filter-item">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                      />
                      <span>{brand}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <button className="see-all-btn">See all</button>
            </div>

            {/* Features Filter */}
            <div className="filter-section">
              <h3>Features</h3>
              <ul className="filter-list">
                {features.map((feature, index) => (
                  <li key={index}>
                    <label className="filter-item">
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(feature)}
                        onChange={() => handleFeatureChange(feature)}
                      />
                      <span>{feature}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <button className="see-all-btn">See all</button>
            </div>

            {/* Price Range Filter */}
            <div className="filter-section">
              <h3>Price range</h3>
              <div className="price-range-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                />
              </div>
              <button className="apply-btn">Apply</button>
            </div>

            {/* Condition Filter */}
            <div className="filter-section">
              <h3>Condition</h3>
              <ul className="filter-list">
                {conditions.map((condition, index) => (
                  <li key={index}>
                    <label className="filter-item">
                      <input
                        type="radio"
                        name="condition"
                        checked={selectedCondition === condition.value}
                        onChange={() => setSelectedCondition(condition.value)}
                      />
                      <span>{condition.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ratings Filter */}
            <div className="filter-section">
              <h3>Ratings</h3>
              <ul className="filter-list">
                {ratings.map((rating, index) => (
                  <li key={index}>
                    <label className="filter-item">
                      <input
                        type="checkbox"
                        checked={selectedRating.includes(rating)}
                        onChange={() => handleRatingChange(rating)}
                      />
                      <span>
                        {"★".repeat(rating)}
                        {"☆".repeat(5 - rating)}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="products-main">
            {/* Header */}
            <div className="products-header">
              <div className="results-info">
                <span>
                  {filteredProducts.length} items in {category ? getCategoryDisplayName(category) : "Mobile accessory"}
                </span>
                <label className="verified-only">
                  <input type="checkbox" />
                  <span>Verified only</span>
                </label>
              </div>
              <div className="header-controls">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
                <div className="view-controls">
                  <button
                    className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                    onClick={() => setViewMode("grid")}
                  >
                    ⊞
                  </button>
                  <button
                    className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                    onClick={() => setViewMode("list")}
                  >
                    ☰
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`products-container ${viewMode}`}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img src={product.image || "/placeholder.svg"} alt={product.name} />
                      <button className="wishlist-btn">♡</button>
                    </div>
                    <div className="product-info">
                      <div className="product-price">
                        <span className="current-price">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                      <div className="product-rating">
                        <div className="stars">
                          {"★".repeat(Math.floor(product.rating))}
                          {"☆".repeat(5 - Math.floor(product.rating))}
                        </div>
                        <span className="rating-text">{product.rating}</span>
                        <span className="orders-text">{product.reviews} orders</span>
                        {product.freeShipping && <span className="free-shipping">Free Shipping</span>}
                      </div>
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <Link to={`/product/${product.id}`} className="view-details">
                        View details
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-products">
                  <p>No products found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="pagination">
                <span className="pagination-info">Show 10</span>
                <div className="pagination-controls">
                  <button className="page-btn">‹</button>
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <button className="page-btn">›</button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default ProductList
