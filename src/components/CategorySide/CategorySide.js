import { Link } from "react-router-dom"
import "./CategorySide.css"

const CategorySidebar = () => {
  const categories = [
    { name: "Automobiles", color: "#dc3545" },
    { name: "Clothes and wear", color: "#17a2b8" },
    { name: "Home interiors", color: "#28a745" },
    { name: "Computer and tech", color: "#ffc107" },
    { name: "Tools, equipments", color: "#6f42c1" },
    { name: "Sports and outdoor", color: "#fd7e14" },
    { name: "Animal and pets", color: "#e83e8c" },
    { name: "Machinery tools", color: "#20c997" },
    { name: "More category", color: "#6c757d" },
  ]

  return (
    <div className="category-sidebar">
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <Link to={`/products/${category.name.toLowerCase().replace(/\s+/g, "-")}`} className="category-link">
              <span className="category-indicator" style={{ backgroundColor: category.color }}></span>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategorySidebar
