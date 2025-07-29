import "./FilterSidebar.css"

const FilterSidebar = () => {
  const categories = ["Mobile accessory", "Electronics", "Smartphones", "Modern tech"]

  const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"]

  const features = ["Metallic", "Plastic cover", "8GB RAM", "Super power", "Large memory"]

  const priceRanges = ["All", "Under $20", "$25 to $100", "$100 to $300", "$300 to $500", "Above $500"]

  const conditions = ["Any", "Refurbished", "Brand new", "Old items"]

  const ratings = [5, 4, 3, 2, 1]

  return (
    <div className="filter-sidebar">
      <div className="filter-section">
        <h3>Category</h3>
        <ul className="filter-list">
          {categories.map((category, index) => (
            <li key={index}>
              <label className="filter-item">
                <input type="checkbox" />
                <span>{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section">
        <h3>Brand</h3>
        <ul className="filter-list">
          {brands.map((brand, index) => (
            <li key={index}>
              <label className="filter-item">
                <input type="checkbox" />
                <span>{brand}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section">
        <h3>Features</h3>
        <ul className="filter-list">
          {features.map((feature, index) => (
            <li key={index}>
              <label className="filter-item">
                <input type="checkbox" />
                <span>{feature}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section">
        <h3>Price range</h3>
        <ul className="filter-list">
          {priceRanges.map((range, index) => (
            <li key={index}>
              <label className="filter-item">
                <input type="radio" name="price" />
                <span>{range}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section">
        <h3>Condition</h3>
        <ul className="filter-list">
          {conditions.map((condition, index) => (
            <li key={index}>
              <label className="filter-item">
                <input type="radio" name="condition" />
                <span>{condition}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section">
        <h3>Ratings</h3>
        <ul className="filter-list">
          {ratings.map((rating, index) => (
            <li key={index}>
              <label className="filter-item">
                <input type="checkbox" />
                <span>
                  {"★".repeat(rating)}
                  {"☆".repeat(5 - rating)}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterSidebar
